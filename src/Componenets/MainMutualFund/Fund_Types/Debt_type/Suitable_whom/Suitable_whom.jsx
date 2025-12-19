import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Suitable_whom = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="जोखीम आणि परतावा" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <InfoBox
                        icon={<span style={{ fontSize: 22 }}>🧑‍🦳</span>}
                        heading="कमी जोखीम हवी असेल"
                        borderColor="#4ADE80"
                        bgColor="#ECFDF5"
                        headingColor="#166534"
                    />

                    <InfoBox
                        icon={<span style={{ fontSize: 22 }}>🏦</span>}
                        heading="बँक ठेवींना पर्याय हवा असेल"
                        borderColor="#60A5FA"
                        bgColor="#EFF6FF"
                        headingColor="#1D4ED8"
                    />

                    <InfoBox
                        icon={<span style={{ fontSize: 22 }}>⏳</span>}
                        heading="ठराविक कालावधीसाठी गुंतवणूक"
                        borderColor="#FBBF24"
                        bgColor="#FFFBEB"
                        headingColor="#92400E"
                    />

                </div>
            </Box>
        </div>
    )
}

export default Suitable_whom