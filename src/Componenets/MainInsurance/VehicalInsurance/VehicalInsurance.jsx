"use client";

import CustomInput from '@/Componenets/Common/CustomInput/CustomInput';
import DiffereneceBox from '@/Componenets/Common/DiffereneceBox/DiffereneceBox';
import DisclaimerBox from '@/Componenets/Common/DisclaimerBox/DisclaimerBox'
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import NumberInfoBox from '@/Componenets/Common/NumberInfoBox/NumberInfoBox';
import HeaderMutualFund from '@/Componenets/MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ContactPageRoundedIcon from "@mui/icons-material/ContactPageRounded";
import { motion } from "framer-motion";
import React, { useState } from 'react'
import API from '@/service/api';
import RedButton from '@/Componenets/Common/RedButton';
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill';
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';

const VehicalInsurance = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await API.post("/contact-us/", formData);
            alert("संदेश यशस्वीरीत्या पाठवला");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    };

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
                description="जीवन विमा"
                imagePosition="left"
                radius={100}
            />

            <Box
                p={isMobile ? 3 : 6}
                display="flex"
                flexDirection="column"
                gap={6}
                mx={isMobile ? 4 : 8}
                my={8}
                className="
                bg-white 
                shadow-md 
                rounded-2xl 
                border-t-4 border-gray-200
                max-w-8xl
              "
            >
                <DisclaimerBox
                    icon={CandlestickChartIcon}
                    title="मोटार इन्शुरन्स म्हणजे काय?"
                    description={`मोटार इन्शुरन्समुळे अपघात, चोरी, आग, पूर, भूकंप यामुळे झालेल्या नुकसानीची भरपाई विमा कंपनीकडून मिळते. हा विमा वाहनधारकाबरोबरच वाहनातील प्रवाशांनाही संरक्षण देतो.`}
                />
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={6} py={10}>
                <div className="py-20 w-full max-w-8xl flex flex-col lg:flex-col gap-2 lg:gap-6 md:gap-10">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 md:gap-10">
                        {/* LEFT RED CARD */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            mr={isMobile ? 4 : isTablet ? 0 : 0}
                            ml={isMobile ? 0 : isTablet ? 0 : 10}
                            display="flex"
                            flexDirection="column"
                            gap={isMobile ? 4 : 2}
                            px={isMobile ? 4 : isTablet ? 6 : 6}
                            py={isMobile ? 6 : isTablet ? 6 : 6}
                            className=" rounded-tr-3xl md:rounded-tr-3xl rounded-br-3xl md:rounded-br-3xl lg:rounded-3xl lg:w-[35%] md:w-[92%] w-full"
                        >


                            <Typography fontSize={isMobile ? "22px" : "30px"} fontWeight={600}>विमा नाही किंवा योजना निवडण्यासाठी मार्गदर्शन हवे आहे ?</Typography>
                            <Typography fontSize={isMobile ? "18px" : "30px"} fontWeight={500}>फक्त खालील फॉर्म भरा आणि आमच्याशी संपर्क साधा</Typography>
                        </Box>

                        {/* RIGHT BLUE FORM */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            ml={isTablet ? 6 : 0}
                            mr={isMobile ? 0 : isTablet ? 0 : 10}
                            display="flex"
                            flexDirection="column"
                            gap={isMobile ? 4 : 4}
                            px={isMobile ? 4 : isTablet ? 6 : 6}
                            py={isMobile ? 6 : isTablet ? 6 : 6}
                            className="bg-[#005896] text-white rounded-tl-3xl md:rounded-tl-3xl lg:rounded-3xl rounded-bl-3xl md:rounded-bl-3xl lg:rounded-3xl lg:w-[65%] md:w-[95%] w-full"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-white/20">
                                <ContactPageRoundedIcon />
                            </div>

                            {/* MUI INPUTS */}
                            <CustomInput
                                label="नाव"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <CustomInput
                                label="ईमेल"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <CustomInput
                                label="फोन"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <CustomInput
                                label="संदेश"
                                name="message"
                                multiline
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                            />

                            {/* Submit Button */}
                            <RedButton
                                bg={"#FF1F1F"}
                                sx={{ px: 4, py: 1.5 }}
                                onClick={handleSubmit}
                            >
                                संदेश पाठवा
                            </RedButton>
                        </Box>
                    </div>
                </div>
            </Box>

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="मोटार इन्शुरन्स का आवश्यक आहे?" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">

                    <NumberInfoBox
                        number="1"
                        text="अपघात वाढत आहेत"
                        subText="दरमहा लाखो अपघात, खराब रस्ते व वाढती वाहने"
                        bgColor="#F7E2FF"
                        borderColor="#8C3AAA"
                        numberBgColor="#8C3AAA"
                        textColor="#8C3AAA"
                        subTextColor="black"
                    />

                    <NumberInfoBox
                        number="2"
                        text="कायद्याने बंधनकारक"
                        bgColor="#E9F7FF"
                        borderColor="#008BDA"
                        numberBgColor="#008BDA"
                        textColor="#008BDA"
                        subTextColor="black"
                        subText="मोटार वाहन कायदा 1988 नुसार विमा आवश्यक आहे"
                    />


                    <NumberInfoBox
                        number="3"
                        text="प्रवाशांचे संरक्षण"
                        bgColor="#FFF3E6"
                        borderColor="#FA8F21"
                        numberBgColor="#FA8F21"
                        textColor="#FA8F21"
                        subTextColor="black"
                        subText="तुमच्यासोबत प्रवास करणाऱ्यांनाही कवच मिळते"
                    />

                </div>
            </Box>

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="काय कव्हर होते / काय कव्हर होत नाही?" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    <DiffereneceBox
                        title="काय कव्हर होत"
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
                                    "अपघातात इतर व्यक्तीला शारीरिक इजा, मृत्यू किंवा इतरांच्या मालमत्तेचे नुकसान झाल्यास त्याची कायदेशीर व आर्थिक भरपाई विमा कंपनी करते. (हे कव्हर कायद्याने बंधनकारक आहे.).",
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

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="मोटार इन्शुरन्सचे फायदे" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatusPill
                        icon={<PlagiarismRoundedIcon />}
                        text="शारीरिक दुखापतीची भरपाई"
                        bgColor="#FFF7CF"
                        borderColor="#FFD400"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<PlagiarismRoundedIcon />}
                        text="अपघाती मृत्यू भरपाई"
                        bgColor="#FFF7CF"
                        borderColor="#FFD400"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<PlagiarismRoundedIcon />}
                        text="कोर्ट केस खर्चाची भरपाई"
                        bgColor="#FFF7CF"
                        borderColor="#FFD400"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<PlagiarismRoundedIcon />}
                        text="गाडी दुरुस्ती खर्च"
                        bgColor="#FFF7CF"
                        borderColor="#FFD400"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<PlagiarismRoundedIcon />}
                        text="पगार / उत्पन्न नुकसान भरपाई"
                        bgColor="#FFF7CF"
                        borderColor="#FFD400"
                        textColor="#111827"
                    />
                </div>
            </Box>
        </div>
    )
}

export default VehicalInsurance