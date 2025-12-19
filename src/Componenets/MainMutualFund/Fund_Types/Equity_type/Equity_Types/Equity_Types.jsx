import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Equity_Types = () => {

      const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="Equity Fund चे प्रकार" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <InfoBox
                        heading="लार्ज कॅप फंड (Large Cap)"
                        borderColor="#2563EB"
                        bgColor="#EFF6FF"
                        headingColor="#2563EB"
                        sx={{ textAlign: "center", alignItems: "center" }}
                    />
                    <InfoBox
                        heading="मिड कॅप फंड(Mid Cap)"
                        borderColor="#16A34A"
                        bgColor="#ECFDF5"
                        headingColor="#16A34A"
                    />
                    <InfoBox
                        heading="स्मॉल कॅप फंड Small Cap"
                        borderColor="#DC2626"
                        bgColor="#FEF2F2"
                        headingColor="#DC2626"
                    />

                    <InfoBox
                        heading="मल्टी कॅप फंड Multi Cap"
                        borderColor="#7C3AED"
                        bgColor="#F5F3FF"
                        headingColor="#7C3AED"
                    />
                    <InfoBox
                        heading="संतुलित / संकरित फंड Balanced / Hybrid"
                        borderColor="#CA8A04"
                        bgColor="#FEFCE8"
                        headingColor="#CA8A04"
                    />
                    <InfoBox
                        heading="ELSS (कर बचत)"
                        borderColor="#EA580C"
                        bgColor="#FFF7ED"
                        headingColor="#EA580C"
                    />
                </div>
            </Box>
        </div>
    )
}

export default Equity_Types