"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import React from 'react'
import HistoryStepper from './HistoryStepper/HistoryStepper'
import { Box, useMediaQuery, useTheme } from '@mui/material'

const History = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10}>
                <GradientHeading text="इतिहास एका दृष्टीक्षेपात" />
                <HistoryStepper />
            </Box>
        </div>
    )
}

export default History