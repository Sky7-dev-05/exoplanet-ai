import '../index.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { Target01Icon } from '@hugeicons/core-free-icons';
import test from '../assets/test.png'

const About = () => {

    return (
        <div className='board flex flex-col gap-10 md:gap-20 pt-4 px-4 pb-8 orbitron items-center'>
            <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-full max-w-6xl'>
                <h1 className='text-xl md:text-2xl text-primary font-bold text-center mr-4 ml-4 md:mr-10 md:ml-10 mb-5'>AI at the service of exoplanet discovery.</h1>
                <p className='text-sm md:text-base'>
                    At ExoDetect AI, we harness the power of artificial intelligence to revolutionize exoplanet research. Our platform analyzes terabytes of transit data from pioneering missions like Kepler and TESS, identifying subtle signals that would escape the human eye. AI allows us to filter out noise, validate potential candidates, and accelerate the pace of discoveries, thus bringing us closer to understanding our place in the universe.
                </p>
            </div>
            <div className='flex flex-col gap-4 background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-full max-w-6xl'>
                <h2 className='font-bold text-base md:text-lg'>Our Scientifics Data Courses</h2>
                <div className='flex flex-row flex-wrap gap-4'>
                   <div className='flex flex-row gap-2 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'>
                     <HugeiconsIcon
                    icon={Target01Icon}
                    size={24}
                    color="#d624b8ff"
                    strokeWidth={1.5}
                    />
                    <p className='text-sm md:text-base text-left'>NASA Kepler Object of Interest KOI</p>
                   </div>
                    <div className='flex flex-row gap-2 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'>
                     <HugeiconsIcon
                    icon={Target01Icon}
                    size={24}
                    color="#d624b8ff"
                    strokeWidth={1.5}
                    />
                    <p className='text-sm md:text-base text-left'>Transiting Exoplanet Survey Satelitte (TESS)</p>
                   </div>
                    <div className='flex flex-row gap-2 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'>
                     <HugeiconsIcon
                    icon={Target01Icon}
                    size={24}
                    color="#d624b8ff"
                    strokeWidth={1.5}
                    />
                    <p className='text-sm md:text-base text-left'>T2 Campaign of the Kepler Space Telescope</p>
                   </div>
                   <div className='flex flex-row gap-2 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'>
                     <HugeiconsIcon
                    icon={Target01Icon}
                    size={24}
                    color="#d624b8ff"
                    strokeWidth={1.5}
                    />
                    <p className='text-sm md:text-base text-left'>ESA CHEOPS Mission Data</p>
                   </div>
                   <div className='flex flex-row gap-2 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]'>
                     <HugeiconsIcon
                    icon={Target01Icon}
                    size={24}
                    color="#d624b8ff"
                    strokeWidth={1.5}
                    />
                    <p className='text-sm md:text-base text-left'>Hubble Space Telescope Archives</p>
                   </div>                   
                </div>

            </div>
            <div className='background-base-200 p-5 rounded-lg shadow-lg text-center bg-gray-800 text-white w-full max-w-6xl'>
                <h1 className='text-xl md:text-2xl text-primary font-bold text-center mr-4 ml-4 md:mr-10 md:ml-10 mb-5'>
                    Meet Our Team
                </h1>
                <div className='flex flex-row flex-wrap gap-6 justify-center'>
                    <div className='flex flex-col bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={test} alt="Team Member" className='rounded-full border-4 w-32 h-32 mx-auto' />
                        <h3 className='font-bold text-base md:text-lg'>Dr. Jane Smith</h3>
                        <p className='text-sm italic mb-2'>Role</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={test} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>Dr. Jane Smith</h3>
                        <p className='text-sm italic mb-2'>Role</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={test} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>Dr. Jane Smith</h3>
                        <p className='text-sm italic mb-2'>Role</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={test} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>Dr. Jane Smith</h3>
                        <p className='text-sm italic mb-2'>Role</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={test} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>Dr. Jane Smith</h3>
                        <p className='text-sm italic mb-2'>Role</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About