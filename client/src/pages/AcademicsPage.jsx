import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
// import RoomGalleryCard from "../components/roomGallery/RoomGalleryCard"

function AcademicsPage() {
    const { academicsPage } = useData()

  return (
    <div className='dark:bg-darkmode flex flex-col items-center justify-center'>
      <Banner
        main={academicsPage.title}
        content={academicsPage.content}
        buttonText={academicsPage.buttonText}
    />
    <div className='w-[90%] flex flex-col justify-center items-center'>
      {/* <RoomGalleryCard/> */}
    </div>
    </div>
  )
}

export default AcademicsPage
