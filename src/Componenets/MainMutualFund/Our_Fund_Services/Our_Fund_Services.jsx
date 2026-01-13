"use client";

import React from 'react'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import HeaderMutualFund from '../HeaderMutualFund.jsx/HeaderMutualFund';

const Our_Fund_Services = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <HeaderMutualFund
                image="/Header/MutualFund.jpg"
                heading="म्युच्युअल फंड"
                description="सेवा व सुविधा"
                imagePosition="left"
                radius={100}
            />


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="सेवा व सुविधा" />
                <Typography lineHeight={2} letterSpacing={1} fontSize={isMobile ? "16px" : "18px"}>
                    • गुंतवणुकीचा योग्य तोच सल्ला दिला जातो. <br/>
                    • शेअरबाजार, म्युच्युअल फंड याबात Whatsapp आणि ईमेलने नियमितपणे अपडेट देत रहातो.<br/>
                    • गुंतवणूक केल्यानंतर जर तुम्हाला कोणतीही सेवा आमच्या कडून हवी असेल, खाते उतारा (Account Statement) हवा असेल किंवा तुमच्या खात्यात काही फरक असेल किंवा अन्य कोणतीही शंका असेल तर आमच्या कस्टमर केअर नंबर 9834079813 येथे संपर्क साधून सेवा मिळेल/तुमच्या शंकेचे निरसन केले जाईल.<br/>
                    • मोबाईल अॅप - यात तुम्ही पाहू शकता तुमच्या गुंतवणुकीचे मूल्य केव्हाही आणि कोठूनही २४/७. मोबाईल अँप मधून आपण सारे आर्थिक व्यवहार ऑनलान करू शकता.<br/>
                    • आमच्या वेबसाईटवर लॉगीन (https://www.thakurfinserv.com) करूनही आपला पोर्टफोलिओ पाहू शकता. येथे आपण सारे आर्थिक व्यवहार ऑनलान करू शकता. तसेच तुमचे भविष्यातील सारी आर्थिक उद्दिष्टे साध्य करण्यासाठी तुमचे गोल सेट करू शकता आणि आर्थिक नियोजन तुमचे तुम्ही करू शकता. याच प्रमाणे भराव्या लागणाऱ्या शॉर्ट टर्म व लॉंग टर्म कर आकारणी पाहू शकता.<br/>
                    • तुमच्या सर्वच गुंतवणुकीचा तपशिल एकाच ठिकाणी पाहण्याची सुविधा आहे.<br/>
                    • बँक ठेवी, शेअर्स, सोने, अन्य म्युच्युअल फंड योजना तुम्ही येथे पाहण्यासाठी सामील करू शकता.<br/>
                    • ऑनलाइन व्यवहार करण्याची सुविधा मोबाईल अॅप मधून, कॉम्प्यूटर मधून.<br/>
                    • आम्हाला फोन करूनसुद्धा आपण सारे आर्थिक व्यवहार करू शकता.<br/>
                    • आम्ही MFU आणि NSE बरोबर सलंग्न असून त्यांचे सोबत एकदाच रजिस्ट्रेशन करून नंतर कोणत्याही कागदपत्रांशिवाय ऑनलाइन व्यवहार करू शकता.<br/>
                    • एका वेळी ५ बँक खाती जोडू शकता.<br/>
                    • फक्त एका चेकने म्युच्युअल फंडाच्या कोणत्याही ५ योजनेत खरेदी किंवा एसआयपी करू शकता.<br/>
                    • एकदा रजिस्ट्रेशन केल्यावर सही नको, चेक नको, फॉर्म नको. सारे काही पेपरलेस.<br/>
                    • गुंवणूकदराचा फायदा म्हणजेच कायमस्वरूपी विश्वास व व्यावसाईक नातेसंबंध असे आम्ही मानतो.<br/>
                </Typography>
            </Box>


        </div>
    )
}

export default Our_Fund_Services