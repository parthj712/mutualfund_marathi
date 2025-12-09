"use client";

import React from "react";
import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function UpperNavbar() {
    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box sx={{ borderBottom: "1px solid #e5e7eb", width: "100%" }}>
            <Container
                maxWidth="lg"
                sx={{
                    pt: 2,
                    pb : 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    // Layout changes using breakpoints
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? 2 : isTablet ? 4 : 10,
                    textAlign: isMobile ? "center" : "left",
                }}
            >

                {/* CONTACT + HELP + EMAIL SECTION */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "center" : "flex-start",
                        gap: isMobile ? 1.5 : isTablet ? 4 : 6,
                    }}
                >
                    <Box>
                        <Typography fontWeight={500} fontSize={13}>संपर्क:</Typography>
                        <Typography fontWeight={600} fontSize={15}>9503718779</Typography>
                    </Box>

                    <Box>
                        <Typography fontWeight={500} fontSize={13}>सहाय्य:</Typography>
                        <Typography fontWeight={600} fontSize={15}>9518752605</Typography>
                    </Box>

                    <Box>
                        <Typography fontWeight={500} fontSize={13}>ईमेल:</Typography>
                        <Typography fontWeight={600} fontSize={15}>admin@thakurfinserv.com</Typography>
                    </Box>
                </Box>

                {/* LOGO + TEXT */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: isMobile ? 1 : 6,
                    }}
                >
                    <img
                        src="/Logo.jpeg"
                        alt="Logo"
                        style={{
                            height: isMobile ? 40 : 50,
                            objectFit: "contain",
                            borderRadius: 5,
                        }}
                    />
                    <Typography
                        fontWeight={600}
                        fontSize={isMobile ? 14 : isTablet ? 15 : 16}
                    >
                        AMFI नोंदणीकृत म्युच्युअल फंड वितरक
                    </Typography>
                </Box>

                {/* SOCIAL ICONS */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mt: isMobile ? 1 : 0,
                    }}
                >
                    <InstagramIcon sx={{ fontSize: 26, cursor: "pointer" }} />
                    <FacebookIcon sx={{ fontSize: 26, cursor: "pointer" }} />
                </Box>

            </Container>
        </Box>
    );
}
