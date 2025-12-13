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
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";



export default function NavigationBar() {

    const pathname = usePathname();


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
                    justifyContent: {
                        xs: "space-between", // ✅ mobile & tablet
                        lg: "flex-start",    // ✅ desktop
                    },
                }}
            >

                {/* LEFT — Mobile Menu | Desktop Logo */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        order: { xs: 1, lg: 0 },
                        gap: 1,
                        minWidth: 48, // prevents layout shift
                    }}
                >
                    {/* MOBILE MENU ICON */}
                    <AnimatePresence mode="wait">
                        {!open && (
                            <motion.div
                                key="menu-icon"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <IconButton
                                    sx={{ display: { xs: "flex", lg: "none" } }}
                                    onClick={() => setOpen(true)}
                                >
                                    <MenuIcon fontSize="large" />
                                </IconButton>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* DESKTOP LOGO */}
                    <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                        <Image
                            src="/Logo.jpeg"
                            alt="Logo"
                            width={120}
                            height={150}
                            style={{ borderRadius: "10%" }}
                        />
                    </Box>
                </Box>



                {/* CENTER — Desktop Navigation */}
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "none", lg: "flex" },
                        justifyContent: "center",
                        gap: 5,
                    }}
                >
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;

                        return (
                            <Link key={item.name} href={item.path} style={{ textDecoration: "none" }}>
                                <Box
                                    component={motion.div}
                                    initial="rest"
                                    animate={isActive ? "active" : "rest"}
                                    whileHover="hover"
                                    sx={{ position: "relative", cursor: "pointer" }}
                                >
                                    {/* TEXT */}
                                    <Typography
                                        fontSize={18}
                                        fontWeight={600}
                                        sx={{
                                            color: isActive ? "#4f46e5" : "#333",
                                            transition: "color 0.3s ease",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>

                                    {/* UNDERLINE */}
                                    <motion.span
                                        variants={{
                                            rest: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                            // active: { scaleX: 1 },
                                        }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        style={{
                                            position: "absolute",
                                            left: 0,
                                            bottom: -6,
                                            width: "100%",
                                            height: "3px",
                                            backgroundColor: "#ED0000",
                                            borderRadius: "4px",
                                            transformOrigin: "left",
                                        }}
                                    />
                                </Box>
                            </Link>
                        );
                    })}


                </Box>

                {/* RIGHT — Mobile Logo | Desktop Button */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        order: { xs: 2, lg: 1 }, // ⭐ logo on right in mobile
                    }}
                >
                    {/* Mobile Logo */}
                    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <Image
                            src="/Tlogo.png"
                            alt="Logo"
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%" }}
                        />
                    </Box>

                    {/* Desktop Button */}
                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                        <RedButton sx={{ px: 3, py: 1.2 }}>साइन इन</RedButton>
                    </Box>
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
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <ListItemButton
                                    key={item.name}
                                    component={Link}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                    sx={{
                                        backgroundColor: isActive ? "#E6EAFF" : "transparent",
                                        borderRadius: 2,
                                        "&:hover": {
                                            backgroundColor: "#E6EAFF",
                                        },
                                    }}
                                >
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{
                                            fontSize: 18,
                                            fontWeight: 600,
                                            color: isActive ? "#1C76A9" : "#333",
                                        }}
                                    />
                                </ListItemButton>
                            );
                        })}

                    </List>

                    <RedButton sx={{ px: 4, py: 1.5 }}>साइन इन</RedButton>
                </Box>
            </Drawer>
        </AppBar>
    );
}
