import Banner from '../components/banner/Banner'
import { useData } from '../context/BannerContext'
import RoomGalleryCard from "../components/roomGallery/RoomGalleryCard"
import WhatStudentLearnCard from '../components/whatStudentLearn/WhatStudentLearnCard'

import Features from '../components/CardPages/Features'

function AcademicsPage() {
    const { academicsPage } = useData()

  return (
    <div className='dark:bg-darkmode flex flex-col items-center justify-center'>
      <Banner
        main={academicsPage.title}
        content={academicsPage.content}
        buttonText={academicsPage.buttonText}
    />
    <div className='w-[100%] flex flex-col justify-center items-center gap-20'>
      <Features/>
      {/* What Students Learn */}
      < WhatStudentLearnCard/>
      <RoomGalleryCard/>
    </div>
    </div>
  )
}

export default AcademicsPage
