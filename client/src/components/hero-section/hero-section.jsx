import kid from '../../assets/kid.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8 h-92 mb-15 ">
        <div className="p-6 rounded-lg shadow-lg flex flex-col gap-4 lg:flex-row items-center justify-between h-auto">
            <div className="lg:w-4/5 text-center lg:text-left">
                <h1 className="text-white text-xl font-semibold">Welcome to <span className="text-orange-500 text-3xl"> J K MEMORIAL CENTRAL(CBSE) SCHOOL</span></h1>
                <hr className="my-4 border-white" />
                <p className="text-white text-2xl font-medium mt-2">Where Young Minds Blossom and <span className="dark:text-white text-purple-700 text-3xl">Dreams Take Flight.</span></p>
                <p className="dark:text-white text-purple-700 text-xl mt-4">Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-3 border border- 2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
                onClick={() => navigate("/contact")}>
                    Admission is Open, Grab your seat now
                </button>
            </div>
            <div className="lg:w-2/5 mt-6 ml-12 lg:mt-0 flex flex-col items-center">
                <div className="relative">
                    <img src={kid} alt="Students" className="rounded-full w-48 h-48 object-cover lg:w-52 lg:h-52"/>
                    <div className="absolute top-20 right-36 bg-purple-700 text-white text-center rounded-full w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                        <span>Shaping future for over 2500+ students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;