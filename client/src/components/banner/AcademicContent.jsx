import React from 'react'
import PropTypes from 'prop-types'

function AcademicContent({ content }) {
  return (
    <div className="flex flex-col w-full md:w-6/12 lg:p-20 p-10 ">
      <p className="font-sans font-semibold leading-6 text-zinc-800  md:mt-0">
        {content}
      </p>
    </div>
  )
}

AcademicContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default AcademicContent