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
                maxWidth="lg"
                sx={{
                    py: isMobile ? 1.5 : 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? 2 : isTablet ? 4 : 6,
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                {/* CONTACT DETAILS */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: isMobile ? 1.5 : 3,
                        alignItems: isMobile ? "center" : "flex-start",
                    }}
                >
                    {[
                        { name: "सुजय", value: "9503718779", href: "tel:+919503718779" },
                        { name: "सदानंद", value: "9518752605", href: "tel:+919518752605" },
                        {
                            name: "ईमेल",
                            value: "admin@thakurfinserv.com",
                            href: "mailto:admin@thakurfinserv.com",
                        },
                    ].map((item, i) => (
                        <Box
                            key={i}
                            sx={{
                                px: 1.5,
                                py: 0.5,
                                borderRadius: "8px",
                                transition: "0.3s",
                                "&:hover": {
                                    backgroundColor: "#F9FAFB",
                                },
                            }}
                        >
                            <Typography fontSize={12.5} fontWeight={500} color="text.secondary">
                                {item.name}
                            </Typography>
                            <Typography
                                component="a"
                                href={item.href}
                                fontSize={15}
                                fontWeight={600}
                                sx={{
                                    color: "inherit",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    "&:hover": { color: "#EF4444" },
                                }}
                            >
                                {item.value}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                {/* LOGO */}
                <Box display="flex" justifyContent="center">
                    <Image
                        src="/ShriThakur.png"
                        alt="Shri Thakur Logo"
                        width={110}
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
                        gap: 2,
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
                            gap: 1,
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
                    height: "2px",
                    background:
                        "linear-gradient(to right, transparent, #EF4444, transparent)",
                }}
            />
        </Box>
    );
}
