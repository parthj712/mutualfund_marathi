"use client";

import CustomInput from "@/Componenets/Common/CustomInput/CustomInput";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function AppointmentSection() {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div className="w-full flex flex-col items-center">

            {/* MAIN HEADING */}

            <GradientHeading text="अपॉइंटमेंट" />

            <Typography my={4} fontSize={"20px"} fontWeight={600}>
                तुमचा प्रस्ताव आम्हाला पाठवा
            </Typography>


            {/* MAIN CONTAINER */}
            <div className="w-full max-w-8xl flex flex-col lg:flex-row gap-10">

                {/* LEFT RED CARD */}
                <Box
                    mr={isMobile ? 4 :  isTablet ? 0 : 0}
                    display="flex"
                    flexDirection="column"
                    gap={6}
                    p={isMobile ? 6 : isTablet ? 6 : 10}
                    className="bg-[#E60000] text-white rounded-tr-3xl rounded-br-3xl lg:w-[45%] md:w-[92%] w-full"
                >


                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-white/20">
                        📅
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
                    // ml={isMobile ? 4 : isTablet ? 4 : 0}
                    display="flex"
                    flexDirection="column"
                    gap={isMobile ? 4 : isTablet ? 4 : 6}
                    p={isMobile ? 6 : isTablet ? 6 : 10}
                    className="bg-[#003B65] text-white rounded-tl-3xl rounded-bl-3xl lg:w-[55%] md:w-[95%] w-full "
                >
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-white/20">
                        📝
                    </div>

                    {/* MUI INPUTS */}
                    <CustomInput label="नाव" />
                    <CustomInput label="ईमेल" />
                    <CustomInput label="फोन" />
                    <CustomInput label="संदेश" multiline rows={3} />

                    {/* Submit Button */}
                    <RedButton sx={{ px: 4, py: 1.5 }}>संदेश पाठवा</RedButton>
                </Box>

            </div>
        </div>
    );
}
