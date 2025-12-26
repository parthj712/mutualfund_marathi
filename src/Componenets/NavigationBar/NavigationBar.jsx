"use client";

import React, { useMemo, useState } from "react";
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
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import RedButton from "../Common/RedButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";



export default function NavigationBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [fundMenuOpen, setFundMenuOpen] = useState(false);

    const [mobileFundOpen, setMobileFundOpen] = useState(false);

    const [mobileSubMenu, setMobileSubMenu] = useState(null);
    const router = useRouter();




    const [subMenu, setSubMenu] = useState({
        anchorEl: null,
        name: null,
    });




    const navItems = [
        { name: "मुख्यपृष्ठ", path: "/" },
        { name: "आमच्याबद्दल", path: "/about" },
        { name: "आर्थिक नियोजन", path: "/financial-planning" },
        { name: "म्युच्युअल फंड", path: "/funds" },
        // { name: "विमा", path: "/insurance" },g
        { name: "ब्लॉग्ज", path: "/blogs" },
        { name: "डाउनलोड", path: "/downloads" },
        { name: "संपर्क साधा", path: "/contact" },
    ];

    const mutualFundItems = useMemo(() => [
        {
            name: "म्युच्युअल फंड म्हणजे काय?",
            path: "/funds",
        },
        {
            name: "म्युच्युअल फंडाचे प्रकार",
            children: [
                { name: "समभाग आधारित", path: "/funds/fund-types/equity-type" },
                { name: "कर्ज रोखे", path: "/funds/fund-types/debt_type" },
            ],
        },
        {
            name: "शेअर बाजार",
            path: "/funds/shares",
        },
        {
            name: "सेवा व सुविधा",
            path: "/funds/our_funds_services",
        },
    ], []); // 👈 empty dependency = build once



    // const isMenuOpen = Boolean(anchorEl);
    const fundRef = React.useRef(null);

    let closeTimeout;

    const handleSubMenuEnter = (itemName, anchor) => {
        setSubMenu({
            name: itemName,
            anchorEl: anchor,
        });
    };


    const handleSubMenuLeave = () => {
        closeTimeout = setTimeout(() => {
            setSubMenu({ name: null, anchorEl: null });
        }, 150);
    };


    const handleSubMenuClose = () => {
        setSubMenu({ name: null, anchorEl: null });
    };



    return (
        <AppBar position="sticky" elevation={1} sx={{ backgroundColor: "white", color: "black", py: 1 }}>
            <Toolbar
                sx={{
                    maxWidth: "1400px",
                    width: "100%",
                    mx: "auto",
                    minHeight: 72,              // 🔥 taller navbar
                    px: { xs: 2, md: 4 },       // 🔥 breathing space
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

                    <Box
                        sx={{ display: { xs: "none", lg: "flex", cursor: "pointer" } }}
                        onClick={() => router.push("/")}
                    >
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
                                    onMouseEnter={() => setFundMenuOpen(true)}
                                    onMouseLeave={() => setFundMenuOpen(false)}
                                    sx={{ position: "relative" }}
                                >
                                    {/* TEXT + UNDERLINE */}
                                    <Box
                                        ref={fundRef}
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
                                                color: isActive ? "#2563eb" : "#111827",
                                                position: "relative",
                                                cursor: "pointer",

                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    left: 0,
                                                    bottom: -8,
                                                    width: "100%",
                                                    height: 3,
                                                    borderRadius: 2,
                                                    background: "linear-gradient(90deg,#2563eb,#22c55e)",
                                                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                                                    transformOrigin: "left",
                                                    transition: "transform 0.35s ease",
                                                },

                                                "&:hover::after": {
                                                    transform: "scaleX(1)", // 🔥 LEFT → RIGHT
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Typography>



                                        {/* <motion.span
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
                                        /> */}
                                    </Box>

                                    {/* DROPDOWN */}
                                    <Menu
                                        anchorEl={fundRef.current}
                                        open={fundMenuOpen}
                                        keepMounted
                                        PaperProps={{
                                            sx: {
                                                mt: 1,
                                                borderRadius: 2,
                                                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                                                minWidth: 240,
                                            },
                                        }}
                                        MenuListProps={{
                                            onMouseLeave: handleSubMenuClose,
                                        }}
                                    >



                                        {mutualFundItems.map((item) => {
                                            // ✅ HAS CHILDREN (second-level menu)
                                            if (item.children) {
                                                const isThisSubMenuOpen = subMenu.name === item.name;

                                                return (
                                                    <MenuItem
                                                        key={item.name}
                                                        onMouseEnter={(e) =>
                                                            handleSubMenuEnter(item.name, e.currentTarget)
                                                        }
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            minWidth: 220,
                                                        }}
                                                    >
                                                        {item.name}
                                                        <ExpandMoreIcon sx={{ transform: "rotate(-90deg)" }} />

                                                        <Menu
                                                            anchorEl={subMenu.anchorEl}
                                                            open={subMenu.name === item.name}
                                                            anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                                                            MenuListProps={{
                                                                onMouseLeave: handleSubMenuClose,
                                                            }}
                                                        >
                                                            {item.children.map((child) => (
                                                                <MenuItem
                                                                    key={child.name}
                                                                    component={Link}
                                                                    href={child.path}
                                                                    onClick={() => handleSubMenuClose()}
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
                                            color: isActive ? "#2563eb" : "#111827",
                                            position: "relative",
                                            cursor: "pointer",

                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                left: 0,
                                                bottom: -8,
                                                width: "100%",
                                                height: 3,
                                                borderRadius: 2,
                                                background: "linear-gradient(90deg,#2563eb,#22c55e)",
                                                transform: isActive ? "scaleX(1)" : "scaleX(0)",
                                                transformOrigin: "left",
                                                transition: "transform 0.35s ease",
                                            },

                                            "&:hover::after": {
                                                transform: "scaleX(1)", // 🔥 LEFT → RIGHT
                                            },
                                        }}
                                    >
                                        {item.name}
                                    </Typography>



                                    {/* <motion.span
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
                                    /> */}
                                </Box>
                            </Link>
                        );
                    })}
                </Box>

                {/* RIGHT — Mobile Logo / Desktop Button */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ display: { xs: "flex", lg: "none" } }} onClick={() => {
                        router.push("/");
                        setOpen(false); // close drawer
                    }}>
                        <Image src="/Tlogo.png" alt="Logo" width={40} height={40} />
                    </Box>

                    <Box sx={{ display: { xs: "none", lg: "block" } }}>
                        <RedButton sx={{ px: 4 }}>साइन इन</RedButton>
                    </Box>
                </Box>
            </Toolbar>

            {/* MOBILE DRAWER */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                ModalProps={{
                    keepMounted: true, // 🔥 HUGE improvement
                }}
            >


                <Box sx={{ width: 280, p: 3 }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>


                    {/* <Divider sx={{ mb: 2 }} /> */}


                    <List >
                        {/* NORMAL ITEMS BEFORE MUTUAL FUND */}
                        {navItems
                            .filter((item) => item.name !== "म्युच्युअल फंड")
                            .map((item) => (
                                <ListItemButton
                                    component={Link}
                                    href={item.path}
                                    onClick={() => setOpen(false)}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 0.5,
                                        backgroundColor: pathname === item.path ? "#eff6ff" : "transparent",
                                    }}
                                >
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{
                                            fontSize: 18,
                                            fontWeight: pathname === item.path ? 600 : 600,
                                            color: pathname === item.path ? "#2563eb" : "#111827",
                                        }}
                                    />
                                </ListItemButton>

                            ))}

                        {/* MUTUAL FUND DROPDOWN */}
                        {/* MUTUAL FUND DROPDOWN */}
                        <ListItemButton
                            onClick={() => setMobileFundOpen(!mobileFundOpen)}
                            sx={{
                                borderRadius: 2,
                                mb: 0.5,
                                backgroundColor: mobileFundOpen ? "#f8fafc" : "transparent",
                            }}
                        >
                            <ListItemText
                                primary="म्युच्युअल फंड"
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                }}
                            />
                            <ExpandMoreIcon
                                sx={{
                                    transform: mobileFundOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "0.3s",
                                }}
                            />
                        </ListItemButton>


                        <Collapse in={mobileFundOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                {mutualFundItems.map((item) => {
                                    // 🔹 ITEM WITH CHILDREN
                                    if (item.children) {
                                        const isOpen = mobileSubMenu === item.name;

                                        return (
                                            <Box key={item.name}>
                                                {/* PARENT */}
                                                <ListItemButton
                                                    onClick={() =>
                                                        setMobileSubMenu(isOpen ? null : item.name)
                                                    }
                                                    sx={{
                                                        pl: 4,
                                                        borderRadius: 2,
                                                        backgroundColor: isOpen ? "#f8fafc" : "transparent",
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={item.name}
                                                        primaryTypographyProps={{
                                                            fontSize: 16,
                                                            fontWeight: 600,
                                                        }}
                                                    />
                                                    <ExpandMoreIcon
                                                        sx={{
                                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                                            transition: "0.3s",
                                                        }}
                                                    />
                                                </ListItemButton>

                                                {/* CHILD ITEMS */}
                                                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                                                    <List component="div" disablePadding>
                                                        {item.children.map((child) => (
                                                            <ListItemButton
                                                                key={child.name}
                                                                component={Link}
                                                                href={child.path}
                                                                sx={{
                                                                    pl: 6,
                                                                    borderLeft: "3px solid",
                                                                    borderColor:
                                                                        pathname === child.path
                                                                            ? "#2563eb"
                                                                            : "transparent",
                                                                    backgroundColor:
                                                                        pathname === child.path
                                                                            ? "#eff6ff"
                                                                            : "transparent",
                                                                }}
                                                                onClick={() => {
                                                                    setOpen(false);
                                                                    setMobileFundOpen(false);
                                                                    setMobileSubMenu(null);
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={child.name}
                                                                    primaryTypographyProps={{
                                                                        fontSize: 15,
                                                                        fontWeight:
                                                                            pathname === child.path ? 600 : 500,
                                                                        color:
                                                                            pathname === child.path
                                                                                ? "#2563eb"
                                                                                : "#374151",
                                                                    }}
                                                                />
                                                            </ListItemButton>
                                                        ))}
                                                    </List>
                                                </Collapse>
                                            </Box>
                                        );
                                    }

                                    // 🔹 NORMAL ITEM (NO CHILDREN)
                                    return (
                                        <ListItemButton
                                            key={item.name}
                                            component={Link}
                                            href={item.path}
                                            sx={{ pl: 4 }}
                                            onClick={() => {
                                                setOpen(false);
                                                setMobileFundOpen(false);
                                            }}
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



                        {/* SUB ITEMS */}
                        <Collapse in={mobileFundOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                {mutualFundItems.map((item) => {
                                    if (item.children) {
                                        // nested dropdown (types / share bazar)
                                    } else {
                                        // single link (what is MF, services)
                                    }
                                })}
                            </List>
                        </Collapse>
                    </List>


                    <Box sx={{ display: { xs: "none", lg: "block" }, ml: 4 }}>
                        <RedButton fullWidth sx={{ mt: 3, py: 1.2 }}>
                            साइन इन
                        </RedButton>
                    </Box>

                </Box>
            </Drawer>
        </AppBar>
    );
}
