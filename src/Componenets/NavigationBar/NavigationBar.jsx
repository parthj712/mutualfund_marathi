"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
} from "lucide-react"; // optional icons
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import RedButton from "../Common/RedButton";
import { HiExternalLink } from "react-icons/hi";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function NavigationBar() {
    const pathname = usePathname();
    const router = useRouter();


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [fundMenuOpen, setFundMenuOpen] = useState(false);
    const [subMenu, setSubMenu] = useState(null);
    const [mobileFundOpen, setMobileFundOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState(null);

    const fundRef = useRef(null);

    const navItems = [
        { name: "मुख्यपृष्ठ", path: "/" },
        { name: "आमच्याबद्दल", path: "/about" },
        { name: "आर्थिक नियोजन", path: "/financial-planning" },
        { name: "कॅल्क्युलेटर", path: "/calculator" },
        { name: "म्युच्युअल फंड", path: "/funds" },
        // { name: "ब्लॉग्ज", path: "/blogs" },
        { name: "डाउनलोड", path: "/downloads" },
        { name: "संपर्क साधा", path: "/contact" },
    ];

    const mutualFundItems = useMemo(
        () => [
            { name: "म्युच्युअल फंड म्हणजे काय?", path: "/funds" },
            {
                name: "म्युच्युअल फंडाचे प्रकार",
                children: [
                    { name: "समभाग आधारित", path: "/funds/fund-types/equity-type" },
                    { name: "कर्ज रोखे", path: "/funds/fund-types/debt_type" },
                ],
            },
            { name: "शेअर बाजार", path: "/funds/shares" },
            { name: "सेवा व सुविधा", path: "/funds/our_funds_services" },
        ],
        []
    );

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="sticky top-0 z-50 bg-white border-b">
                <Box className="max-w-8xl" px={4} py={isMobile ? 3 : 2} display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={isMobile ? "space-between" : "space-evenly"}>

                    {/* LEFT */}
                    <div className="flex items-center gap-2">
                        <AnimatePresence>
                            {!drawerOpen && (
                                <motion.button
                                    key="menu-icon"
                                    className="lg:hidden"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                    }}
                                    onClick={() => setDrawerOpen(true)}
                                >
                                    <HiMenuAlt2 size={28} />
                                </motion.button>
                            )}
                        </AnimatePresence>


                        <div
                            className="hidden lg:block cursor-pointer"
                            onClick={() => router.push("/")}
                        >
                            <Image src="/MainLogo.png" alt="Logo" width={120} height={60} />
                        </div>
                    </div>


                    {/* CENTER (DESKTOP) */}
                    <div className="hidden lg:flex gap-8 items-center">
                        {navItems.map((item) => {
                            if (item.name === "म्युच्युअल फंड") {
                                const isActive = pathname.startsWith("/funds");

                                return (
                                    <div
                                        key={item.name}
                                        ref={fundRef}
                                        onMouseEnter={() => setFundMenuOpen(true)}
                                        onMouseLeave={() => {
                                            setFundMenuOpen(false);
                                            setSubMenu(null);
                                        }}
                                        className="relative"
                                    >
                                        <span
                                            className={`cursor-pointer font-semibold ${isActive ? "text-blue-600" : ""
                                                }`}
                                        >
                                            {item.name}
                                        </span>

                                        {/* FIRST LEVEL */}
                                        {fundMenuOpen && (
                                            <Box
                                                px={2}
                                                py={2}
                                                borderRadius={2}
                                                className="absolute top-full mt-3 bg-white shadow rounded min-w-[280px]"
                                            >
                                                <Box display={"flex"} flexDirection={"column"} gap={1} >
                                                    {mutualFundItems.map((mf) => {
                                                        if (mf.children) {
                                                            return (
                                                                <motion.div
                                                                    key={mf.name}
                                                                    onMouseEnter={() => setSubMenu(mf.name)}
                                                                    initial={{ opacity: 0, x: -6 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="relative px-4 py-3 cursor-pointer flex items-center justify-between rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <span className="text-[15px] font-medium">{mf.name}</span>
                                                                    <ChevronDown className="-rotate-90 w-4 h-4" />

                                                                    {/* SECOND LEVEL */}
                                                                    {subMenu === mf.name && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, x: -6 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ duration: 0.2 }}
                                                                            className="absolute left-full top-0 ml-3 bg-white shadow rounded-lg min-w-[220px] p-2"
                                                                        >
                                                                            <Box p={2} display={"flex"} flexDirection={"column"} gap={1} className="flex flex-col gap-1">
                                                                                {mf.children.map((child) => (
                                                                                    <motion.div
                                                                                        key={child.name}
                                                                                        whileHover={{ x: 4 }}
                                                                                        className="rounded-md"
                                                                                    >
                                                                                        
                                                                                        <Link
                                                                                            href={child.path}
                                                                                            className="block px-4 py-2.5 text-[15px] font-medium hover:bg-gray-50"
                                                                                        >
                                                                                            {child.name}
                                                                                        </Link>
                                                                                    </motion.div>
                                                                                ))}
                                                                            </Box>
                                                                        </motion.div>
                                                                    )}
                                                                </motion.div>

                                                            );
                                                        }

                                                        return (
                                                            <Link

                                                                key={mf.name}
                                                                href={mf.path}
                                                                className="block px-4 py-2 hover:bg-gray-100"
                                                            >
                                                                {mf.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </Box>
                                            </Box>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <Link href={item.path} className="relative group">
                                    <span
                                        className={`
      font-semibold transition-colors duration-300
      ${pathname === item.path ? "text-blue-600" : "text-gray-900"}
      group-hover:text-blue-600 text-[17px]
    `}
                                    >
                                        {item.name}
                                    </span>

                                    <span
                                        className={`
      absolute left-0 -bottom-2 h-[3px] w-full rounded
      bg-gradient-to-r from-blue-600 to-green-500
      transform transition-transform duration-300 origin-left
      ${pathname === item.path ? "scale-x-100" : "scale-x-0"}
      group-hover:scale-x-100
    `}
                                    />
                                </Link>

                            );
                        })}
                    </div>

                    {/* RIGHT */}
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={4} >
                        <div className="lg:hidden">
                            <Image src="/ShriThaku.jpeg" alt="Logo" width={90} height={50} />
                        </div>

                        <Box display={isMobile ? "none" : "block"}>
                            <RedButton fullWidth sx={{ py: 1.2 }} onClick={() => { window.open("https://shrithakur.themfbox.com/", "_blank"); setOpen(false); }} > साइन इन </RedButton>
                        </Box>
                    </Box>
                </Box>
            </nav>

            {/* ================= MOBILE DRAWER ================= */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />

                        {/* DRAWER */}
                        <motion.div
                            className="fixed top-0 right-0 z-50 h-full w-[300px] bg-white"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                        >
                            <Box px={4} py={2} className="h-full flex flex-col">

                                {/* CLOSE + EXTERNAL ICON */}
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    my={3}
                                >
                                    <button onClick={() => setDrawerOpen(false)}>
                                        <IoClose size={28} />
                                    </button>

                                    <RedButton
                                        onClick={() =>
                                            window.open("https://shrithakur.themfbox.com/", "_blank")
                                        }
                                        sx={{ px: 0.5, py: 1 }}
                                    >
                                        <HiExternalLink size={28} />
                                    </RedButton>
                                </Box>

                                {/* MENU LIST */}
                                <div className="flex flex-col gap-5 grow my-3">
                                    {navItems
                                        .filter((i) => i.name !== "म्युच्युअल फंड")
                                        .map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.path}
                                                onClick={() => setDrawerOpen(false)}
                                                className={`text-[16px] font-semibold ${pathname === item.path ? "text-blue-600" : ""
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}

                                    {/* MUTUAL FUND */}
                                    <button
                                        onClick={() => setMobileFundOpen(!mobileFundOpen)}
                                        className="flex justify-between items-center"
                                    >
                                        <p className="text-[17px] font-semibold">म्युच्युअल फंड</p>
                                        <ChevronDown
                                            className={`transition ${mobileFundOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {mobileFundOpen && (
                                        <div className="pl-4 flex flex-col gap-2">
                                            {mutualFundItems.map((mf) => {
                                                if (mf.children) {
                                                    const open = mobileSubMenu === mf.name;

                                                    return (
                                                        <div key={mf.name}>
                                                            <button
                                                                onClick={() =>
                                                                    setMobileSubMenu(open ? null : mf.name)
                                                                }
                                                                className="flex justify-between w-full text-[14px] font-semibold"
                                                            >
                                                                {mf.name}
                                                                <ChevronDown
                                                                    className={`transition ${open ? "rotate-180" : ""
                                                                        }`}
                                                                />
                                                            </button>

                                                            <AnimatePresence>
                                                                {open && (
                                                                    <motion.div
                                                                        initial={{ height: 0, opacity: 0 }}
                                                                        animate={{ height: "auto", opacity: 1 }}
                                                                        exit={{ height: 0, opacity: 0 }}
                                                                        transition={{ duration: 0.25 }}
                                                                        className="pl-4 flex flex-col gap-1 mt-2 overflow-hidden"
                                                                    >
                                                                        {mf.children.map((child) => (
                                                                            <Link
                                                                                key={child.name}
                                                                                href={child.path}
                                                                                onClick={() => {
                                                                                    setDrawerOpen(false);
                                                                                    setMobileFundOpen(false);
                                                                                    setMobileSubMenu(null);
                                                                                }}
                                                                                className="text-[14px] font-semibold"
                                                                            >
                                                                                {child.name}
                                                                            </Link>
                                                                        ))}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    );
                                                }

                                                return (
                                                    <Link
                                                        key={mf.name}
                                                        href={mf.path}
                                                        onClick={() => setDrawerOpen(false)}
                                                        className="text-[15px] font-semibold"
                                                    >
                                                        {mf.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </Box>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </>
    );
}
