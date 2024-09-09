import PropTypes from 'prop-types'

function AcademicContent({ content }) {
  return (
    <div className="w-full p-4 md:p-6 lg:p-10">
      <p className="font-sans text-base md:text-lg lg:text-xl text-start dark:text-white text-zinc-800">
        {content}
      </p>
    </div>
  )
}

AcademicContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default AcademicContent
