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
    Typography,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import RedButton from "../Common/RedButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";


export default function NavigationBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileFundOpen, setMobileFundOpen] = useState(false);


    const [subMenu, setSubMenu] = useState({
        anchorEl: null,
        name: null,
    });




    const navItems = [
        { name: "मुख्यपृष्ठ", path: "/" },
        { name: "आमच्याबद्दल", path: "/about" },
        { name: "आमच्या सेवा", path: "/services" },
        { name: "म्युच्युअल फंड", path: "/funds" },
        { name: "विमा", path: "/insurance" },
        { name: "ब्लॉग्ज", path: "/blogs" },
        { name: "डाउनलोड", path: "/downloads" },
        { name: "संपर्क साधा", path: "/contact" },
    ];

    const mutualFundItems = [
        {
            name: "म्युच्युअल फंड म्हणजे काय?",
            path: "/funds",
        },
        {
            name: "म्युच्युअल फंडाचे प्रकार",
            children: [
                { name: "समभाग आधारित", path: "/funds/fund-types/equity-type" },
                { name: "कर्ज रोखे", path: "/funds/fund-types/debt_type" },
                { name: "भांडवली बाजार", path: "/funds/fund-types/capital_markets_type" },
            ],
        },
        {
            name: "शेअर बाजार",
            children: [
                { name: "भांडवली बाजार", path: "/funds/shares/capital_markets" },
                { name: "फ्युचर्स आणि ऑप्शन्स", path: "/funds/shares/f&o" },
            ],
        },
         {
            name: "सेवा व सुविधा",
            path: "/funds/our_funds_services",
        },
    ];



    const isMenuOpen = Boolean(anchorEl);

    return (
        <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "white", color: "black", py: 1 }}>
            <Toolbar
                sx={{
                    maxWidth: "1400px",
                    width: "100%",
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "space-between", lg: "flex-start" },
                }}
            >
                {/* LEFT — Mobile Menu / Desktop Logo */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton sx={{ display: { xs: "flex", lg: "none" } }} onClick={() => setOpen(true)}>
                        <MenuIcon fontSize="large" />
                    </IconButton>

                    <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                        <Image src="/MainLogo.png" alt="Logo" width={120} height={60} />
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
                        // MUTUAL FUND WITH DROPDOWN
                        if (item.name === "म्युच्युअल फंड") {
                            const isActive = pathname.startsWith("/funds");

                            return (
                                <Box
                                    key={item.name}
                                    onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                                    onMouseLeave={() => setAnchorEl(null)}
                                    sx={{ position: "relative" }}
                                >
                                    {/* TEXT + UNDERLINE */}
                                    <Box
                                        component={motion.div}
                                        initial="rest"
                                        animate={isActive ? "active" : "rest"}
                                        whileHover="hover"
                                        sx={{ position: "relative", cursor: "pointer" }}
                                    >
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

                                        <motion.span
                                            variants={{
                                                rest: { scaleX: 0 },
                                                hover: { scaleX: 1 },
                                                active: { scaleX: 1 },
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

                                    {/* DROPDOWN */}
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={isMenuOpen}
                                        onClose={() => {
                                            setAnchorEl(null);
                                            setSubAnchorEl(null);
                                        }}
                                        MenuListProps={{
                                            onMouseLeave: () => {
                                                setAnchorEl(null);
                                                setSubAnchorEl(null);
                                            },
                                        }}
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                    >
                                        {mutualFundItems.map((item) => {
                                            // ✅ HAS CHILDREN (second-level menu)
                                            if (item.children) {
                                                const isThisSubMenuOpen = subMenu.name === item.name;

                                                return (
                                                    <MenuItem
                                                        key={item.name}
                                                        onMouseEnter={(e) =>
                                                            setSubMenu({
                                                                anchorEl: e.currentTarget,
                                                                name: item.name,
                                                            })
                                                        }
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            minWidth: 220,
                                                        }}
                                                    >
                                                        {item.name}
                                                        <ExpandMoreIcon sx={{ transform: "rotate(-90deg)" }} />

                                                        {/* ✅ SECOND LEVEL MENU – opens ONLY for this item */}
                                                        <Menu
                                                            anchorEl={subMenu.anchorEl}
                                                            open={isThisSubMenuOpen}
                                                            onClose={() => setSubMenu({ anchorEl: null, name: null })}
                                                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                                                            MenuListProps={{
                                                                onMouseLeave: () =>
                                                                    setSubMenu({ anchorEl: null, name: null }),
                                                            }}
                                                        >
                                                            {item.children.map((child) => (
                                                                <MenuItem
                                                                    key={child.name}
                                                                    component={Link}
                                                                    href={child.path}
                                                                    onClick={() => {
                                                                        setAnchorEl(null);
                                                                        setSubMenu({ anchorEl: null, name: null });
                                                                    }}
                                                                >
                                                                    {child.name}
                                                                </MenuItem>
                                                            ))}
                                                        </Menu>
                                                    </MenuItem>
                                                );
                                            }


                                            // ✅ NORMAL ITEM
                                            return (
                                                <MenuItem
                                                    key={item.name}
                                                    component={Link}
                                                    href={item.path}
                                                    onClick={() => setAnchorEl(null)}
                                                >
                                                    {item.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Menu>

                                </Box>
                            );
                        }

                        // NORMAL NAV ITEMS
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
                                    <Typography
                                        fontSize={18}
                                        fontWeight={600}
                                        sx={{
                                            color: isActive ? "#4f46e5" : "#333",
                                        }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <motion.span
                                        variants={{
                                            rest: { scaleX: 0 },
                                            hover: { scaleX: 1 },
                                            active: { scaleX: 1 },
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

                {/* RIGHT — Mobile Logo / Desktop Button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <Image src="/Tlogo.png" alt="Logo" width={40} height={40} />
                    </Box>

                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                        <RedButton>साइन इन</RedButton>
                    </Box>
                </Box>
            </Toolbar>

            {/* MOBILE DRAWER */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 280, p: 3 }}>
                    <IconButton sx={{ float: "right" }} onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>

                    <List sx={{ mt: 6 }}>
                        {/* NORMAL ITEMS BEFORE MUTUAL FUND */}
                        {navItems
                            .filter((item) => item.name !== "म्युच्युअल फंड")
                            .map((item) => (
                                <ListItemButton
                                    key={item.name}
                                    component={Link}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{ fontSize: 18, fontWeight: 600 }}
                                    />
                                </ListItemButton>
                            ))}

                        {/* MUTUAL FUND DROPDOWN */}
                        <ListItemButton
                            onClick={() => setMobileFundOpen(!mobileFundOpen)}
                            sx={{
                                borderRadius: 2,
                                "&:hover": { backgroundColor: "#E6EAFF" },
                            }}
                        >
                            <ListItemText
                                primary="म्युच्युअल फंड"
                                primaryTypographyProps={{ fontSize: 18, fontWeight: 600 }}
                            />

                            <ExpandMoreIcon
                                sx={{
                                    transform: mobileFundOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </ListItemButton>

                        {/* SUB ITEMS */}
                        <Collapse in={mobileFundOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {mutualFundItems.map((item) => {
                                    // If has children → show parent only (or later add nested collapse)
                                    if (item.children) {
                                        return (
                                            <ListItemButton key={item.name} sx={{ pl: 4 }}>
                                                <ListItemText
                                                    primary={item.name}
                                                    primaryTypographyProps={{ fontSize: 16, fontWeight: 600 }}
                                                />
                                            </ListItemButton>
                                        );
                                    }

                                    // Normal link
                                    return (
                                        <ListItemButton
                                            key={item.name}
                                            component={Link}
                                            href={item.path}
                                            sx={{ pl: 4 }}
                                        >
                                            <ListItemText
                                                primary={item.name}
                                                primaryTypographyProps={{ fontSize: 16 }}
                                            />
                                        </ListItemButton>
                                    );
                                })}

                            </List>
                        </Collapse>
                    </List>


                    <RedButton fullWidth sx={{ mt: 3 }}>
                        साइन इन
                    </RedButton>
                          </Box>
            </Drawer>
        </AppBar>
    );
}
