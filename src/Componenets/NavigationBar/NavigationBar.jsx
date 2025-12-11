"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Button,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import RedButton from "../Common/RedButton";
import Image from "next/image";


export default function NavigationBar() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { name: "मुख्यपृष्ठ", path: "/" },
        { name: "आमच्याबद्दल", path: "/about" },
        { name: "आमच्या सेवा", path: "/services" },
        { name: "म्युच्युअल फंड", path: "/funds" },
        { name: "ब्लॉग्ज", path: "/blogs" },
        { name: "डाउनलोड", path: "/downloads" },
        { name: "संपर्क साधा", path: "/contact" },
    ];

    return (
        <AppBar
            position="sticky"
            elevation={1}
            sx={{
                backgroundColor: "white",
                color: "black",
                py: 1,
            }}
        >
            <Toolbar
                sx={{
                    maxWidth: "1400px",
                    width: "100%",
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >

                {/* LEFT — Mobile Menu Icon */}
                <IconButton
                    sx={{ display: { xs: "block", lg: "none" } }}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon fontSize="large" />
                </IconButton>

                {/* Desktop Menu */}
                <Box
                    sx={{
                        display: { xs: "none", lg: "flex" },
                        gap: 5,
                        alignItems: "center",
                        mx: "auto",
                    }}
                >
                    {navItems.map((item) => (
                        <Box key={item.name}>
                            <Link href={item.path} style={{ textDecoration: "none" }}>
                                <Box
                                    component={motion.div}
                                    whileHover="hover"
                                    sx={{ position: "relative", display: "inline-block", cursor: "pointer" }}
                                >
                                    <motion.p
                                        variants={{
                                            hover: { color: "#4f46e5" }
                                        }}
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: 600,
                                            margin: 0,
                                            color: "#333",
                                        }}
                                    >
                                        {item.name}
                                    </motion.p>

                                    <motion.span
                                        variants={{
                                            hover: { scaleX: 1 }
                                        }}
                                        initial={{ scaleX: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            bottom: -3,
                                            width: "100%",
                                            height: "3px",
                                            backgroundColor: "#ED0000",
                                            borderRadius: "4px",
                                            transformOrigin: "left",
                                        }}
                                    />
                                </Box>
                            </Link>
                        </Box>
                    ))}
                </Box>

                {/* RIGHT — Mobile Logo */}
                <Box sx={{ display: { xs: "block", lg: "none" } }}>
                    <Image
                        src="/Tlogo.png"
                        alt="Logo"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%" }}
                    />
                </Box>

                {/* Desktop Right Button */}
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                    <RedButton sx={{ px: 3, py: 1.2 }}>साइन इन</RedButton>
                </Box>

            </Toolbar>


            {/* MOBILE DRAWER MENU */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        width: 280,
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        sx={{ alignSelf: "flex-end" }}
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>

                    <List>
                        {navItems.map((item) => (
                            <ListItemButton
                                key={item.name}
                                component={Link}
                                href={item.path}
                                onClick={() => setOpen(false)}
                            >
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontSize: 18,
                                        fontWeight: 600,
                                    }}
                                />
                            </ListItemButton>
                        ))}
                    </List>

                    <RedButton sx={{ px: 4, py: 1.5 }}>साइन इन</RedButton>
                </Box>
            </Drawer>
        </AppBar>
    );
}
