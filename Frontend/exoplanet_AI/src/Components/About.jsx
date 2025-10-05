import '../index.css'
import { HugeiconsIcon } from '@hugeicons/react';
import { Target01Icon } from '@hugeicons/core-free-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import weri2 from '../assets/weri2.jpg'
import nahine from '../assets/nahine.jpg'
import fried3 from '../assets/fried3.jpg'
import belange from '../assets/belange.jpg'
import powell from '../assets/powell.jpg'

const About = () => {

    return (
    <div>
        <Navbar />
        <div className='board flex flex-col gap-10 md:gap-20 pt-4 px-4 pb-8 orbitron items-center pb-5 pt-20'>
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
                        <img src={weri2} alt="Team Member" className='rounded-full border-4 w-32 h-32 mx-auto' />
                        <h3 className='font-bold text-base md:text-lg'>BONI Weri N'doissi Fernandel</h3>
                        <p className='text-sm italic mb-2'>Superviseur & Front End Designer</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={nahine} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'> GBAGBLI MATTHIEU Nahine</h3>
                        <p className='text-sm italic mb-2'>Backend Developper/API Conception</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={fried3} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>BOCOVO Fried</h3>
                        <p className='text-sm italic mb-2'>Dev FullStack/ Designer UI/UX</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={belange} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>SOGADJI Belange</h3>
                        <p className='text-sm italic mb-2'>Backend Infrastructure</p>
                    </div>
                    <div className='flex flex-col items-center bg-gray-700 p-4 rounded-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)]'>
                        <img src={powell} alt="Team Member" className='rounded-full border-4 object-cover border-gray-400 w-32 h-32' />
                        <h3 className='font-bold text-base md:text-lg'>FAGNON Powell</h3>
                        <p className='text-sm italic mb-2'>AI Developper</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default About