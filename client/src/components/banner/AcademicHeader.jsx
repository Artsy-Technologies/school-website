import PropTypes from 'prop-types'

function AcademicHeader({ main, buttonText }) {
  return (
    <header className="relative   justify-center items-center text-center  flex flex-col w-full md:w-6/12 mb-5 md:mb-0">
      <div className="flex  flex-col w-full md:w-4/5 md:pl-[15%] pt-28 md:pt-10">
        <h1 className="text-3xl  md:text-3xl text-center  lg:text-3xl  font-bold text-darkpurple">
          {main}
        </h1>
        <div className="">
          <button className="self-center   md:self-start px-4 py-2 text-base font-medium leading-6 text-center whitespace-nowrap rounded-md border-2 border-solid border-neutral-800 text-white mt-10 bg-darkpurple ">
            {buttonText}
          </button>
        </div>
      </div>
    </header>
  )
}

AcademicHeader.propTypes = {
  main: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default AcademicHeader
