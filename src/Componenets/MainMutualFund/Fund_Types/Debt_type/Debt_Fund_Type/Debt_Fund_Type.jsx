import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox';
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Debt_Fund_Type = () => {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="Debt Fund चे प्रकार" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <InfoBox
                        heading="लिक्विड फंड (Liquid Fund)"
                        borderColor="#2563EB"
                        bgColor="#EFF6FF"
                        headingColor="#2563EB"
                        sx={{ textAlign: "center", alignItems: "center" }}
                    />
                    <InfoBox
                        heading="MIP"
                        borderColor="#ED3A70"
                        bgColor="#FFF1F5"
                        headingColor="#ED3A70"
                    />

                    <InfoBox
                        heading="कमी कालावधी (Low Duration)"
                        borderColor="#DC2626"
                        bgColor="#FEF2F2"
                        headingColor="#DC2626"
                    />

                    <InfoBox
                        heading="क्रेडिट रिस्क (Credit Risk)"
                        borderColor="#7C3AED"
                        bgColor="#F5F3FF"
                        headingColor="#7C3AED"
                    />
                    <InfoBox
                        heading="गिल्ट फंड (Gilt Fund)"
                        borderColor="#CA8A04"
                        bgColor="#FEFCE8"
                        headingColor="#CA8A04"
                    />
                    <InfoBox
                        heading="उत्पन्न निधी (Income Fund)"
                        borderColor="#EA580C"
                        bgColor="#FFF7ED"
                        headingColor="#EA580C"
                    />
                    <InfoBox
                        heading="अल्ट्रा शॉर्ट / शॉर्ट टर्म (Ultra Short / Short Term)"
                        borderColor="#16A34A"
                        bgColor="#ECFDF5"
                        headingColor="#16A34A"
                    />
                </div>
            </Box>
        </div>
    )
}

export default Debt_Fund_Type