"use client";

import Image from "next/image";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GradientUnderlineHeading from "@/Componenets/Common/GradientUnderlineHeading/GradientUnderlineHeading";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useRef } from "react";




export default function Testimonials() {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    // 🔢 Counter state
    const [count, setCount] = useState(0);

    // 👀 Observe when section is visible
    const counterRef = useRef(null);
    const isInView = useInView(counterRef, { once: true, margin: "-100px" });



    const testimonials = [
        {
            text: "गेल्या १० वर्षांपासून मी ठाकूर फिनसर्व्ह यांच्या मार्गदर्शनाखाली गुंतवणूक करत आहे. फंड निवड, जोखीम व्यवस्थापन आणि योग्य वेळी मिळणाऱ्या सल्ल्यामुळे माझा आर्थिक प्रवास अधिक सुरक्षित झाला आहे.",
            author: "श्री. अमोल देशमुख, पुणे"
        },
        {
            text: "माझ्या मुलांच्या शिक्षणासाठी योग्य योजना निवडण्यात ठाकूर फिनसर्व्ह यांनी अतिशय महत्त्वपूर्ण मार्गदर्शन केले. त्यांची सेवा पारदर्शक, विश्वासार्ह आणि नेहमी उपलब्ध असते.",
            author: "सौ. प्राची पाटील, कोल्हापूर"
        },
        {
            text: "मी गुंतवणुकीत पूर्णपणे नवा होतो, पण त्यांनी अतिशय सोप्या भाषेत गुंतवणूक समजावून सांगितली. आज माझे SIP व्यवस्थित चालू आहे आणि माझी आर्थिक शिस्तही सुधारली आहे.",
            author: "श्री. विनायक कदम, रत्नागिरी"
        }
    ];


    // 🔥 Testimonial index state
    const [currentIndex, setCurrentIndex] = useState(0);

    // 🔄 Auto-change testimonials every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, 250, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate(value) {
                setCount(Math.floor(value));
            },
        });

        return () => controls.stop();
    }, [isInView]);



    return (
        <Box px={isMobile ? 4 : isTablet ? 6 : 10}
            py={isMobile ? 6 : isTablet ? 6 : 10} display={"flex"} flexDirection={"column"} alignItems={"center"} sx={{
                background: `
      linear-gradient(
        90deg,
        rgba(0, 74, 116, 0.9) 0%,
        rgba(0, 74, 116, 93) 100%
      ),
      url("/BG/bg1.jpg")
    `,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "left center",

            }} className="w-full bg-[#003B65] text-white py-16 px-4">
            <Box className="max-w-6xl mx-auto flex flex-col items-center  gap-6">

                {/* TOP HEADING */}
                <GradientUnderlineHeading text="आमचे गुंतवणूकदार काय म्हणतात" size={"24px"} />

                {/* SUBHEADING */}
                <Typography fontSize={isMobile ? "18px" : "20px"} py={4}>
                    आमच्या विश्वासार्ह सेवे, कौशल्यामुळे आणि व्यावसायिक सेवे मुळे ग्राहक आमच्यावर विश्वास ठेवतात.
                </Typography>

                {/* MAIN LAYOUT */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">

                    {/* LEFT SIDE — 250+ Number */}
                    <div
                        ref={counterRef}
                        className="flex flex-col items-start lg:items-start lg:text-left text-center"
                    >

                        <Typography
                            fontSize={isMobile ? "80px" : isTablet ? "90px" : "132px"}
                            fontWeight={600}
                        >
                            {count}+
                        </Typography>


                        <Typography fontSize={isMobile ? "30px" : isTablet ? "32px" : "52px"}>
                            ग्राहकांना सेवा दिली
                        </Typography>
                    </div>

                    {/* RIGHT SIDE — TESTIMONIAL BOX */}
                    {/* RIGHT SIDE — TESTIMONIAL BOX (Animated) */}
                    <div className="relative">

                        {/* TOP QUOTE ICON */}
                        <Image
                            src="/Testinomials/Q1.png"
                            alt="quote-top"
                            width={isMobile ? 80 : 100}
                            height={100}
                            className="absolute -top-10 -right-4 lg:-right-10 md:-right-10 z-20"
                        />

                        {/* Animated White Box */}
                        <Box
                            display="flex"
                            flexDirection="column"
                            p={8}
                            gap={4}
                            className="bg-white text-[#003B65] rounded-2xl shadow-lg relative"
                        >
                            <motion.div
                                key={currentIndex} // 👈 important for animation
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}

                            >
                                <Box display={"flex"} flexDirection={"column"} gap={4}>

                                    <Typography fontSize="20px" fontWeight={600} textAlign="left" lineHeight={1.8}>
                                        {testimonials[currentIndex].text}
                                    </Typography>

                                    <Typography fontSize="18px" fontWeight={600} textAlign="right">
                                        {testimonials[currentIndex].author}
                                    </Typography>
                                </Box>

                            </motion.div>
                        </Box>

                        {/* BOTTOM QUOTE ICON */}
                        <Image
                            src="/Testinomials/Q2.png"
                            alt="quote-bottom"
                            width={isMobile ? 80 : 100}
                            height={100}
                            className="absolute -bottom-6 -left-4 lg:-left-10 md:-left-10"
                        />
                    </div>

                </div>

                <Box display="flex" justifyContent="flex-end" py={4} className="w-full mt-4">
                    <a
                        href="/testimonials"
                        className="text-white underline hover:text-gray-300 flex items-center gap-2"
                    >
                        <Typography fontSize={"20px"}> अधिक वाचा →</Typography>
                    </a>
                </Box>

            </Box>
        </Box>
    );
}
