import DiffereneceBox from '@/Componenets/Common/DiffereneceBox/DiffereneceBox'
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const RiskVsReturn = () => {

      const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="जोखीम आणि परतावा (Risk vs Return)" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <DiffereneceBox
                        title="काय कव्हर होतं"
                        titleBgColor="#22C55E"
                        bgColor="#ECFDF5"
                        items={[
                            {
                                heading: "अपघात",
                                description:
                                    "अपघातात तुमच्या वाहनाचे नुकसान झाले असल्यास दुरुस्तीसाठी लागणाऱ्या खर्चाची भरपाई विमा कंपनीकडून केली जाते. यामध्ये धडक, उलटणे किंवा इतर वाहनाशी झालेला अपघात समाविष्ट असतो.",
                            },
                            {
                                heading: "चोरी",
                                description:
                                    "जर तुमची गाडी चोरीला गेली किंवा चोरीचा प्रयत्न करताना नुकसान झाले, तर पॉलिसीतील अटींनुसार विमा कंपनी नुकसान भरपाई देते.",
                            },
                            {
                                heading: "आग, पूर, भूकंप (नैसर्गिक आपत्ती)",
                                description:
                                    "आग लागणे, पूर येणे, भूकंप, वादळ यांसारख्या नैसर्गिक आपत्तीमुळे वाहनाचे नुकसान झाल्यास त्याची भरपाई मिळते.",
                            },
                            {
                                heading: "थर्ड पार्टी नुकसान",
                                description:
                                    "अपघातात इतर व्यक्तीला शारीरिक इजा, मृत्यू किंवा इतरांच्या मालमत्तेचे नुकसान झाल्यास त्याची कायदेशीर व आर्थिक भरपाई विमा कंपनी करते. (हे कव्हर कायद्याने बंधनकारक आहे.)",
                            },
                        ]}
                    />

                    <DiffereneceBox
                        title="कव्हर होत नाही"
                        titleBgColor="#EF4444"
                        bgColor="#FEF2F2"

                        items={[
                            {
                                heading: "नियमित झीज",
                                description:
                                    "गाडीच्या नियमित वापरामुळे होणारी झीज, पार्ट्स खराब होणे किंवा जुनाटपणा यासाठी विमा भरपाई मिळत नाही.",
                            },
                            {
                                heading: "दारू पिऊन अपघात",
                                description:
                                    "जर वाहन चालक दारू किंवा अमली पदार्थांच्या प्रभावाखाली वाहन चालवत असेल आणि अपघात झाला तर विमा क्लेम नाकारला जातो.",
                            },
                            {
                                heading: "युद्धजन्य परिस्थिती",
                                description:
                                    "युद्ध, दंगल, दहशतवाद किंवा अशा स्वरूपाच्या घटनांमुळे झालेल्या नुकसानीस विमा कव्हर मिळत नाही.",
                            },
                            {
                                heading: "मेंटेनन्स खर्च",
                                description:
                                    "नियमित सर्व्हिसिंग, ऑइल बदल, टायर बदल किंवा दैनंदिन देखभाल खर्च विम्यात समाविष्ट नसतो.",
                            },
                        ]}
                    />


                </div>
            </Box>
        </div>
    )
}

export default RiskVsReturn