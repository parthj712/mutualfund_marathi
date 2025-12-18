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
                    pb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

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
                        <Typography fontWeight={500} fontSize={13}>सुजय</Typography>
                        <Typography
                            component="a"
                            href="tel:+919503718779"
                            fontWeight={600}
                            fontSize={15}
                            sx={{
                                textDecoration: "none",
                                color: "inherit",
                                cursor: "pointer",
                            }}
                        >
                            9503718779
                        </Typography>

                    </Box>

                    <Box>
                        <Typography fontWeight={500} fontSize={13}>सदानंद</Typography>
                        <Typography
                            component="a"
                            href="tel:+919518752605"
                            fontWeight={600}
                            fontSize={15}
                            sx={{ textDecoration: "none", color: "inherit" }}
                        >
                            9518752605
                        </Typography>

                    </Box>

                    <Box>
                        <Typography fontWeight={500} fontSize={13}>ईमेल:</Typography>
                        <Typography
                            component="a"
                            href="mailto:admin@thakurfinserv.com"
                            fontWeight={600}
                            fontSize={15}
                            sx={{
                                textDecoration: "none",
                                color: "inherit",
                                cursor: "pointer",
                            }}
                        >
                            admin@thakurfinserv.com
                        </Typography>

                    </Box>
                </Box>

                {/* LOGO + TEXT */}

                <img
                    src="/ShriThakur.png"
                    alt="Logo"
                    style={{
                        height: isMobile ? 40 : 45,
                        objectFit: "contain",
                        borderRadius: 5,
                        alignItems: "center"
                    }}
                />



                {/* SOCIAL ICONS */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        mt: isMobile ? 1 : 0,
                    }}
                >
                    <Typography
                        fontWeight={600}
                        fontSize={isMobile ? 14 : isTablet ? 15 : 16}
                    >
                        AMFI नोंदणीकृत म्युच्युअल फंड वितरक
                    </Typography>
                    <InstagramIcon sx={{ fontSize: 26, cursor: "pointer" }} />
                    <FacebookIcon sx={{ fontSize: 26, cursor: "pointer" }} />
                </Box>

            </Container>
        </Box>
    );
}
