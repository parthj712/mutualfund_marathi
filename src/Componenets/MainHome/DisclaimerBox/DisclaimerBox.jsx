"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HiInformationCircle } from "react-icons/hi";

export default function DisclaimerBox() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <Box
            p={isMobile ? 3 : 10}
            display={"flex"}
            flexDirection={"column"}
            gap={6}
            px={4}
            py={8}
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
            {/* Heading with Icon */}
            <div className="flex flex-row items-center justify-center gap-2 mb-2">
                {!isMobile && (
                    <HiInformationCircle className="text-blue-600 text-3xl" />
                )}


                <Typography
                    fontWeight={700}
                    fontSize="20px"
                    className="text-center"
                >
                    अनिवार्य सूचना (Disclaimers)
                </Typography>
            </div>

            {/* Paragraph */}
            <Typography
                fontSize="18px"
                className="text-center leading-relaxed"
            >
                www.thakurfinserv.com ही श्री ठाकुर Finserv प्रायव्हेट लिमिटेडची एक ऑनलाइन वेबसाइट आहे
                जी ARN-328893 वर म्युच्युअल फंड विक्रेत्या म्हणून नोंदणीकृत आहे.
                ही वेबसाइट म्युच्युअलफंडाच्या स्वयं-सेवांशी संबंधित आर्थिक माहितीची इंटरनेटवर माहिती
                सादर करण्यासाठी आहे. या वेबसाइट आर्थिक सल्लागार सेवांचा समावेश करत नाही किंवा
                नाहीतर गुंतवणूक करण्याची शिफारस करते. कोणत्याही प्रकारच्या परताव्याची किंवा आर्थिक
                व्यवहाराची हमी ही नाही.
            </Typography>
        </Box>
    );
}
