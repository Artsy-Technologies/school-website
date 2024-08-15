import AcademicHeader from './AcademicHeader'
import AcademicContent from './AcademicContent'
import image from './image.svg'

function Banner({ main, content, buttonText }) {
  return (
    <section className="relative m-5 bg-white rounded-xl border-2 border-solid shadow-sm border-neutral-800">
      <div className="absolute top-0 left-0 p-2 w-1/3 md:w-1/3 lg:w-[150px]">
        <img
          loading="lazy"
          src={image}
          alt="Academic illustration"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row max-md:flex-col p-5 mb-2">
        <AcademicHeader main={main} buttonText={buttonText} />
        <AcademicContent content={content} />
      </div>
    </section>
  )
}

export default Banner
