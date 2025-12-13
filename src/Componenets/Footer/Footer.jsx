"use client";

import Image from "next/image";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "../Common/GradientHeading/GradientHeading";
import GradientUnderlineHeading from "../Common/GradientUnderlineHeading/GradientUnderlineHeading";
import Link from "next/link";


export default function Footer() {


    const navItems = [
        { name: "संपर्क साधा", path: "/contact" },
        { name: "सामान्य प्रश्न", path: "/contact" },
    ];


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (

        <>


            {/* MAIN BLUE SECTION */}
            <Box
                p={isMobile ? 3 : 8}
                display="flex"
                flexDirection="column"
                gap={4}
                color="white"
                className="w-full max-w-8xl mx-auto relative"
                sx={{
                    background: "linear-gradient(90deg, #1C76A9 0%,  #004A74 100%)",
                  
                }}
            >

                {/* Background diagonal tone (optional like screenshot) */}
                {/* <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/Footer.png"   // <-- Your background image
                        alt="Footer Background"
                        fill
                        className="object-cover"  // adjust opacity as needed
                    />
                </div> */}


                <Box py={isMobile || isTablet ? 4 : 0} className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    {isDesktop && (
                        <Image
                            src="/Logo.jpeg"
                            alt="Thakur Finserv Logo"
                            width={400}
                            height={80}
                        />
                    )}

                    {/* LEFT COLUMN — LOGO + ADDRESS */}
                    <div className="flex flex-col gap-5 items-start">

                        <Box display={"flex"} flexDirection={"column"} gap={2} textAlign={"left"}>
                            <GradientUnderlineHeading text="नोंदणीकृत पत्ता" />
                            <p className="leading-relaxed mt-2 text-[18px]">
                                301, श्री संस्कृती, <br />
                                रावतळे, मराठी शाळेजवळ, <br />
                                चिपळूण, रत्नागिरी - 415605
                            </p>
                        </Box>

                        <Box display={"flex"} flexDirection={"column"} gap={2}>

                            <GradientUnderlineHeading text="पत्ता" />
                            <p className="leading-relaxed mt-2 text-[18px]">
                                पहिला मजला, माऊली अपार्टमेंट,<br />
                                भोगले, पाटणकर रुग्णालयाजवळ,<br />
                                चिपळूण, रत्नागिरी - 415605
                            </p>
                        </Box>
                    </div>

                    {/* MIDDLE COLUMN — QUICK LINKS */}
                    <Box display={"flex"} flexDirection={"column"} gap={2}>

                        <GradientUnderlineHeading text="क्वीक लिंक्स" />

                        <div className="flex flex-col gap-2 text-[18px]">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.path}
                                    className="hover:text-[#E60000] transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Additional footer-only items */}
                            <Link href="/privacy-policy" className="hover:text-[#E60000] transition-all">
                                प्रायव्हसी पॉलिसी
                            </Link>
                            <Link href="/disclaimer" className="hover:text-[#E60000] transition-all">
                                अनिवार्य सूचना
                            </Link>
                        </div>

                    </Box>

                    {/* RIGHT COLUMN — CONTACT DETAILS */}
                    <Box display={"flex"} flexDirection={"column"} gap={2}>

                        <GradientUnderlineHeading text="आम्हाला कॉल करा" />

                        <div className="flex flex-col gap-2 text-[18px]">
                            <p>+91 9823049634</p>
                            <p>+91 9080659833</p>
                            <p>+91 7020659833</p>
                        </div>

                        <Box display={"flex"} flexDirection={"column"} gap={2}>
                            <GradientUnderlineHeading text="संपर्क करा" />
                            <p className="text-[18px] mt-2">admin@thakurfinserv.com</p>
                        </Box>
                    </Box>
                </Box>

                <Box display={"flex"} flexDirection={"column"} gap={4} pt={isMobile ? 2 : 4}>

                    {/* PARAGRAPH SECTION */}
                    <p className="text-[18px] leading-relaxed mt-10 opacity-90 relative">
                        • ब्रोकरेज पडिस्क्लोजर (इक्विटी, हायब्रिड आणि निवृत्ती योजना वार्षिक ०.१०% ते १.५०% पर्यंत आणि कर्ज योजना वार्षिक ०.०५% ते ०.६०% पर्यंत एएमसी मासिक आधारावर भरतात)
                    </p>

                    <p className="text-[18px] leading-relaxed mt-10 opacity-90 relative">
                        • श्री ठाकूर फिनसर्व्ह प्रायव्हेट लिमिटेड AMFI नोंदणीकृत म्युच्युअल फंड वितरक आणि AMFI नोंदणीकृत PMS वितरक आहेत आणि आम्ही AMFI, AMPI आणि SEBI सर्व नियम आणि कायदे पाळतो.
                    </p>
                </Box>
            </Box>

        </>
    );
}
