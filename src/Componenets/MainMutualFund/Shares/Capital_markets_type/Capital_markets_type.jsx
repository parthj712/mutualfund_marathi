"use client";

import React from 'react'
import HeaderMutualFund from '../../HeaderMutualFund.jsx/HeaderMutualFund'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';

const Capital_markets_type = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <HeaderMutualFund
                image="/services/mutual-fund.png"
                heading="म्युच्युअल फंडाचे प्रकार"
                description="भांडवली बाजार"
                imagePosition="left"
                radius={100}
            />

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <Typography fontSize={isMobile ? "16px" : "18px"}>
                    शेअर बाजारातून भांडवलाची निर्मिती होते म्हणूनच याला भांडवली बाजार असेही म्हटले जाते. शेअर बाजारात प्रामुख्याने रोखीचा बाजार आणि वायदा बाजार असे दोन विभाग असतात. वायदे बाजारात परत फ्युच्युअर्स आणि ऑप्शन असे दोन विभाग असतात. मी शेअर बाजारासंबधित या सर्व विषयांवर लेखन करत आहे. जसे जसे लेख लिहून पूर्ण होतील तसे ते येथे विभागवार प्रकाशित केले जातील. हे लेख लिहिताना काही चूक झालेली असेल तर ती तुम्ही माझ्या निदर्शनाला आणून दिलीत तर त्याचे स्वागतच असेल.
                </Typography>
            </Box>


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="रोखीचा बाजार" />
                <Typography fontSize={isMobile ? "16px" : "18px"}>
                    या विभागात आपण डिलेव्हरी बेस शेअर्स खरेदी विक्री बाबत समजून घेण्याचा प्रयत्न करू. येथे मी काही लेख या रोखीच्या बाजारासंबधित प्रकाशित केले असून जसा वेळ मिळेल तसे या विभागात बाकीचे लेख प्रकाशित केले जातील ते वाचण्यासाठी या विभागाला नियमीतपणे भेट देत रहा.
                </Typography>
            </Box>


        </div>
    )
}

export default Capital_markets_type