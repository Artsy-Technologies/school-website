import React from 'react'
import FaqSection from '../components/faq/FaqSection'
import Carousel from '../components/Carousel/Carousel'
import Data from '../components/Carousel/Data'
function Home() {
  return (
    <div>
      <Carousel images={Data}/>
      <FaqSection/>
    </div>
  )
}

export default Home
