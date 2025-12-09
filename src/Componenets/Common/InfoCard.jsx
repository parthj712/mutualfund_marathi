"use client";

import { Card, CardContent, Typography, CardMedia, Box, useTheme, useMediaQuery } from "@mui/material";

export default function InfoCard({ image, title, desc }) {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Card
            sx={{
                // width : isMobile ? "80%" : "100%",
                mr: isMobile ? 3 : isTablet ? 0 :  0,
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 25px rgba(0,0,0,0.12)"
                }
            }}
            className="bg-white"
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width:  "100%",          // full width of the card
                    height: isMobile ? "140px" : "160px",        // fixed height (change as you need)
                    objectFit: "cover",     // keeps image clean
                    borderTopLeftRadius: "12px",
                    borderTopRightRadius: "12px",
                }}
            />


            <CardContent>
                <Typography
                    sx={{ fontWeight: 700, fontSize: "16px", mb: 1 }}
                    className="line-clamp-2"
                >
                    {title}
                </Typography>

                <Typography
                    sx={{ fontWeight: 400, fontSize: "14px", color: "#444" }}
                    className="line-clamp-3"
                >
                    {desc}
                </Typography>

                <Box className="mt-4 flex justify-end">
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "15px",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                        }}
                    >
                        अधिक वाचा →
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
