import React from 'react'
import PropTypes from 'prop-types'

function AcademicHeader({ main, buttonText }) {
  return (
    <header className="relative flex flex-col w-full md:w-6/12 mb-5 md:mb-0">
      <div className="flex flex-col w-full md:w-4/5 md:pl-[15%] pt-28 md:pt-10">
        <div className="flex flex-col px-10 ">
          <h1 className="text-4xl md:text-5xl lg:text-4xl lg:mt-10 font-bold text-darkpurple">
            {main}
          </h1>
          <button className=" self-center md:self-start px-4 py-2 text-base font-medium leading-6 text-center whitespace-nowrap  rounded-md border-2 border-solid border-neutral-800 text-white mt-10 bg-darkpurple lg:ml-24">
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
