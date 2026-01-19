"use client";

import Image from "next/image";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import NumberInfoBox from "@/Componenets/Common/NumberInfoBox/NumberInfoBox";
import ScrollReveal from "@/Componenets/Common/ScrollReveal/ScrollReveal";


const features = [
    {
        name: "उत्पन्न पोर्टफोलिओ पहा",
        desc: "येथे तुम्ही तुमच्या गुंतवणुकीचा तपशिल केव्हाही व कोठूनही पाहू शकता.",
        bgColor: "#E9F7FF",
        numberBgColor: "#008BDA",
        textColor: "#008BDA",
        subTextColor: "#000000",
    },

    {
        name: "सध्याच्या फ़ोलिओमध्ये ऑनलाइन व्यवहार करा",
        desc: "याचा वापर करून तुम्ही गुंतवणूक करणे पैसे काढणे इ. करू शकता.",
        bgColor: "#F7E2FF",
        numberBgColor: "#8C3AAA",
        textColor: "#8C3AAA",
        subTextColor: "#000000",
    },
    {
        name: "नवीन योजनेत गुंतवणूक करा",
        desc: "काही निवडक म्युचुअल फंड योजनेत तुम्ही ऑनलाइन गुंतवणूक करू शकता. You can track your own portfolio from anywhere and anytime",
        bgColor: "#E9F7FF",
        numberBgColor: "#008BDA",
        textColor: "#008BDA",
        subTextColor: "#000000",
    },
    {
        name: "कुटुंबातील सर्वाची गुंतवणूक एकाच ठिकाणी पहा",
        desc: "येथे तुम्ही तुमच्या कुटुंबातील सर्व सदस्यांच्या गुंतवणुकीचा तपशिल एकाच ठिकाणी केव्हाही पाहू शकता.",
        bgColor: "#F7E2FF",
        numberBgColor: "#8C3AAA",
        textColor: "#8C3AAA",
        subTextColor: "#000000",
    },
    {
        name: "गुंतवणूक कशी करावी ते शिका",
        desc: "मोबाईल App मधून गुंतवणूक कशी करावी याची माहिती स्टेप बाय स्टेप दिली आहे.",
        bgColor: "#E9F7FF",
        numberBgColor: "#008BDA",
        textColor: "#008BDA",
        subTextColor: "#000000",
    },
    {
        name: "आमच्याकडून सूचना प्राप्त करा",
        desc: "जेव्हा गरज असेल तेव्हा आम्ही येथे सूचना प्रसारित करू. त्या पहा व निर्णय घ्या.",
        bgColor: "#F7E2FF",
        numberBgColor: "#8C3AAA",
        textColor: "#8C3AAA",
        subTextColor: "#000000",
    },
]

export default function MobileAppSection() {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>


            <GradientHeading text={"आमचे मोबाइल App"} />

            {/* Main Layout */}
            <Box className="max-w-8xl flex flex-col lg:flex-row items-center justify-evenly gap-14 px-6">

                <Box className="flex flex-col gap-6 w-full lg:w-[45%]" display="flex" flexDirection="column">
                    {features.map((member, index) => (
                        <ScrollReveal>
                            <NumberInfoBox
                                key={member.name}
                                number={index + 1}
                                text={member.name}
                                subText={member.desc}
                                bgColor={member.bgColor}
                                numberBgColor={member.numberBgColor}
                                textColor={member.textColor}
                                subTextColor={member.subTextColor}
                            />
                        </ScrollReveal>
                    ))}
                </Box>

                {/* MOBILE IMAGE */}
                <Box className="w-full lg:w-[30%]">
                    <Image
                        src="/Home/App.png"   // replace with your image path
                        alt="Mobile App"
                        width={450}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </Box>
            </Box>

        </Box>
    );
}
