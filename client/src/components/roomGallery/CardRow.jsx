import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion, useAnimation } from 'framer-motion';

const Card = ({ images, heading, paragraph }) => {
  // State to keep track of the start index for image pagination
  const [startIndex, setStartIndex] = useState(0);

  // Constants for pagination
  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  // Use media query to check if the screen size is mobile
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Framer Motion controls
  const controls = useAnimation();

  // Handle next page
  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % images.length);
  };

  // Handle previous page
  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0
        ? (totalPages - 1) * itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  // Auto-next animation for mobile devices
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, startIndex]);

  return (
    <div className="bg-white dark:bg-gray-700 p-6 pt-2 rounded-lg shadow-lg w-[90%] mx-auto">
      {/* Grid for displaying images: 1 image on small screens, 4 images on larger screens */}
      <div className="relative">
        <div className="hidden md:grid md:grid-cols-4 md:gap-4 p-4">
          {images.slice(startIndex, startIndex + itemsPerPage).map((image, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        {/* Only show the current image on smaller screens */}
        <div className="block md:hidden p-4">
          <motion.img
            src={images[startIndex].src}
            alt={images[startIndex].alt}
            className="w-full h-auto rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-purple-700 dark:text-purple-300 text-xl font-semibold mt-2">
          {heading}
        </h2>
        <p className="text-gray-600 dark:text-gray-200 mt-1">{paragraph}</p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-lg"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-lg"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Card;
