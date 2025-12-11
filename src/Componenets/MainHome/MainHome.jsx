import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './Video/VideoList/VideoList'
import CardList from './OurServices/CardList/CardList'
import FundCategoryList from './Graphs/FundCategoryList/FundCategoryList'
import AppointmentSection from './AppointmentSection/AppointmentSection'
import DisclaimerBox from './DisclaimerBox/DisclaimerBox'
import { Box } from '@mui/material'

const MainHome = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={6}>
        <HeroSlider />
        <CardsSection />
        <VideoList />
        <CardList />
        <FundCategoryList />
        <AppointmentSection />
        <DisclaimerBox />
      </Box>
    </div>
  )
}

export default MainHome