import '../index.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { Rocket01Icon } from '@hugeicons/core-free-icons';
import { JusticeScale01Icon } from '@hugeicons/core-free-icons';
import { Target02Icon } from '@hugeicons/core-free-icons';


const Dashboard=()=>{
    const accuracy = 98.7;
    const f1_Score = 0.92;
    const recallValue = 0.89;

    return(
        <div className="flex flex-col   gap-20  pt-4 pl-4 pr-4  orbitron board">
            <h1 className="text-4xl font-bold text-center">
                Performance of the <br />
                AI ExoDetect
            </h1>
            <div className='flex flex-row gap-10 justify-center'>
                <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-1/5'>
                    <div className='font-bold flex flex-row justify-center items-center gap-2'> 
                         <HugeiconsIcon
                        icon={Target02Icon}
                        size={24}
                        color="#24bbd6ff"
                        strokeWidth={1.5}
                        />
                        Precision (Accuracy)
                    </div>
                    <p className='text-primary'>{accuracy}</p>
                    <p>Proportion of the correct predisctions on all the data transit.</p>
                </div>
                <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-1/5'>
                    <div className='font-bold flex flex-row justify-center items-center gap-2'>
                         <HugeiconsIcon
                            icon={JusticeScale01Icon}
                            size={24}
                            color="#24bbd6ff" 
                            strokeWidth={1.5}
                            />
                        F1 Score
                    </div>
                    <p className='text-primary'>{f1_Score}</p>
                    <p>Harmonic mean of precision and recall balancing false positives and false negatives.</p>
                </div>
                <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-1/5'>
                    <div className='font-bold flex flex-row justify-center items-center gap-2'>
                         <HugeiconsIcon
                        icon={Rocket01Icon}
                        size={24}
                        color="#24bbd6ff"
                        strokeWidth={1.5}
                        />
                        <p>Recall</p>
                    </div>
                    <p className='text-primary'>{recallValue}</p>
                    <p>The model's ability to identify all actual positive cases (exoplanets).</p>
                </div>
            </div>
            <div className='flex flex-row gap-20 justify-center'>
                <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-1/3 '>
                <h2 className='text-2xl font-bold mb-4'>Confusion Matrix</h2>
                <p>Model performance in terms of classification.</p>
                <div>fantom</div>   
            </div>
            <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-1/3 '>
                <h2 className='text-2xl font-bold mb-4'>Importance of the Characteristics</h2>
                <p>The most influential factors in the detection of exoplanets.</p>
                <div>fantom2</div>   
            </div>
            </div>

        </div>
    )
}
export default Dashboard;