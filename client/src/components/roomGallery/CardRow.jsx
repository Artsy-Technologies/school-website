import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are included

const Card = ({ images, heading, paragraph }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Set items per page based on device size
  const itemsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Auto-next animation for mobile devices
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentPage((prevPage) =>
          prevPage === totalPages ? 1 : prevPage + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile, totalPages]);

  // Pagination rendering
  const renderPagination = () => {
    let buttons = [];
    const maxButtons = isMobile ? 4 : 6;

    const start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const end = Math.min(totalPages, start + maxButtons - 1);

    if (start > 1) {
      buttons.push(1);
      if (start > 2) buttons.push('...');
    }
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }
    if (end < totalPages) {
      if (end < totalPages - 1) buttons.push('...');
      buttons.push(totalPages);
    }

    return buttons;
  };

  return (
    <div className="bg-white  dark:bg-gray-700 p-6 pt-2 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Grid for displaying images */}
      <div className="relative">
        <div className={`md:grid md:grid-cols-4 md:gap-4 p-4 ${isMobile ? 'hidden' : ''}`}>
          {images
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((image, index) => (
              <motion.div
                key={index}
                className="w-full p-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
        </div>
        <div className={`block md:hidden p-4 ${!isMobile ? 'hidden' : ''}`}>
          <motion.img
            src={images[(currentPage - 1) * itemsPerPage].src}
            alt={images[(currentPage - 1) * itemsPerPage].alt}
            className="w-full h-auto rounded-lg object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div>
        <h2 className="text-purple-700 text-center font-bold dark:text-purple-300 text-xl mt-2">
          {heading}
        </h2>
        <p className="text-gray-600 dark:text-gray-200 mt-1">{paragraph}</p>
      </div>

      {/* Custom Pagination */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="py-2 px-3 rounded-lg bg-purple-600 text-white dark:bg-gray-500 dark:text-white transition-transform duration-300 transform hover:scale-105"
            aria-label="Previous page"
          >
            {'<'}
          </button>
          {renderPagination().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              className={`py-2 px-3 rounded-lg transition-transform duration-300 ${
                page === currentPage
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 dark:bg-gray-500 dark:text-white'
              } transform hover:scale-105`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="py-2 px-3 rounded-lg bg-purple-600 text-white dark:bg-gray-500 dark:text-white transition-transform duration-300 transform hover:scale-105"
            aria-label="Next page"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
