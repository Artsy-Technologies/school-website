
import Banner from '../components/banner/Banner'
import { History } from '../components/history/history'
import { useData } from '../context/BannerContext'

function AboutPage() {
    const { aboutPage } = useData()


  return (
    <div>
      <Banner main={aboutPage.title} content={aboutPage.content} buttonText={aboutPage.buttonText} />
    <History/> 
    </div> 
   
  )
}


export default AboutPage
