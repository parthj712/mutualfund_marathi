"use client";

import {
    Card,
    Typography,
    CardMedia,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import RedButton from "./RedButton";

export default function InfoCard({ image, title, desc, slug }) {
    const theme = useTheme();
    const router = useRouter();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleNavigation = () => {
        router.push(`/homecards/${slug}`);
    };

    return (
        <Card
            onClick={handleNavigation}
            sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",

                mr: isMobile ? 3.5 : 0,
                
                "&:hover .overlay": {
                    opacity: 1,
                    transform: "translateY(0)",
                },
            }}
        >
            {/* IMAGE */}
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width: "100%",          // full width of the card
                    height: isMobile ? "450px" : "400px", // 👈 increase here
                    objectFit: "cover",     // keeps image clean
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                }}
            />

            {/* OVERLAY */} 
            <Box
                className="overlay"
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 2,

                    // 🔑 visibility logic
                    opacity: isMobile ? 1 : 0,
                    transform: isMobile ? "none" : "translateY(20px)",
                    transition: "all 0.3s ease",
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: isMobile ? 16 : 18,
                        mb: 1,
                    }}
                    className="line-clamp-2"
                >
                    {title}
                </Typography>

                <RedButton sx={{ width: "100%" , fontSize : isMobile ? "17px" : "14px"}}>
                    अधिक वाचा →
                </RedButton>
            </Box>
        </Card>
    );
}
