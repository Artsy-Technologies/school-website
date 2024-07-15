import { useEffect } from 'react'
import { useState } from 'react'

function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  let timeOut = null

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight()
      }, 2500)
    return () => clearTimeout(timeOut)
  }, [current, autoPlay])

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className="flex  h-96 w-full max-w-screen-md mx-auto">
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute flex flex-col items-center justify-center w-full h-full overflow-hidden rounded-lg  shadow-lg transition-opacity duration-500 ease-in-out ${
              index === current
                ? 'opacity-100 pointer-events-auto'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              className="object-cover w-full h-full"
              src={image.image}
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
      </div>
    </div>
  )
}

export default Carousel
