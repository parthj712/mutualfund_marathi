"use client";

import React from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material';

import LeftSelection from './LeftSelection/LeftSelection';
import RightDetails from './RightDetails/RightDetails';
import { INVESTOR_DATA } from './investor_data';
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';


const ModelAssentAllocation = () => {

    const [selected, setSelected] = React.useState("conservative");

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            <Box px={isMobile ? 3 : 10} py={isMobile ? 10 : 10} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={8}>
                <GradientHeading text={"मॉडेल मालमत्ता वाटप"} />
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
                    <LeftSelection selected={selected} onSelect={setSelected} />
                    <RightDetails data={INVESTOR_DATA[selected]} />
                </Box>
            </Box>
        </div>
    )
}

export default ModelAssentAllocation