"use client";

import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function VisionSection() {

     const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                minHeight: { xs: 280, md: 360 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Background Image */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/BG/vs.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Dark Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.3) 100%)",
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    color: "#fff",
                    p: { xs: 3, md: 6 },
                    maxWidth: "900px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {/* Heading */}
                <GradientHeading
                    text="आमचा दृष्टिकोन"
                    variant="white"
                    className="items-center"
                />

                {/* Description */}
                <Typography
                    fontSize={ isMobile ? "16px" : "22px" }
                    lineHeight={1.8}
                  fontWeight={500}
                >
                    तुमच्या विशिष्ट गरजा आणि जोखीम पातळी पूर्ण करणारे
                    पोर्टफोलिओ उपाय प्रदान करण्यासाठी आम्ही एक
                    संरचित आणि शिस्तबद्ध गुंतवणूक दृष्टिकोन वापरतो.
                    आमच्या व्यापक उपायांमध्ये मालकी आणि गैर-मालकीची
                    उत्पादने समाविष्ट आहेत, जी आमच्या सल्लागार सेवांना
                    पूरक म्हणून काळजीपूर्वक निवडली जातात. तुमच्या
                    मालमत्ता वाटपाला अनुकूल असलेल्या निष्पक्ष उत्पादन
                    उपायांची शिफारस करण्यासाठी आम्ही बाजारात उपलब्ध
                    असलेल्या सर्व पर्यायांचे मूल्यांकन करतो.
                </Typography>
            </Box>
        </Box>
    );
}
