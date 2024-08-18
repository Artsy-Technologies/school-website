import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'

function StudentPage() {
    const { studentLifePage } = useData()

  return (
    <div className='dark:bg-darkmode'>
      <Banner
        main={studentLifePage.title}
        content={studentLifePage.content}
        buttonText={studentLifePage.buttonText}
      />
    </div>
  )
}

export default StudentPage
