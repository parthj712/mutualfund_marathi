"use client";

import { Box, Typography, Divider, useTheme, useMediaQuery } from "@mui/material";

export default function InvestmentSummaryCard() {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));



    return (
        <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
            <Box
                className="
        bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]
        border border-[#93C5FD]
        rounded-2xl
        shadow-lg
      "
                sx={{

                    mx: "auto",
                    p: { xs: 3, md: 5 , lg : 8},
                }}
            >
                {/* Top Values */}
                <Box
                    display="grid"
                    gridTemplateColumns={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
                    gap={4}
                    textAlign="center"
                >
                    {/* Investment */}
                    <Box>
                        <Typography
                            fontSize="18px"
                            className="text-slate-600"
                            fontWeight={500}
                        >
                            गुंतवणूक
                        </Typography>

                        <Typography
                            fontSize="22px"
                            fontWeight={700}
                            className="text-slate-900"
                        >
                            ₹5,00,000
                        </Typography>
                    </Box>

                    {/* Duration */}
                    <Box>
                        <Typography
                            fontSize="18px"
                            className="text-slate-600"
                            fontWeight={500}
                        >
                            कालावधी
                        </Typography>

                        <Typography
                            fontSize="22px"
                            fontWeight={700}
                            className="text-slate-900"
                        >
                            2.5 वर्षे
                        </Typography>
                    </Box>

                    {/* Return */}
                    <Box>
                        <Typography
                            fontSize="18px"
                            className="text-slate-600"
                            fontWeight={500}
                        >
                            Net Return
                        </Typography>

                        <Typography
                            fontSize="22px"
                            fontWeight={700}
                            className="text-emerald-600"
                        >
                            9.65%
                        </Typography>
                    </Box>
                </Box>

                {/* Estimated Amount */}
                <Box
                    mt={5}
                    display="flex"
                    justifyContent="center"
                >
                    <Box
                    px={3}
                    py={2.5}
                        className="
            bg-[#BAE6FD]
            text-[#0C4A6E]
            rounded-full
            shadow-sm
          "
                    >
                        <Typography
                            fontSize="18px"
                            fontWeight={700}
                        >
                            अंदाजे रक्कम : ₹6,30,161
                        </Typography>
                    </Box>
                </Box>

                {/* Divider */}
                <Divider sx={{ my: 4, borderColor: "#BFDBFE" }} />

                {/* Note */}
                <Typography
                    fontSize="13px"
                    className="text-slate-600 text-center"
                >
                    Note: बाजारातील परिस्थितीनुसार परताव्यात बदल होऊ शकतो.
                    वरील आकडे अंदाजावर आधारित आहेत.
                </Typography>
            </Box>
        </Box>

    );
}
