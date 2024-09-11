import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { Pagination } from 'antd';
import 'antd/dist/reset.css'; // Ensure Ant Design styles are included

const Card = ({ images, heading, paragraph }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

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

  return (
    <div className="bg-white dark:bg-gray-700 p-6 pt-2 rounded-lg shadow-lg w-[90%] mx-auto">
      {/* Grid for displaying images: 1 image on small screens, 4 images on larger screens */}
      <div className="relative">
        <div className="hidden md:grid md:grid-cols-4 md:gap-4 p-4">
          {images
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((image, index) => (
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
        <div className="block md:hidden p-4">
          <motion.img
            src={images[(currentPage - 1) * itemsPerPage].src}
            alt={images[(currentPage - 1) * itemsPerPage].alt}
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

      {/* Ant Design Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          total={totalPages * itemsPerPage}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          hideOnSinglePage
        />
      </div>
    </div>
  );
};

export default Card;
