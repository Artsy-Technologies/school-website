import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'

function AcademicsPage() {
    const { academicsPage } = useData()

  return (
    <div className='dark:bg-darkmode'>
      <Banner
        main={academicsPage.title}
        content={academicsPage.content}
        buttonText={academicsPage.buttonText}
      />
    </div>
  )
}

export default AcademicsPage
