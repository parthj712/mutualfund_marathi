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

const LifeInsurance = () => {

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
          title="जीवन विमा म्हणजे काय?"
          description={`जीवन विमा म्हणजे तुमच्या पश्चात तुमच्यावर अवलंबून असणाऱ्या व्यक्तींना नियमित उत्पन्न व आर्थिक स्थैर्य मिळवून देण्याची व्यवस्था.`}
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
        <GradientHeading text="जीवन विमा का आवश्यक आहे?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">

          <NumberInfoBox
            number="1"
            text="कुटुंबाचे भविष्य सुरक्षित करण्यासाठी"
            subText="जर अचानक काही अनिष्ट घडले, तर तुमच्या पश्चात तुमच्या कुटुंबाचे दैनंदिन जीवन सुरळीत चालावे यासाठी जीवन विमा अत्यंत आवश्यक आहे. तो कुटुंबाला आर्थिक स्थैर्य आणि मानसिक आधार देतो."
            bgColor="#F7E2FF"
            borderColor="#8C3AAA"
            numberBgColor="#8C3AAA"
            textColor="#8C3AAA"
            subTextColor="black"
          />

          <NumberInfoBox
            number="2"
            text="अचानक होणाऱ्या आर्थिक नुकसानीपासून संरक्षण"
            bgColor="#E9F7FF"
            borderColor="#008BDA"
            numberBgColor="#008BDA"
            textColor="#008BDA"
            subTextColor="black"
            subText="अपघात, आजारपण किंवा अकाली मृत्यूमुळे उत्पन्न बंद होऊ शकते.जीवन विमा अशा वेळी आर्थिक नुकसान भरून काढण्यास मदत करतो"
          />


          <NumberInfoBox
            number="3"
            text="मुलांचे शिक्षण खंडित होऊ नये म्हणून"
            bgColor="#FFF3E6"
            borderColor="#FA8F21"
            numberBgColor="#FA8F21"
            textColor="#FA8F21"
            subTextColor="black"
            subText="मुलांचे शिक्षण, फी, करिअरची स्वप्ने कोणत्याही परिस्थितीत थांबू नयेत.योग्य जीवन विम्यामुळे शिक्षणासाठी आवश्यक निधी सुरक्षित राहतो."
          />

          <NumberInfoBox
            number="4"
            text="वारसांना कोणावर अवलंबून राहावे लागू नये म्हणून"
            bgColor="#FFEBF5"
            borderColor="#D82D7E"
            numberBgColor="#D82D7E"
            textColor="#D82D7E"
            subTextColor="black"
            subText="तुमच्या पश्चात कुटुंबातील सदस्यांना कोणाकडे हात पसरावा लागू नये.जीवन विमा त्यांना स्वाभिमानाने आणि आत्मनिर्भरपणे जगण्याची संधी देतो."
          />


        </div>
      </Box>


      <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
        <GradientHeading text="कोणता विमा घ्यावा?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

          <DiffereneceBox
            title="टर्म इन्शुरन्स (शिफारसीय)"
            titleBgColor="#22C55E"
            bgColor="#ECFDF5"
            items={[
              {
                heading: "कमी प्रीमियम",
                description:
                  "अत्यल्प वार्षिक हप्त्यात मोठे विमा संरक्षण मिळते.सामान्य उत्पन्न असणाऱ्या व्यक्तीसाठीही परवडणारा पर्याय.",
              },
              {
                heading: "जास्तीत जास्त विमा संरक्षण",
                description:
                  "तुमच्या पश्चात कुटुंबाच्या सर्व आर्थिक गरजा भागवण्यासाठी पुरेसा निधी मिळतो. उत्पन्नाची जागा भरून काढण्यास मदत होते",
              },
              {
                heading: "सरळ आणि पारदर्शक विमा",
                description:
                  "कोणताही गुंतवणूक गोंधळ नाही, फक्त शुद्ध सुरक्षा.विमा म्हणजे नेमके काय हवे आहे ते स्पष्टपणे पूर्ण होते.",
              },
            ]}
          />

          <DiffereneceBox
            title="पारंपरिक विमा योजना (शिफारस नाही)"
            titleBgColor="#EF4444"
            bgColor="#FEF2F2"

            items={[
              {
                heading: "कमी विमा संरक्षण",
                description:
                  "तुम्ही भरलेल्या प्रीमियमच्या तुलनेत विमा संरक्षण खूपच कमी मिळते.आपत्कालीन परिस्थितीत ही रक्कम कुटुंबाच्या गरजा भागवण्यासाठी अपुरी ठरते.",
              },
              {
                heading: "साधारण 4% परतावा",
                description:
                  "या योजनांमधील परतावा महागाईपेक्षा कमी असतो. त्यामुळे दीर्घकाळात पैशांची खरी किंमत कमी होत जाते.",
              },
              {
                heading: "गुंतवणूक + विमा = गोंधळ",
                description:
                  "विमा आणि गुंतवणूक एकत्र केल्यामुळे दोन्हींचा उद्देश योग्यरित्या साध्य होत नाही.",
              },
            ]}
          />
        </div>
      </Box>



    </div>
  )
}

export default LifeInsurance