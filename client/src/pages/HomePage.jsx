import FaqSection from '../components/faq/FaqSection'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/Data'
function HomePage() {
  return (
    <div>
      <Carousel images={Data}/>
      <FaqSection/>
    </div>
  )
}

export default HomePage
