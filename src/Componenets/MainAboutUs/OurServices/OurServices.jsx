"use client";

import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const services = [
    {
        title: "आर्थिक नियोजन",
        image: "/Services/finance.png",
    },
    {
        title: "म्युच्युअल फंड",
        image: "/Services/mutual-fund.png",
    },
    {
        title: "फिक्स्ड डिपॉझिट",
        image: "/Services/fd.png",
    },
    {
        title: "इक्विटी ट्रेडिंग",
        image: "/Services/trade.png",
    },
    {
        title: "विमा",
        image: "/Services/insurance.png",
    },
];




export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState(0);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                display: "flex",
                gap: 1.5,
                height: 360,
                overflow: "hidden",
                flexDirection: isMobile ? "column" : "row",
            }}
        >
            {services.map((service, index) => (
                <Box
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    sx={{
                        flex: activeIndex === index ? 3 : 1,
                        transition: "all 0.4s ease",
                        borderRadius: 6,
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        minWidth: 0,
                    }}
                >
                    {/* Image */}
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                activeIndex === index
                                    ? "linear-gradient(to top, rgba(0,0,0,0.6), transparent)"
                                    : "rgba(0,0,0,0.25)",
                            transition: "0.3s",
                        }}
                    />

                    {/* Content */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 20,
                            left: 20,
                            right: 20,
                            color: "#fff",
                            opacity: activeIndex === index ? 1 : 0,
                            transform:
                                activeIndex === index
                                    ? "translateY(0)"
                                    : "translateY(10px)",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <Typography fontSize="20px" fontWeight={600} mb={1}>
                            {service.title}
                        </Typography>

                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                fontSize : "16px",
                                textTransform: "none",
                                borderRadius: 20,
                                backgroundColor: "#ffffff",
                                color: "#000",
                                fontWeight: 600,
                                "&:hover": {
                                    backgroundColor: "#f1f1f1",
                                },
                            }}
                        >
                            View
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
