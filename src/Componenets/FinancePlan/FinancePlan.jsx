"use client";


import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import HeaderMutualFund from '../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund';
import GradientHeading from '../Common/GradientHeading/GradientHeading';
import { FaRupeeSign } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { GiLoveLetter } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";
import GoalOptionCard from '../Common/GoalOptionCard/GoalOptionCard';

const FinancePlan = () => {

  const theme = useTheme();

  // BREAKPOINTS
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


  return (
    <div>
      <HeaderMutualFund
        image="/services/mutual-fund.png"
        heading="आर्थिक नियोजन"
        description="या विभागातील उदिष्ठांचा वापर तुमच्या गरजेनुसार म्युच्युअल फंड योजनेत गुंतवणूक कण्यासाठी करा"
        imagePosition="left"
        radius={100}
      />

      <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
        <GradientHeading text="तुमच्या ध्येयाची गती तपासा" />

        <div
          className="
          max-w-8xl
          mx-auto
          px-4
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-1
          lg:grid-cols-3
          gap-14
        "
        >
          <GoalOptionCard
            title="स्वप्नातील घर"
            Icon={AiFillHome}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #0F3443, #34E89E)"
            iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
          />
          <GoalOptionCard
            title="संपत्ती निर्मिती"
            Icon={FaRupeeSign}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #EAAFC8, #654EA3)"
            iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
          />
          <GoalOptionCard
            title="निवृत्ती"
            Icon={TbMoneybag}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #373B44, #4286F4)"
            iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
          />



          <GoalOptionCard
            title="मुलांचे शिक्षण"
            Icon={GiWhiteBook}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #373B44, #4286F4)"
            iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
          />
          <GoalOptionCard
            title="मुलाचे लग्न"
            Icon={GiLoveLetter}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #0F3443, #34E89E)"
            iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
          />
          <GoalOptionCard
            title="आणीबाणी"
            Icon={GrEmergency}
            iconSize={isMobile ? 100 : 120}
            backgroundGradient="linear-gradient(135deg, #EAAFC8, #654EA3)"
            iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
          />





        </div>
      </Box>
    </div>
  )
}

export default FinancePlan