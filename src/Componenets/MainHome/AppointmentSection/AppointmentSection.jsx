"use client";

import CustomInput from "@/Componenets/Common/CustomInput/CustomInput";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import { motion } from "framer-motion";


export default function AppointmentSection() {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (


        <Box py={12}>
            <div className="py-20 w-full max-w-8xl flex flex-col lg:flex-col gap-2 lg:gap-6 md:gap-10">

                <Box alignItems={"center"} px={isMobile ? 4 : isTablet ? 6 : 10}>
                    <GradientHeading text="अपॉइंटमेंट" />

                    <Typography my={isMobile ? 2.5 : 4} fontSize={"20px"} fontWeight={600} textAlign={isMobile ? "left" : "center"}>
                        तुमचा प्रस्ताव आम्हाला पाठवा
                    </Typography>
                </Box>

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
                        gap={isMobile ? 4 : 6}
                        px={isMobile ? 4 : isTablet ? 6 : 6}
                        py={isMobile ? 6 : isTablet ? 6 : 6}
                        className="bg-[#fe3c4f] lg:bg-[#ED0000] text-white rounded-tr-3xl md:rounded-tr-3xl rounded-br-3xl md:rounded-br-3xl lg:rounded-3xl lg:w-[35%] md:w-[92%] w-full"
                    >



                        {/* Icon */}
                        <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-white/20">
                            <BusinessCenterIcon />
                        </div>

                        {/* Office Timing */}
                        <Box display={"flex"} flexDirection={"column"} gap={1.5}>
                            <p className="text-[20px] font-extrabold mb-1">कार्यालयीन वेळ</p>
                            <p className="text-[18px] leading-relaxed">
                                सोम - शनि |  सकाळी ०९ ते संध्याकाळी ०६
                            </p>
                        </Box>

                        {/* Phone Numbers */}
                        <Box display={"flex"} flexDirection={"column"} gap={1.5}>
                            <p className="text-[20px] font-extrabold mb-1">फोन</p>
                            <Box>
                                <p className="text-[18px] leading-relaxed">+91 9823049634</p>
                                <p className="text-[18px] leading-relaxed">+91 7020659833</p>
                                <p className="text-[18px] leading-relaxed">+91 9423037750</p>
                            </Box>
                        </Box>

                        {/* Email */}
                        <Box display={"flex"} flexDirection={"column"} gap={1}>
                            <p className="text-[20px] font-extrabold">ईमेल</p>
                            <p className="text-[20px] leading-relaxed">admin@thakurfinserv.com</p>
                        </Box>
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
                        <CustomInput label="नाव" />
                        <CustomInput label="ईमेल" />
                        <CustomInput label="फोन" />
                        <CustomInput label="संदेश" multiline rows={3} />

                        {/* Submit Button */}
                        <RedButton bg={"#FF1F1F"} sx={{ px: 4, py: 1.5 }}>संदेश पाठवा</RedButton>
                    </Box>
                </div>
            </div>
        </Box>
    );
}
