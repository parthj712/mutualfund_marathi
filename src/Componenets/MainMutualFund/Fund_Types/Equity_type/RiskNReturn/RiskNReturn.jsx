"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import { HiExclamationTriangle } from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";
import React from 'react'

const RiskNReturn = () => {

      const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="जोखीम आणि परतावा (Risk vs Return)" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoBox
                        icon={<HiExclamationTriangle color="#FACC15" />}
                        heading="जोखीम"
                        subText={`बाजार चढ-उतार होतो
                    गुंतवणुकीचे मूल्य रोज बदलते`}
                        borderColor="#FCA5A5"
                        bgColor="#FEE2E2"
                        headingColor="#991B1B"
                        subTextColor="#7F1D1D"
                    />


                    <InfoBox
                        icon={<HiTrendingUp color="red" />}
                        heading="जोखीम"
                        subText={`बाजार चढ-उतार होतो
                    गुंतवणुकीचे मूल्य रोज बदलते`}
                        borderColor="#16A34A"
                        bgColor="#DAFFE5"
                        headingColor="#14532D"
                        subTextColor="#166534"
                    />
                </div>
            </Box>
        </div>
    )
}

export default RiskNReturn