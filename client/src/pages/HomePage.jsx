import FaqSection from '../components/faq/FaqSection'
import CounterUpCard from '../components/counterUpCard/CounterUpCard'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/ImageGalleryData'
import HeroSection from '../components/hero-section/hero-section'
import Benefits from '../components/CardPages/Benifits'
import Testimonials from '../components/CARD2/Container'
function HomePage() {
  return (
    <div className='dark:bg-darkmode p-2 flex flex-col gap-10'>
      <HeroSection />
      <CounterUpCard />
      <Benefits/>
      <Carousel images={Data} />
      <Testimonials/>
      <FaqSection />
    </div>
  )
}

export default HomePage
