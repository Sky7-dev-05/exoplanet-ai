import { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Rocket01Icon } from '@hugeicons/core-free-icons';
import { JusticeScale01Icon } from '@hugeicons/core-free-icons';
import { Target02Icon } from '@hugeicons/core-free-icons';
import Navbar from './Navbar';
import Footer from './Footer';

const Dashboard = () => {
    const [stats, setStats] = useState({
        total_predictions: 0,
        confirmed: 0,
        false_positive: 0,
        candidate: 0,
        confirmed_percentage: 0
    });

    const [metrics, setMetrics] = useState({
        recall: 0,  
        f1_score: 0,  
        accuracy: 0
    });

    const [loading, setLoading] = useState(true);

    const API_BASE = 'https://exoplanet-ai-v0zp.onrender.com';

    const fetchStats = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/stats/`);
            if (!response.ok) throw new Error('Error loading stats');
            const data = await response.json();
            console.log('Stats received:', data);
            return data;
        } catch (error) {
            console.error('Error fetchStats:', error);
            throw error;
        }
    };

    const fetchMetrics = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/metrics/`);
            if (!response.ok) throw new Error('Error loading metrics');
            const data = await response.json();
            console.log('Metrics received:', data);
            return data;
        } catch (error) {
            console.error('Error fetchMetrics:', error);
            throw error;
        }
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const [statsData, metricsData] = await Promise.all([
                    fetchStats(),
                    fetchMetrics()
                ]);
                
                setStats(statsData);
                setMetrics(metricsData);
                setLoading(false);
            } catch (error) {
                console.error('Error loading data:', error);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <div>
         <Navbar/>
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 pt-4 px-4 sm:px-6 lg:px-8 orbitron board pb-8 pt-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                Performance of the <br />
                AI ExoDetect
            </h1>
            
            {loading ? (
                <div className="text-center text-white text-lg sm:text-xl">Loading data...</div>
            ) : (
                <>
                    {/* Metrics Cards - Responsive Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto w-full'>
                        <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white
                                      transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                            <div className='font-bold flex flex-row justify-center items-center gap-2'> 
                                <HugeiconsIcon
                                    icon={Target02Icon}
                                    size={24}
                                    color="#24bbd6ff"
                                    strokeWidth={1.5}
                                />
                                <p>Accuracy</p>
                            </div>
                            <p className='text-primary text-2xl sm:text-3xl font-bold mt-2'>
                                {(metrics.accuracy * 100).toFixed(2)}%
                            </p>
                            <p className='text-xs sm:text-sm mt-2 text-gray-300'>Proportion of the correct predictions on all the data transit.</p>
                        </div>
                        
                        <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white
                                      transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                            <div className='font-bold flex flex-row justify-center items-center gap-2'>
                                <HugeiconsIcon
                                    icon={JusticeScale01Icon}
                                    size={24}
                                    color="#24bbd6ff" 
                                    strokeWidth={1.5}
                                />
                                <p>F1 Score</p>
                            </div>
                            <p className='text-primary text-2xl sm:text-3xl font-bold mt-2'>
                                {metrics.f1_score.toFixed(2)}
                            </p>
                            <p className='text-xs sm:text-sm mt-2 text-gray-300'>Harmonic mean of precision and recall balancing false positives and false negatives.</p>
                        </div>
                        
                        <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white
                                      sm:col-span-2 lg:col-span-1 transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                            <div className='font-bold flex flex-row justify-center items-center gap-2'>
                                <HugeiconsIcon
                                    icon={Rocket01Icon}
                                    size={24}
                                    color="#24bbd6ff"
                                    strokeWidth={1.5}
                                />
                                <p>Recall</p>
                            </div>
                            <p className='text-primary text-2xl sm:text-3xl font-bold mt-2'>
                                {metrics.recall.toFixed(2)}
                            </p>
                            <p className='text-xs sm:text-sm mt-2 text-gray-300'>The model's ability to identify all actual positive cases (exoplanets).</p>
                        </div>
                    </div>
                    
                    {/* Statistics Section - Responsive */}
                    <div className='flex flex-row justify-center w-full px-2 sm:px-4'>
                        <div className='background-base-200 p-5 sm:p-6 rounded-lg shadow-lg bg-gray-800 text-white 
                                      w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-2xl
                                      transition-all duration-300 hover:shadow-xl'> 
                            <h2 className='text-xl sm:text-2xl font-bold mb-4 text-center'>Statistics</h2>
                            <ul className='list-none space-y-3'>
                                <li className='flex justify-between items-center py-2 border-b border-gray-700
                                             transition-all duration-200 hover:bg-gray-700/30 hover:px-2 rounded'>
                                    <span className='text-sm sm:text-base text-gray-300'>Total predictions:</span>
                                    <span className='text-primary font-bold text-base sm:text-lg'>{stats.total_predictions}</span>
                                </li>
                                <li className='flex justify-between items-center py-2 border-b border-gray-700
                                             transition-all duration-200 hover:bg-gray-700/30 hover:px-2 rounded'>
                                    <span className='text-sm sm:text-base text-gray-300'>Confirmed:</span>
                                    <span className='text-primary font-bold text-base sm:text-lg'>{stats.confirmed}</span>
                                </li>
                                <li className='flex justify-between items-center py-2 border-b border-gray-700
                                             transition-all duration-200 hover:bg-gray-700/30 hover:px-2 rounded'>
                                    <span className='text-sm sm:text-base text-gray-300'>False Positive:</span>
                                    <span className='text-primary font-bold text-base sm:text-lg'>{stats.false_positive}</span>
                                </li>
                                <li className='flex justify-between items-center py-2 border-b border-gray-700
                                             transition-all duration-200 hover:bg-gray-700/30 hover:px-2 rounded'>
                                    <span className='text-sm sm:text-base text-gray-300'>Candidate:</span>
                                    <span className='text-primary font-bold text-base sm:text-lg'>{stats.candidate}</span>
                                </li>
                                <li className='flex justify-between items-center py-2
                                             transition-all duration-200 hover:bg-gray-700/30 hover:px-2 rounded'>
                                    <span className='text-sm sm:text-base text-gray-300'>Confirmed Percentage:</span>
                                    <span className='text-primary font-bold text-base sm:text-lg'>{stats.confirmed_percentage}%</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
    )
}

export default Dashboard;