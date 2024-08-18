import FaqSection from '../components/faq/FaqSection'
import CounterUpCard from '../components/counterUpCard/CounterUpCard'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/Data'
import HeroSection from '../components/hero-section/hero-section'
import DarkModeToggle from '../components/darkmode/DarkModeToggle'
function HomePage() {
  return (
    <div>
      <DarkModeToggle/>
      <HeroSection />
      <Carousel images={Data} />
      <CounterUpCard />
      <FaqSection />
    </div>
  )
}

export default HomePage
