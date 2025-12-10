import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './VideoList/VideoList'
import CardList from './CardList/CardList'

const MainHome = () => {
  return (
    <div>
      <HeroSlider/>
      <CardsSection/>
      <VideoList/>
      <CardList/>
    </div>
  )
}

export default MainHome