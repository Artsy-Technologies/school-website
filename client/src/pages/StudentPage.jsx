import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
import EventAndCelebrations from '../components/events-celebrations/EventAndCelebrations'

function StudentPage() {
    const { studentLifePage } = useData()

  return (
    <div className='dark:bg-darkmode'>
      <Banner
        main={studentLifePage.title}
        content={studentLifePage.content}
        buttonText={studentLifePage.buttonText}
      />
      {/* Extracurricular Activities */}
      {/* Events & Celebrations */}
      <EventAndCelebrations/>

    </div>
  )
}

export default StudentPage
