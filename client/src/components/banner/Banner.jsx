import AcademicHeader from './AcademicHeader'
import AcademicContent from './AcademicContent'
import image from './image.svg'

// eslint-disable-next-line react/prop-types
function Banner({ main, content, buttonText }) {
  return (
    <section className="relative mt-16 m-10  dark:bg-darkModeCard dark:border-white bg-white rounded-xl border-2 border-solid shadow-sm border-neutral-800 p-4 md:p-6 lg:p-10">
      <div className="absolute top-0 left-0 w-1/4 md:w-1/6 lg:w-1/4 p-2">
        <img
          loading="lazy"
          src={image}
          alt="Academic illustration"
          className="w-full h-auto lg:h-[200px] lg:w-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 mt-16 md:mt-20 lg:mt-20">
        <div className="flex-1">
          <AcademicHeader main={main} buttonText={buttonText} />
        </div>
        <div className="flex-1">
          <AcademicContent content={content} />
        </div>
      </div>
    </section>
  )
}

export default Banner
