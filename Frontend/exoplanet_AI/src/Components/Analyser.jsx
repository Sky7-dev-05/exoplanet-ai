import React, { useState, useRef, useEffect } from 'react'; // ← Add useRef and useEffect
import Navbar from '../components/Navbar';
import ClassificationEngine from '../components/ClassificationEngine';
import ClassificationResult from '../components/ClassificationResult';
import CSVTemplateCard from '../components/CSVTemplateCard';

const API_BASE_URL = 'https://exoplanet-ai-v0zp.onrender.com'; 

export default function Analyser() {
  const [result, setResult] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const resultRef = useRef(null);

  useEffect(() => {
    if (isLoading || result || error) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' // Center the result in the view
        });
      }, 100);
    }
  }, [isLoading, result, error]); // Triggered when these states change

  const handleClassification = async (submission) => {
    setIsLoading(true);
    setError(null);    
    setResult(null);   

    const isFile = submission.type === 'file';
    
    const endpoint = isFile 
        ? `${API_BASE_URL}/api/predict-batch/`
        : `${API_BASE_URL}/api/predict/`;
    
    let config = {};

    if (isFile) {
        config = {
            method: 'POST',
            body: submission.data
        };
    } else {
        config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(submission.data)
        };
    }
    
    try {
        const response = await fetch(endpoint, config);
        
        if (!response.ok) {
            let errorDetail = response.statusText;
            try {
                const errorData = await response.json();
                errorDetail = errorData.detail || errorData.error || `Server error ${response.status}.`;
            } catch (e) { }
            throw new Error(`Analysis failed: ${errorDetail}`);
        }

        const data = await response.json();
        
        let resultItem = data;

        if (data.predictions && Array.isArray(data.predictions) && data.predictions.length > 0) {
            resultItem = data.predictions[0]; 
        } else if (isFile && !data.predictions) {
             throw new Error("The API returned an unexpected format or no prediction.");
        }

        const predictionText = resultItem.prediction === 'Confirmed' 
            ? 'Confirmed Exoplanet' 
            : (resultItem.prediction === 'Candidate' ? 'Exoplanet Candidate' : 'False Positive');

        setResult({
            prediction: predictionText, 
            confidence: (resultItem.probability * 100).toFixed(1)  
        });

    } catch (err) {
        console.error("Connection/Backend error:", err);
        setError(`Failed: ${err.message}. Please try again`);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div   
      className="min-h-screen flex flex-col font-sans">
      <Navbar /> 
      
      <main className="container mt-24 mx-auto p-4 md:p-8 pt-24 flex-grow">
        <div className="flex flex-col lg:flex-row justify-center lg:gap-12">
          
          <ClassificationEngine onClassify={handleClassification} />
          
          <div className=" lg:flex w-full lg:w-[450px] p-4 items-center justify-center">
             <CSVTemplateCard />
          </div>
        </div>
        
        {/* ← ADD ref={resultRef} here */}
        <div ref={resultRef}>
          <ClassificationResult 
              result={result} 
              isLoading={isLoading} 
              error={error} 
          />
        </div>
      </main>
      
    </div>
  );
}
