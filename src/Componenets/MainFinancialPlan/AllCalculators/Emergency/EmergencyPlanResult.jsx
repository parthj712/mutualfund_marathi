"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function EmergencyPlanResult({
    targetedAmount = 0,
    futureValue = 0,
    years = 0,
    monthlySip = 0,
    inflationRate = 0,
}) {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <>
            {/* MAIN RESULT SECTION */}
            <Box
                px={isMobile ? 4 : isTablet ? 6 : 10}
                py={isMobile ? 4 : isTablet ? 6 : 10}
                className="w-full bg-white"
            >
                <Box className="max-w-8xl mx-auto">

                    {/* HEADING */}
                    <Typography
                        fontSize={24}
                        fontWeight={600}
                        textAlign="center"
                    >
                        Your Emergency Fund Plan
                    </Typography>

                    {/* SUMMARY CARDS */}
                    <Box mt={6} display={"flex"} flexDirection={"column"} gap={6}>

                        {/* FUTURE VALUE */}
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
                            <Typography fontSize={20} className="text-gray-500 mt-1">
                                Future value of your Emergency
                            </Typography>
                            <Typography fontSize={18} className="text-gray-800">
                                (adjusting for {inflationRate}% inflation)
                            </Typography>
                        </Box>


                        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {/* TARGETED AMOUNT */}
                            <Box display={"flex"} flexDirection={"column"} p={2.5} gap={1} alignItems={"center"} justifyContent={"center"} className="bg-[#F2F0EF] rounded-2xl p-6 text-center shadow-sm">
                                <Typography fontSize={26} fontWeight={700}>
                                    ₹{targetedAmount.toLocaleString("en-IN")}
                                </Typography>
                                <Typography fontSize={20} className="text-gray-500 mt-1">
                                    Your Targeted Amount
                                </Typography>
                                <Typography fontSize={13} className="text-gray-400">
                                    (in today’s value)
                                </Typography>
                            </Box>

                            {/* MONTHLY SIP */}
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} p={2.5} gap={1}
                                border={1}
                                borderColor={"#34E89E"}
                                className="
                            bg-[#e6fff6]
                            rounded-2xl
                            p-6
                            text-center
                            shadow-2xl
                            border
                            
                        "
                            >
                                <Typography fontSize={26} fontWeight={700}>
                                    ₹{monthlySip.toLocaleString("en-IN")}
                                </Typography>
                                <Typography fontSize={20} className="text-gray-500 mt-1">
                                    Monthly SIP Investment
                                </Typography>
                           
                            </Box>

                            {/* YEARS */}
                            <Box display={"flex"} flexDirection={"column"} p={2.5} gap={1} alignItems={"center"} justifyContent={"center"} className="bg-[#F2F0EF] rounded-2xl p-6 text-center shadow-sm">
                                <Typography fontSize={26} fontWeight={700}>
                                    {years}
                                </Typography>
                                <Typography fontSize={20} className="text-gray-500 mt-1">
                                    Number of Years
                                </Typography>
                                <Typography fontSize={13} className="text-gray-400">
                                    You Need To Save
                                </Typography>
                            </Box>


                        </Box>
                    </Box>
                </Box>
            </Box>



        </>
    );
}
