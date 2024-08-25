/* eslint-disable react/prop-types */
const Card = ({ images, heading, paragraph }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 pt-2 rounded-lg shadow-lg w-[90%] mx-auto">  {/* Set width to 90% */}
      <div className="flex p-4 space-x-4 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-purple-700 dark:text-purple-300 text-xl font-semibold mt-2">{heading}</h2>
        <p className="text-gray-600 dark:text-gray-200 mt-1">{paragraph}</p>
      </div>
      <div className="flex justify-end mt-4 gap-6">
        <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-lg">
          ←
        </button>
        <button className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-lg">
          →
        </button>
      </div>
    </div>
  );
};

export default Card;
