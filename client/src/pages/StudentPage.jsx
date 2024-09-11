import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
import EventAndCelebrations from '../components/CardPages/EventsAndCelebration'
import ExtracurricularActivities from '../components/CardPages/extracurricularActivities'
import Socials from '../components/socials/socials'
function StudentPage() {
    const { studentLifePage } = useData()

  return (
    <div className='dark:bg-darkmode w-full'>
      <Banner
        main={studentLifePage.title}
        content={studentLifePage.content}
        buttonText={studentLifePage.buttonText}
      />
      <div className="max-w-full overflow-hidden">
      <ExtracurricularActivities/>
      
      <EventAndCelebrations/>
      </div>
      
      <Socials />

    </div>
  )
}

export default StudentPage
