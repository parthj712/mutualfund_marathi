import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './Video/VideoList/VideoList'
import CardList from './OurServices/CardList/CardList'
import FundCategoryList from './Graphs/FundCategoryList/FundCategoryList'
import AppointmentSection from './AppointmentSection/AppointmentSection'
import DisclaimerBox from './DisclaimerBox/DisclaimerBox'

const MainHome = () => {
  return (
    <div>
      <HeroSlider/>
      <CardsSection/>
      <VideoList/>
      <CardList/>
      <FundCategoryList/>
      <AppointmentSection/>
      <DisclaimerBox/>
    </div>
  )
}

export default MainHome