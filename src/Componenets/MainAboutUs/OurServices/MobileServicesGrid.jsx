"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";


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
        full: true, // last card full width
    },
];

export default function MobileServicesGrid() {
    return (
        <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap={2}
        >
            {services.map((service, index) => (
                <Box
                    key={index}
                    sx={{
                        gridColumn: service.full ? "span 2" : "auto",
                        borderRadius: 3,
                        overflow: "hidden",
                        position: "relative",
                        height: service.full ? 180 : 140,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
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
                                "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.15))",
                        }}
                    />

                    {/* Content */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 12,
                            left: 12,
                            right: 12,
                            color: "#fff",
                        }}
                    >
                        <Typography fontSize="15px" fontWeight={700}>
                            {service.title}
                        </Typography>

                        <Button
                            size="small"
                            variant="contained"
                            sx={{
                                mt: 1,
                                backgroundColor: "#fff",
                                color: "#000",
                                textTransform: "none",
                                fontSize: "12px",
                                borderRadius: 20,
                                px: 2,
                                py: 0.5,
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
