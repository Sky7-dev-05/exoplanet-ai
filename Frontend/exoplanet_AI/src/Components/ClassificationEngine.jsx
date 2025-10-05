import React, { useState, useRef } from 'react';

const KOI_FEATURES = [
  'koi_score',
  'koi_period',
  'koi_impact',
  'koi_duration',
  'koi_depth',
  'koi_prad',
  'koi_sma',
  'koi_teq',
  'koi_model_snr',
];

const initialManualData = KOI_FEATURES.reduce((acc, feature) => {
    acc[feature] = '';
    return acc;
}, {});

const ClassificationEngine = ({ onClassify }) => {
  const fileInputRef = useRef(null); 
  const [fileName, setFileName] = useState('');
  const [fileToUpload, setFileToUpload] = useState(null); 
  const [manualData, setManualData] = useState(initialManualData); 

  const handleFileUploadClick = () => { 
    fileInputRef.current.click(); 
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileToUpload(file);
      setManualData(initialManualData);
    }
    e.target.value = null; 
  };
  
  const handleFileSubmit = () => {
    if (fileToUpload) {
        const formData = new FormData();
        formData.append('file', fileToUpload);
        onClassify({ type: 'file', data: formData });
    }
  };
  
  const handleManualDataChange = (feature, value) => {
    setManualData(prev => ({
      ...prev,
      [feature]: value
    }));
  };
  
  const handleSubmitManualData = (e) => {
    e.preventDefault();
    
    const dataObject = {};
    KOI_FEATURES.forEach(feature => {
      dataObject[feature] = parseFloat(manualData[feature]) || 0;
    });
    
    if (Object.keys(dataObject).length > 0) {
        onClassify({ type: 'text', data: dataObject });
        setFileName(''); 
        setFileToUpload(null);
    }
  };

  return (
    <div className="w-full lg:w-[650px] p-4 md:p-8 bg-gray-950/50 rounded-xl shadow-2xl border border-blue-500/30">
      <h2 className="text-3xl sm:text-4xl md:text-[48px] orbitron font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
       <span className="text-4xl sm:text-5xl md:text-6xl"> Classification</span> <br/>Engine
      </h2>
      <p className="text-gray-100 mb-6 md:mb-8 leading-6 md:leading-8 text-base md:text-[18px] text-center mt-4 md:mt-5 px-2">
        Analyze transit data to detect potential exoplanets.
      </p>

      <div className="mb-4 md:mb-6">
        <label className="block text-xs md:text-sm font-medium text-gray-100 mb-2">
          Transit Data File (.csv)
        </label>
        
        <input 
          type="file" 
          accept=".csv" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          style={{ display: 'none' }} 
        />

        <button 
          onClick={handleFileUploadClick}
          className="w-full py-2.5 md:py-3 mb-3 orbitron bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg transform transition duration-200 hover:scale-[1.01] tracking-wider md:tracking-widest text-sm md:text-lg border border-blue-600/50"
        >
          <span className="hidden sm:inline">{fileName ? `SELECTED FILE: ${fileName}` : '1. SELECT A CSV FILE'}</span>
          <span className="sm:hidden">{fileName ? `📄 ${fileName}` : '1. SELECT CSV'}</span>
        </button>
        
        {fileToUpload && (
            <>
                <p className="mt-2 text-xs md:text-sm text-green-400 text-center mb-3">
                    File ready to be sent to the AI model.
                </p>
                <button
                    onClick={handleFileSubmit}
                    className="w-full py-2.5 md:py-3 orbitron bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transform transition duration-200 hover:scale-[1.01] tracking-wider md:tracking-widest text-sm md:text-lg border border-green-600/50"
                >
                    <span className="hidden sm:inline">2. START FILE CLASSIFICATION</span>
                    <span className="sm:hidden">2. START ANALYSIS</span>
                </button>
            </>
        )}
      </div>
      
      <div className="flex items-center my-4 md:my-6">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-2 md:mx-4 text-gray-400 text-xs md:text-sm font-medium">OR ENTER MANUALLY</span>
          <div className="flex-grow border-t border-gray-600"></div>
      </div>
      
      <div>
        <p className="text-gray-100 mb-3 md:mb-4 font-medium text-xs md:text-sm px-1">
          Enter features (single row):
        </p>
        
        <div className="overflow-x-auto bg-gray-800/70 p-2 md:p-4 rounded-lg border border-gray-700 -mx-2 md:mx-0">
            <table className="min-w-full divide-y divide-gray-700">
                <thead>
                    <tr>
                        {KOI_FEATURES.map(feature => (
                            <th key={feature} className="px-1 py-1 text-left text-[10px] md:text-xs font-semibold text-blue-400 uppercase tracking-wider whitespace-nowrap">
                                {feature.replace('koi_', '')}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                    <tr>
                        {KOI_FEATURES.map(feature => (
                            <td key={`input-${feature}`} className="px-1 py-1 whitespace-nowrap">
                                <input
                                    type="text"
                                    value={manualData[feature]}
                                    onChange={(e) => handleManualDataChange(feature, e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 text-gray-200 text-[10px] md:text-xs p-1 rounded-md focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="0.0"
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
        
        <button 
          onClick={handleSubmitManualData}
          className="w-full orbitron py-2.5 md:py-3 mt-4 md:mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transform transition duration-200 hover:scale-[1.01] tracking-wider md:tracking-widest text-sm md:text-lg border border-purple-600/50"
        >
          <span className="hidden sm:inline">CLASSIFY ENTERED DATA</span>
          <span className="sm:hidden">ANALYZE</span>
        </button>
      </div>
    </div>
  );
};

export default ClassificationEngine;
