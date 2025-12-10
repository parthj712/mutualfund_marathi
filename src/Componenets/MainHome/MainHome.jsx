import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './VideoList/VideoList'

const MainHome = () => {
  return (
    <div>
      <HeroSlider/>
      <CardsSection/>
      <VideoList/>
    </div>
  )
}

export default MainHome