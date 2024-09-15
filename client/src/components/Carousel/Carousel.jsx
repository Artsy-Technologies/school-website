import PropTypes from 'prop-types';
import { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';

function Carousel() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [autoPlay] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timeOut = useRef(null);

  // Fetch images from API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
      } catch (err) {
        setError('Failed to fetch images');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const slideRight = useCallback(() => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const slideLeft = useCallback(() => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    if (autoPlay && !loading) {
      timeOut.current = setTimeout(() => {
        slideRight();
      }, 2500);
    }
    return () => clearTimeout(timeOut.current);
  }, [current, autoPlay, slideRight, loading]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
    <h2 className="text-center text-3xl font-bold text-white mb-4">
      <span className="text-purple-600 dark:text-purple-200">
      Campus Tour
      </span>
    </h2>
    <p className="text-center text-white max-w-xl mx-auto mb-12">
    Check out our eye appealing green campus with gives joy.
    </p>
    <div className="relative flex h-96 w-full max-w-screen-md mx-auto p-2 z-10">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-lg shadow-lg transition-opacity duration-500 ease-in-out ${
              index === current
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              className="object-cover w-full h-full"
              src={`${axios.defaults.baseURL}/${image.image}`}
              alt={image.title}
            />
            <div className="absolute inset-0 flex items-end p-10 bg-black bg-opacity-50">
              <h2 className="text-white text-2xl">{image.title}</h2>
            </div>
          </div>
        ))}
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
          onClick={slideLeft}
        >
          &lsaquo;
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
          onClick={slideRight}
        >
          &rsaquo;
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-gray-300 cursor-pointer ${
                index === current
                  ? 'bg-blue-500'
                  : 'bg-gray-300 hover:bg-blue-500'
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
        {/* {isAdmin && (
          <div className="absolute top-4 right-4 flex space-x-2">
            <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-700">
              Add
            </button>
            <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
              Update
            </button>
            <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        )} */}
      </div>
    </div>
    </div>
   
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;

