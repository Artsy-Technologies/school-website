import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
import RoomGalleryCard from "../components/roomGallery/RoomGalleryCard"
import Features from '../components/CardPages/Features'
import WhatStudentsLearn from '../components/CardPages/WhatStudentLearn'

function AcademicsPage() {
    const { academicsPage } = useData()

  return (
    <div className='dark:bg-darkmode min-h-screen w-full flex flex-col items-center justify-center'>
      <Banner
        main={academicsPage.title}
        content={academicsPage.content}
        buttonText={academicsPage.buttonText}
    />
    <div className='w-[100%] overflow-hidden flex flex-col justify-center items-center gap-2'>
      <Features/>
      <WhatStudentsLearn/>
      <RoomGalleryCard/>
    </div>
    </div>
  )
}

export default AcademicsPage
