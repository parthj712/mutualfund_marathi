"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function WealthCreationPlanResult({
    targetedAmount = 0,
    futureValue = 0,
    monthlySip = 0,
    years = 0,
    assumedReturn = 0,
    riskProfile = "",
}) {


    const RISK_INDEX_MAP = {
        "Conservative": 0,
        "Moderately Conservative": 1,
        "Moderate": 2,
        "Moderately Aggressive": 3,
        "Aggressive": 4,
    };



    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <>
            <Box px={isMobile ? 4 : isTablet ? 6 : 10}
                py={isMobile ? 4 : isTablet ? 6 : 10} className="w-full bg-white py-12 px-4">
                <Box className="max-w-8xl">

                    {/* HEADING */}
                    <Typography
                        fontSize={22}
                        fontWeight={600}
                        textAlign="center"
                    >
                        Your Dream Home Savings Plan
                    </Typography>


                    <Box mt={6} display={"flex"} flexDirection={"column"} gap={6}>
                        {/* TOP BIG CARD */}
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                            p={4}
                            className="
                        bg-[#F2F0EF]
                        rounded-2xl
                        py-6
                        px-4
                        text-center
                        shadow-sm
                    "
                        >
                            <Typography fontSize={26} fontWeight={700}>
                                ₹{futureValue.toLocaleString("en-IN")}
                            </Typography>
                            <Typography fontSize={13} className="text-gray-500 text-center mt-2">
                                Assumed return: {assumedReturn}% ({riskProfile} profile)
                            </Typography>


                            <Box>
                                <Typography fontSize={20} className="text-gray-600">
                                    Future value of your Dream Home
                                </Typography>
                                <Typography fontSize={18} className="text-gray-500">
                                    (adjusting for 5% inflation)
                                </Typography>
                            </Box>
                        </Box>

                        {/* BOTTOM CARDS */}
                        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

                            {/* LEFT CARD */}
                            <Box display={"flex"} flexDirection={"column"} p={2.5} gap={1} alignItems={"center"} justifyContent={"center"} className="bg-[#F2F0EF] rounded-2xl p-6 text-center shadow-sm">
                                <Typography fontSize={20} className="text-gray-600">
                                    Your Targeted Amount
                                </Typography>
                                <Typography fontSize={24} fontWeight={700}>
                                    Rs.20,00,000
                                </Typography>
                                <Typography fontSize={18} className="text-gray-500">
                                    (in today’s value)
                                </Typography>
                            </Box>

                            {/* CENTER HIGHLIGHT CARD */}
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} p={2.5} gap={1}
                                border={1}
                                borderColor={"#654EA3"}
                                className="
                            bg-[#E2D8FF]
                            rounded-2xl
                            p-6
                            text-center
                            shadow-2xl
                            border
                            
                        "
                            >
                                <Typography fontSize={20} fontWeight={600} className="text-[#654EA3]">
                                    Monthly SIP required
                                </Typography>
                                <Typography fontSize={26} fontWeight={700}>
                                    ₹{monthlySip.toLocaleString("en-IN")}
                                </Typography>

                            </Box>

                            {/* RIGHT CARD */}
                            <Box display={"flex"} flexDirection={"column"} p={2.5} gap={1} alignItems={"center"} justifyContent={"center"} className="bg-[#F2F0EF] rounded-2xl p-6 text-center shadow-sm">
                                <Typography fontSize={20} className="text-gray-600">
                                    Number of Years You Need To Save
                                </Typography>
                                <Typography fontSize={20} fontWeight={700}>
                                    {years} Years
                                </Typography>

                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>


        </>
    );
}
