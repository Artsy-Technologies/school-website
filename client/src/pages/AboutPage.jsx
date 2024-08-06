
import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'

function AboutPage() {
    const { aboutPage } = useData()


  return (
    <div>
      <Banner main={aboutPage.title} content={aboutPage.content} buttonText={aboutPage.buttonText} />
    </div>
  )
}

export default AboutPage
