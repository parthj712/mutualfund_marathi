import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './Video/VideoList/VideoList'
import CardList from './OurServices/CardList/CardList'
import FundCategoryList from './Graphs/FundCategoryList/FundCategoryList'

const MainHome = () => {
  return (
    <div>
      <HeroSlider/>
      <CardsSection/>
      <VideoList/>
      <CardList/>
      <FundCategoryList/>
    </div>
  )
}

export default MainHome