import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const SIP_Is_Best_Option = () => {

      const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="SIP का सर्वोत्तम पर्याय?" />
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                    <InfoBox
                        heading="SIP – शिस्तबद्ध गुंतवणुकीचा मार्ग"
                        borderColor="#FACC15"     // yellow border
                        bgColor="#ECFEFF"         // light mint bg
                        headingColor="#0F766E"    // teal heading
                        subTextColor="#0F766E"
                        sx={{
                            px: { xs: 3, md: 6 },
                            py: { xs: 3, md: 4 },

                        }}
                        subText={
                            <ul
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "12px 28px",
                                    listStyleType: "disc",
                                    paddingLeft: "18px",
                                    margin: 0,
                                }}
                            >
                                <li>दरमहा ठराविक रक्कम</li>
                                <li>बाजाराच्या सर्व स्थितींमध्ये गुंतवणूक</li>
                                <li>जोखीम कमी होते</li>
                                <li>संपत्ती निर्माण होते</li>
                            </ul>
                        }
                    />
                </div>
            </Box>
        </div>
    )
}

export default SIP_Is_Best_Option