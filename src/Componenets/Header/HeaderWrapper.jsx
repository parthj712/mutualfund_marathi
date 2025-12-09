"use client";

import UpperNavbar from "@/Componenets/UpperNavbar/UpperNavbar";
import NavigationBar from "@/Componenets/NavigationBar/NavigationBar";
import { useTheme, useMediaQuery } from "@mui/material";

export default function HeaderWrapper() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            {/* Hide UpperNavbar on mobile */}
            {isDesktop && <UpperNavbar />}


            {/* Always show main navbar */}
            <NavigationBar />
        </>
    );
}
