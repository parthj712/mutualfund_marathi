"use client";

import UpperNavbar from "@/Componenets/UpperNavbar/UpperNavbar";
import NavigationBar from "@/Componenets/NavigationBar/NavigationBar";
import { useTheme, useMediaQuery } from "@mui/material";

export default function HeaderWrapper() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {/* Hide UpperNavbar on mobile */}
            {!isMobile && <UpperNavbar />}

            {/* Always show main navbar */}
            <NavigationBar />
        </>
    );
}
