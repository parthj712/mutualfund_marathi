import GradientUnderlineHeading from '@/Componenets/Common/GradientUnderlineHeading/GradientUnderlineHeading'
import NumberInfoBox from '@/Componenets/Common/NumberInfoBox/NumberInfoBox';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Vision_N_Mission = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        //  className="w-full bg-[#00487b] text-white"
        <div>
            <Box display={"flex"} p={isMobile ? 4 : 10} flexDirection={"column"} gap={isMobile ? 4 : 6} className="w-full bg-[#00487b] text-white">
                <GradientUnderlineHeading text="आमचे ध्येय आणि दृष्टी"/>




                <NumberInfoBox
                    text="आमचे ध्येय"
                    subText="आमच्या क्लायंटसाठी एक विश्वासार्ह भागीदार बनणे, वाढ आणि यश मिळवून देणारे नाविन्यपूर्ण उपाय आणि अपवादात्मक सेवा प्रदान करणे."
                    bgColor="#FEFCE8"
                    textColor="#0F557C"
                    subTextColor="black"
                />

                <NumberInfoBox
                    text="आमची दृष्टी"
                    subText="आमच्या उद्योगातील एक आघाडीची कंपनी बनणे, उत्कृष्टता, ग्राहक समाधान आणि शाश्वत विकासासाठी आमच्या वचनबद्धतेसाठी ओळखले जाणे."
                    bgColor="#FEFCE8"
                    textColor="#0F557C"
                    subTextColor="black"
                />

                <Typography fontSize={isMobile ? "18px" : "22px"} fontWeight={500}>
                    श्री ठाकूर फिनसर्व्ह प्रायव्हेट लिमिटेडमध्ये, आम्ही तुमची आर्थिक उद्दिष्टे साध्य करण्यास मदत करण्यासाठी समर्पित आहोत. चला एक उज्ज्वल आर्थिक भविष्य घडविण्यासाठी एकत्र काम करूया!
                </Typography>
            </Box>
        </div>
    )
}

export default Vision_N_Mission