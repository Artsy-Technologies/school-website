import kid from '../../assets/kid.png';

const HeroSection = () => {
  return (
    <div class="container mx-auto p-6 h-92 mb-15">
        <div class="bg-purple-100 p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between h-auto">
            <div class="lg:w-1/2 text-center lg:text-left">
                <h1 class="text-purple-700 text-3xl font-semibold">Welcome to <span class="text-orange-500">Sri Murugha Rajendraswamy CBSE School</span></h1>
                <p class="text-purple-600 text-2xl font-medium mt-2">Where Young Minds Blossom and Dreams Take Flight.</p>
                <p class="text-purple-700 text-xl mt-4">Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <button class="mt-6 bg-orange-500 text-white px-6 py-3  font-semibold hover:bg-orange-600 transition duration-300">
                    Admission is Open, Grab your seat now
                </button>
            </div>
            <div class="lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center lg:items-end">
                <div class="relative">
                    <img src={kid} alt="Students" class="rounded-full w-48 h-48 object-cover lg:w-52 lg:h-52"/>
                    <div class="absolute top-20 right-36 bg-purple-700 text-white text-center rounded-full w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                        <span>Shaping future for over 2500+ students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // </div>
  )
}

export default HeroSection;