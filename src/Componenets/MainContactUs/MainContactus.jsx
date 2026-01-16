"use client";

import React from 'react'
import AppointmentSection from '../MainHome/AppointmentSection/AppointmentSection'
import NumberInfoBox from '../Common/NumberInfoBox/NumberInfoBox'
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import GradientHeading from '../Common/GradientHeading/GradientHeading';
import DisclaimerBox from '../Common/DisclaimerBox/DisclaimerBox';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import GoogleMapEmbed from './GoogleMapEmbed/GoogleMapEmbed';

const MainContactus = () => {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <AppointmentSection />


            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                {/* <GradientHeading text="जीवन विमा का आवश्यक आहे?" /> */}
                <NumberInfoBox
                    number={<HandshakeRoundedIcon />}
                    text="Ratnagiri Visit:"
                    bgColor="#FFEBF5"
                    borderColor="#D82D7E"
                    numberBgColor="#D82D7E"
                    textColor="#D82D7E"
                    subTextColor="black"
                    subText={
                        <div className="flex flex-col gap-3 text-[18px] leading-relaxed">
                            <p>
                                <strong >
                                    रत्नागिरी येथे आम्ही आपल्या भेटीसाठी, दर महिन्याच्या दुसऱ्या आणि चौथ्या
                                    शनिवारी व रविवारी येत असतो.
                                </strong>
                            </p>

                            <p>
                                भेटीची वेळ आणि ठिकाण ठरवण्यासाठी फोन करा:
                                <br />
                                <strong>सदानंद:</strong> +91-9518752602 <br />
                                <strong>सुजय:</strong> +91-9503718779
                            </p>

                            <p>
                                <strong>पुढील भेटीची तारीख:</strong>
                                <br />
                                १० फेब्रुवारी २०२४ (शनिवार) <br />
                                ११ फेब्रुवारी २०२४ (रविवार)
                            </p>

                            <p>
                                <strong>ठिकाण:</strong>
                                <br />
                                वृंदावन बागा, मधुरा हॉटेल जवळ, मालनाका, रत्नागिरी
                            </p>
                        </div>
                    }
                />


                <NumberInfoBox
                    number={<HandshakeRoundedIcon />}
                    text="Pune Visit:"
                    bgColor="#E9F7FF"
                    borderColor="#008BDA"
                    numberBgColor="#008BDA"
                    textColor="#008BDA"
                    subTextColor="black"
                    subText={
                        <div className="flex flex-col gap-3 text-[18px] leading-relaxed">
                            <p>
                                <strong>
                                    पुणे येथे आम्ही महिन्यातून एकदा आपल्या भेटीसाठी येत असतो.
                                </strong>
                            </p>

                            <p>
                                भेटीची वेळ आणि ठिकाण ठरवण्यासाठी फोन करा:
                                <br />
                                <strong>सदानंद:</strong> +91-9518752602 <br />
                                <strong>सुजय:</strong> +91-9503718779
                            </p>

                            <p>
                                <strong>पुढील भेटीची तारीख:</strong>
                                <br />
                                १६ फेब्रुवारी २०१९ (शनिवार) <br />
                                १७ फेब्रुवारी २०१९ (रविवार)
                            </p>

                            <p>
                                <strong>ठिकाण:</strong>
                                <br />
                                २, देबाशिष, आश्विनी हॉस्पिटलच्या समोर, बालेवाडी, पुणे.
                            </p>
                        </div>
                    }
                />

            </Box>

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
                    title="आमच्या ग्राहकांसाठी"
                    description={
                        <span>
                            काही शंका असल्यास, अकाउंट स्टेटमेंट हवे असल्यास – तक्रार निवारण क्रमांक{" "}
                            <a
                                href="tel:9834079813"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                9834079813
                            </a>
                        </span>
                    }
                />

            </Box>

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GoogleMapEmbed />
            </Box>
        </div>
    )
}

export default MainContactus