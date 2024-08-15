import PropTypes from 'prop-types'

function AcademicContent({ content }) {
  return (
    <div className="flex flex-col   w-full md:w-10/12 lg:p-20 p-10">
      <p className="font-sans md:lg:text-2xl text-center text-zinc-800 md:mt-0">
        {content}
      </p>
    </div>
  )
}

AcademicContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default AcademicContent
