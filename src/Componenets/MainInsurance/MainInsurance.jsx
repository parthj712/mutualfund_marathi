"use client";


import React from 'react'
import HeaderMutualFund from '../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import GradientHeading from '../Common/GradientHeading/GradientHeading'
import InsuranceCards from './InsuranceCards/InsuranceCards';

const MainInsurance = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            <HeaderMutualFund
                image="/services/mutual-fund.png"
                heading="विमा"
                description="विमा सुरक्षा कवच प्राधान्यानेच घेतले पाहिजे."
                imagePosition="left"
                radius={100}
            />


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="विमा" />
                <Typography fontSize={isMobile ? "16px" : "18px"}>
                    कोणत्याही प्रकारचा विमा घेणे म्हणजे तुम्ही ज्यांचावर प्रेम करता त्यांचे भविष्य सुरक्षित करणे. विमा घेणे म्हणजे भविष्यात होणारे कोणत्याही प्रकारचे आर्थिक नुकसान भरून काढणे हाच तुमचा उद्देश असला पाहिजे. अन्य सारे उद्देश गौण आहेत. अशाप्रकारे भविष्य सुरक्षित करण्यासाठी आपण जी रक्कम भरतो त्यालाच प्रीमियम असे म्हटले जाते. एक गोष्ट मात्र कायम लक्षात ठेवली पाहिजे कि विमा व गुंतवणूक याची गल्लत करू नका. योग्य तोच विम्याचा प्रकार निवडा आणि य यासाठी तुम्हाला आवश्यक असेल तर आम्ही मदत करु शकतो. त्यासाठी आम्हाला संपर्क करा आम्ही योग्य तोच सल्ला देतो.
                </Typography>
            </Box>


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="आमच्याकडे खालील उत्पादने उपलब्ध आहेत" />
                <InsuranceCards/>
            </Box>
        </div>
    )
}

export default MainInsurance