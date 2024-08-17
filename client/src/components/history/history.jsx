import sqr from "../../assets/sqr.png";

export const History = () => {
  return (
    <div className="bg-purple-300 flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center justify-center p-4 mb-6">
        <button className="px-4 py-2 font-medium leading-6 whitespace-nowrap rounded-md border-2 border-solid border-neutral-800 text-white mt-10 bg-purple-700">
          Our Progressive Journey
        </button>
        <h2 className="text-3xl text-orange-500 font-bold mt-6">Our History</h2>
        <p className="text-xl text-white mt-4 max-w-3xl w-11/12 text-center">
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment.
        </p>
      </div>

      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-start mb-10">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" className="h-12 w-12 mr-2" />
              <div className="text-center text-purple-600 font-bold text-2xl">
                2023
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-700">
              Resilience and Future Horizons
            </h3>
            <p className="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mb-10 space-x-4">
          <div className="flex items-center mb-4 md:mb-0 md:ml-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" className="h-12 w-12 mr-2" />
              <div className="text-center text-purple-600 font-bold text-2xl">
                2017
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-700">
              Innovation and Technology
            </h3>
            <p className="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mb-10">
          <div className="flex items-center mb-4 md:mb-0 md:mr-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" className="h-12 w-12 mr-2" />
              <div className="text-center text-purple-600 font-bold text-2xl">
                2012
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-700">
              Expansion and Recognition
            </h3>
            <p className="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start mb-10 space-x-4">
          <div className="flex items-center mb-4 md:mb-0 md:ml-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
              <img src={sqr} alt="Purple Blocks" className="h-12 w-12 mr-2" />
              <div className="text-center text-purple-600 font-bold text-2xl">
                2005
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-700">
              Inception and Growth
            </h3>
            <p className="text-gray-600">
              Adapting to new challenges, we remained committed to our mission
              of providing an exceptional early education...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
