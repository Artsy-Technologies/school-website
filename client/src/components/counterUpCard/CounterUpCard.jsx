import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CounterUpCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger only once when it comes into view
    threshold: 0.1, // trigger when 10% of the card is visible
  })

  return (
    <div
      ref={ref}
      className="relative py-6 px-4 md:px-8 rounded-lg shadow-lg flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-10 border border-black"
    >
      <div className="absolute inset-0 border-4 border-transparent border-b-purple-700 border-r-purple-700 rounded-lg pointer-events-none"></div>
      <div className="w-full md:w-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          +{inView ? <CountUp end={7000} duration={2} /> : null}
        </h2>
        <p className="text-lg text-white">Students Passed Out</p>
      </div>
      <div className="w-full md:w-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          +{inView ? <CountUp end={37} duration={2} /> : null}
        </h2>
        <p className="text-lg text-white">Awards & Recognitions</p>
      </div>
      <div className="w-full md:w-auto text-center">
        <h2 className="text-3xl font-bold text-purple-700">
          +{inView ? <CountUp end={15} duration={2} /> : null}
        </h2>
        <p className="text-lg text-white">Experience Educators</p>
      </div>
    </div>
  )
}

export default CounterUpCard
