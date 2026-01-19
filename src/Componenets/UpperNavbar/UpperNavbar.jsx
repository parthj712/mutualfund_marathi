"use client";

import React from "react";
import {
    Box,
    Typography,
    Container,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import Image from "next/image";

export default function UpperNavbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 1px 0 rgba(0,0,0,0.04)", // subtle depth
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    py: isMobile ? 1.5 : 2.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? 2 : isTablet ? 4 : 0,
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                {/* CONTACT DETAILS */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 3,
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "center" : "flex-start",
                    }}
                >
                    {[
                        { icon: <PhoneIcon sx={{ fontSize: 18 }} />, value: "8080876433", href: "tel:+918080876433" },
                        { icon: <PhoneIcon sx={{ fontSize: 18 }} />, value: "98340 79813", href: "tel:+919834079813" },
                        { icon: <EmailIcon sx={{ fontSize: 18 }} />, value: "admin@thakurfinserv.com", href: "mailto:admin@thakurfinserv.com" },
                    ].map((item, i) => (
                        <Box
                            key={i}
                            component="a"
                            href={item.href}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                px: 1.5,
                                py: 0.8,
                                borderRadius: "8px",
                                textDecoration: "none",
                                color: "inherit",
                                transition: "0.3s",
                                "&:hover": {
                                    backgroundColor: "#F9FAFB",
                                    color: "#EF4444",
                                },
                            }}
                        >
                            {item.icon}

                            <Typography fontSize={14} fontWeight={600}>
                                {item.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* LOGO */}
                <Box display="flex" justifyContent="center">
                    <Image
                        src="/ShriThaku.jpeg"
                        alt="Shri Thakur Logo"
                        width={105}
                        height={45}
                        loading="lazy"
                        sizes="(max-width: 600px) 120px, 150px"
                        style={{ objectFit: "contain" }}
                    />
                </Box>

                {/* TRUST + SOCIAL */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        flexWrap: "wrap",
                        justifyContent: isMobile ? "center" : "flex-end",
                    }}
                >
                    {/* AMFI BADGE */}
                    <Box
                        sx={{
                            px: 2.2,
                            py: 0.7,
                            borderRadius: "999px",
                            backgroundColor: "#ECFDF3",
                            border: "1px solid #86EFAC",
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: "0 0 0 4px rgba(134,239,172,0.25)",
                                cursor: "default",
                            },
                        }}
                    >
                        <Typography fontSize={13} fontWeight={600} color="#065F46">
                            ✔ AMFI नोंदणीकृत म्युच्युअल फंड वितरक
                        </Typography>
                    </Box>

                    {/* SOCIAL ICONS */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2.5,
                        }}
                    >
                        {/* Instagram */}
                        <Box
                            sx={{
                                p: 0.7,
                                borderRadius: "50%",
                                cursor: "pointer",
                                transition: "0.3s",

                                "&:hover svg": {
                                    color: "#ED0000",
                                    transform: "scale(1.15)",
                                },
                            }}
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: 24,
                                    transition: "0.3s",
                                }}
                            />
                        </Box>


                        {/* Facebook */}
                        <Box
                            sx={{
                                p: 0.7,
                                borderRadius: "50%",
                                transition: "0.3s",
                                cursor: "pointer",
                                "&:hover svg": {
                                    color: "#1877F2",
                                    transform: "scale(1.15)",
                                },
                            }}
                        >
                            <FacebookIcon sx={{ fontSize: 24 }} />
                        </Box>

                        {/* WhatsApp */}
                        <Box
                            sx={{
                                p: 0.7,
                                borderRadius: "50%",
                                transition: "0.3s",
                                cursor: "pointer",
                                "&:hover svg": {
                                    color: "#25D366",
                                    transform: "scale(1.15)",
                                },
                            }}
                            onClick={() =>
                                window.open(
                                    "https://wa.me/919503718779",
                                    "_blank"
                                )
                            }
                        >
                            <WhatsAppIcon sx={{ fontSize: 24 }} />
                        </Box>
                    </Box>

                </Box>
            </Container>

            {/* GRADIENT DIVIDER */}
            <Box
                sx={{
                    height: "3px",
                    background:
                        "linear-gradient(to right, transparent, #EF4444, transparent)",
                }}
            />
        </Box>
    );
}
