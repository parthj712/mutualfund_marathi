"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import RedButton from "@/Componenets/Common/RedButton";
import { useRouter } from "next/navigation";


export default function HeroSlider() {

    const router = useRouter();


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: "Home/H1.avif",
            title: "आर्थिक प्रगतीसाठी तुमचा \nविश्वासू भागीदार",
            subtitle: "आमच्या तज्ज्ञ मार्गदर्शनासह घ्या योग्य आर्थिक निर्णय.",
            button: "म्युच्युअल फंड माहिती",
            path: "/funds", // ✅ route
        },
        {
            image: "Home/H2.avif",
            title: "तुमच्या गुंतवणुकीसाठी सुरक्षित पर्याय",
            subtitle: "तुमच्या भविष्यासाठी उत्तम आर्थिक नियोजन.",
            button: "अधिक जाणून घ्या",
            path: "/financial-planning", // ✅ route
        },
        {
            image: "Home/H3.avif",
            title: "विश्वासाने आणि समजून गुंतवणूक करा",
            subtitle: "आमचे मार्गदर्शक आणि तज्ज्ञ सल्ला तुमच्यासोबत.",
            button: "सेवा पहा",
            path: "/about", // ✅ route
        }
    ];

    return (
        <Box className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                speed={1800}               /* Smooth transition */
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: { xs: "536px", sm: "460px", md: "536px" },
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                // borderRadius: "10px",
                                overflow: "hidden",
                            }}
                            className="flex items-end"
                        >
                            {/* Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(0,0,0,0.35)",
                                }}
                            />

                            {/* Animated Text Content */}
                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 10,
                                    maxWidth: "700px",
                                    ml: { xs: 4, sm: 6, md: 10 },
                                    mb: isTablet ? 8 : 6
                                }}
                            >
                                {/* Title Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        activeIndex === index
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 30 }
                                    }
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <Typography

                                        sx={{
                                            fontSize: isMobile ? "22px" : isTablet ? "40px" : "60px",
                                            fontWeight: 700,
                                            color: "white",
                                            whiteSpace: "pre-line",
                                            mb: 1,
                                            boxShadow: "1px solid black"
                                        }}
                                    >
                                        {slide.title}
                                    </Typography>
                                </motion.div>

                                {/* Subtitle Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        activeIndex === index
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 30 }
                                    }
                                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                                >
                                    <Typography
                                        sx={{
                                            color: "white",
                                            fontSize: isMobile ? "18px" : isTablet ? "22px" : "26px",
                                            mb: 2,
                                        }}
                                    >
                                        {slide.subtitle}
                                    </Typography>
                                </motion.div>

                                {/* Button Animation */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={
                                        activeIndex === index
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
                                >
                                    <RedButton
                                        onClick={() => router.push(slide.path)}
                                        sx={{
                                            px: 3,
                                            py: 1.2,
                                            fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                                        }}
                                    >
                                        {slide.button}
                                    </RedButton>

                                </motion.div>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
