"use client";

import React from 'react'
import HeaderMutualFund from '../../HeaderMutualFund.jsx/HeaderMutualFund'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';

const Future_N_Options = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            {/* <HeaderMutualFund
                image="/services/mutual-fund.png"
                heading="म्युच्युअल फंडाचे प्रकार"
                description="फ्युचर्स & ऑप्शन"
                imagePosition="left"
                radius={100}
            /> */}


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="फ्युचर्स" />
                <Typography fontSize={isMobile ? "16px" : "18px"}>
                    वायदे बाजारातील फ्युच्युअर्स या विषयाची माहिती देणारे लेख मी प्रकाशित करणार आहे, सध्या यावर काम चालू आहे. रोखीचा बाजार हा विभाग पूर्ण झाला कि या विषयी लेख प्रकाशित केले जातील.
                    मला आशा आहे कि हे लेख वाचून तुम्हाला फ्युच्युअर्स मध्ये कसे व्यवहार केले जातात हे समजून येईल. येथे मी अनेक प्रकारचे रेशो कसे वापरावेत याची माहिती देणार आहे.
                </Typography>
            </Box>


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="ऑप्शन" />
                <Typography fontSize={isMobile ? "16px" : "18px"}>
                    वायदे बाजारातील ऑप्शन या विषयाची माहिती देणारे लेख मी प्रकाशित करणार आहे, सध्या यावर काम चालू आहे. रोखीचा बाजार हा विभाग पूर्ण झाला कि या विषयी लेख प्रकाशित केले जातील.
                    हे लेख वाचून तुम्हाला ऑप्शन मध्ये कसे व्यवहार केले जातात हे समजून घेता येईल. तसेच विविध रेशो इ. ची माहिती दिली जाईल.
                </Typography>
            </Box>


        </div>
    )
}

export default Future_N_Options