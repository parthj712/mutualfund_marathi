"use client";

import React, { useState, useMemo } from "react";
import { Box, Typography, Slider, Divider, useTheme, useMediaQuery } from "@mui/material";

/* ================= SIP CALC ================= */
const calculateSIP = (monthly, rate, years = 25) => {
    const r = rate / 12 / 100;
    const n = years * 12;
    return monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
};

const formatINR = (v) => {
    if (v >= 1e7) return `₹ ${(v / 1e7).toFixed(2)} Cr`;
    if (v >= 1e5) return `₹ ${(v / 1e5).toFixed(2)} L`;
    return `₹ ${Math.round(v)}`;
};

const OPTIONS = [
    { label: "Bank", rate: 3 },
    { label: "Fixed Deposit", rate: 6 },
    { label: "Gold", rate: 9 },
    { label: "Sensex", rate: 11 },
    { label: "Mutual Fund", rate: 15, highlight: true },
];





export default function SipComparisonGradient() {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    const [amount, setAmount] = useState(12000);

    const data = useMemo(
        () =>
            OPTIONS.map((o) => ({
                ...o,
                value: calculateSIP(amount, o.rate),
            })),
        [amount]
    );

    return (
        <Box px={isMobile ? 3 : 10} py={isMobile ? 10 : 16}>
            <Box
                sx={{
                    borderRadius: 8,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection : isMobile ? "column" : "row",
                    minHeight: 440,
                    position: "relative",
                    background:
                        "linear-gradient(120deg,#0f172a,#312e81,#0e7490)",
                    backgroundSize: "300% 300%",
                    animation: "gradientMove 10s ease infinite",
                }}
            >
                {/* ANIMATION */}
                <style>
                    {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
                </style>

                {/* LEFT */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 4, md: 6 },
                        color: "#fff",
                    }}
                >
                    <Typography variant={isMobile ? "h5"  : "h4"} fontWeight={700} mb={2}>
                        श्री ठाकूर फिनसर्व तुमच्या
                     हितासाठी कसे काम करते
                    </Typography>

                    <Typography fontSize={isMobile ? 16 : 18} mb={2}>
                        मासिक गुंतवणूक
                    </Typography>

                    <Box
                        sx={{
                            display: "inline-block",
                            px: 4,
                            py: 1.5,
                            mb: 4,
                            fontSize : isMobile ? 18 :  20,
                            borderRadius: 999,
                            fontWeight: 700,
                            background:
                                "linear-gradient(90deg,#f43f5e,#fb7185)",
                            boxShadow: "0 0 20px rgba(244,63,94,.6)",
                        }}
                    >
                        ₹ {amount.toLocaleString("en-IN")}
                    </Box>

                    <Slider
                        value={amount}
                        min={2000}
                        max={100000}
                        step={1000}
                        onChange={(e, v) => setAmount(v)}
                        sx={{
                            color: "#fb7185",
                            "& .MuiSlider-thumb": {
                                boxShadow: "0 0 12px #fb7185",
                            },
                        }}
                    />

                    <Typography mt={3} >
                        गुंतवणूक कालावधी: <b>25 वर्षे</b>
                    </Typography>
                </Box>

                {/* RIGHT – GLASS CARD */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 4, md: 6 },
                        background: "rgba(255,255,255,0.92)",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    <Typography variant={isMobile ? "h5" : "h4"} fontWeight={700} mb={3}>
                        25 वर्षांनंतर, तुमचे पैसे इतके होतील
                    </Typography>

                    {data.map((i, idx) => (
                        <Box key={i.label}>
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                py={2}
                            >
                                <Typography
                                fontSize={isMobile ? 16 : 18}
                                    fontWeight={i.highlight ? 700 : 500}
                                >
                                    {i.label}
                                </Typography>

                                <Typography
                                fontSize={isMobile ? 16 : 18}
                                    fontWeight={600}
                                    color={i.highlight ? "#0f766e" : "#111"}
                                >
                                    {formatINR(i.value)} @{i.rate}%
                                </Typography>
                            </Box>
                            {idx !== data.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
