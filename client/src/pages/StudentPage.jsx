import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
import EventAndCelebrations from '../components/CardPages/EventsAndCelebration'
import ExtracurricularActivities from '../components/CardPages/extracurricularActivities'
import Socials from '../components/socials/socials'
function StudentPage() {
    const { studentLifePage } = useData()

  return (
    <div className='dark:bg-darkmode'>
      <Banner
        main={studentLifePage.title}
        content={studentLifePage.content}
        buttonText={studentLifePage.buttonText}
      />
      <ExtracurricularActivities/>
      {/* Events & Celebrations */}
      <EventAndCelebrations/>
      <Socials />

    </div>
  )
}

export default StudentPage
