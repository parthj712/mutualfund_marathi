"use client";

import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import DonutChart from './Graph/DonutChart';
import RedButton from '@/Componenets/Common/RedButton';

const RightDetails = ({ data }) => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (

        <Box
            display={"flex"}
            flexDirection={isMobile || isTablet ? "column" : "row"}
            alignItems={"center"}
            gap={2}
            // m={isMobile ? 2 : 4}
        >
            <Box
                boxShadow={2}
                display={"flex"}
                flexDirection={"column"}
                p={4}
                className="bg-white rounded-2xl p-6"

            >
                <Typography fontSize={22} fontWeight={600}>
                    {data.title}
                </Typography>

                <Typography fontSize={isMobile ? 16 : 18} my={1.5} color="text.secondary">
                    {data.description}
                </Typography>

                {/* Donut / Chart Placeholder */}
                <Box mt={2}>
                    {data.allocation.map((item) => (
                        <>
                            <Box key={item.label} display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-between">
                                <Typography fontSize={17}>{item.label}</Typography>
                                <Typography fontWeight={600} fontSize={17}>{item.value}%</Typography>
                            </Box>

                            <Divider sx={{ my: 1 }} />
                        </>
                    ))}
                </Box>


            </Box>

            <Box
                boxShadow={2}
                display={"flex"}
                flexDirection={"column"}
                p={4}
                gap={isMobile ? 4 : 0} 
                className="bg-white rounded-2xl"
            >
                <Typography fontSize={isMobile ? 18 : 22} fontWeight={600} mb={2}>
                    ग्राफिकल प्रेझेंटेशन
                </Typography>

                <Box sx={{ width: "100%" }}>
                    <DonutChart data={data.allocation} />
                </Box>

                <RedButton
                    bg={"#FF1F1F"}
                    sx={{ px: 3, py: 1.5, fontSize: 16 }}
                    onClick={() => window.open(data.link, "_blank")}
                >
                    अधिक एक्सप्लोर करा
                </RedButton>

            </Box>

        </Box>

    )
}

export default RightDetails