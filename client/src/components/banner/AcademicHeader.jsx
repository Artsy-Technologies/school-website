import PropTypes from 'prop-types'

function AcademicHeader({ main, buttonText }) {
  return (
    <header className="flex flex-col items-center text-center w-full p-4 md:p-6 lg:p-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkpurple dark:text-purple-300 mb-4">
        {main}
      </h1>
      <button className="px-4 py-2 text-base md:text-lg font-medium text-white bg-darkpurple border-2 border-darkpurple rounded-md hover:bg-darkpurple-light focus:outline-none focus:ring-2 focus:ring-darkpurple">
        {buttonText}
      </button>
    </header>
  )
}

AcademicHeader.propTypes = {
  main: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default AcademicHeader
