import React from 'react'
import HeroSlider from './HeroSlider/HeroSlider'
import CardsSection from './Cards/CardsSection'
import VideoList from './Video/VideoList/VideoList'
import CardList from './OurServices/CardList/CardList'
import FundCategoryList from './Graphs/FundCategoryList/FundCategoryList'
import AppointmentSection from './AppointmentSection/AppointmentSection'
import DisclaimerBox from './DisclaimerBox/DisclaimerBox'
import { Box } from '@mui/material'
import Testimonials from './Testimonials/Testimonials'
import ScrollReveal from '../Common/ScrollReveal/ScrollReveal'

const MainHome = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"}>
        <HeroSlider />

        <ScrollReveal>
          <CardsSection />
        </ScrollReveal>


        <VideoList />

        <ScrollReveal>
          <CardList />
        </ScrollReveal>

        <ScrollReveal>
          <FundCategoryList />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <Box sx={{ overflowX: "hidden" }}>
            <AppointmentSection />
          </Box>
        </ScrollReveal>

        <ScrollReveal>
          <DisclaimerBox />
        </ScrollReveal>
      </Box>
    </div>
  )
}

export default MainHome