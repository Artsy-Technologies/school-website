import FaqSection from '../components/faq/FaqSection'
import CounterUpCard from '../components/counterUpCard/CounterUpCard'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/Data'

function HomePage() {
  return (
    <div>
      <Carousel images={Data} />
      <CounterUpCard />
      <FaqSection />
    </div>
  )
}

export default HomePage
