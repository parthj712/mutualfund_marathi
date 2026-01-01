"use client";

import React, { useMemo, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SliderInputRange from "@/Componenets/Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";

const format = (v) => `₹ ${v.toLocaleString("en-IN")}`;

const LumpsumCalculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= STATES ================= */
    const [investmentAmount, setInvestmentAmount] = useState(25000);
    const [returnRate, setReturnRate] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    /* ================= CALCULATION ================= */
    const calculation = useMemo(() => {
        const futureValue =
            investmentAmount *
            Math.pow(1 + returnRate / 100, timePeriod);

        const estimatedReturns = futureValue - investmentAmount;

        return {
            invested: Math.round(investmentAmount),
            returns: Math.round(estimatedReturns),
            totalValue: Math.round(futureValue),
        };
    }, [investmentAmount, returnRate, timePeriod]);

    return (
        <Box p={isMobile ? 4 : 10}>
            <GradientHeading text="Lumpsum Calculator" />

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 6,
                }}
            >
                {/* ================= LEFT : INPUTS ================= */}
                <Box flex={1} display="flex" flexDirection="column" gap={4}>
                    <SliderInputRange
                        label="Total investment"
                        value={investmentAmount}
                        min={1000}
                        max={10000000}
                        step={5000}
                        unit="₹"
                        onChange={setInvestmentAmount}
                    />

                    <SliderInputRange
                        label="Expected return rate (p.a)"
                        value={returnRate}
                        min={1}
                        max={30}
                        step={0.5}
                        unit="%"
                        onChange={setReturnRate}
                    />

                    <SliderInputRange
                        label="Time period"
                        value={timePeriod}
                        min={1}
                        max={30}
                        step={1}
                        unit="Yr"
                        onChange={setTimePeriod}
                    />

                    {/* ================= SUMMARY ================= */}
                    <Box mt={4} display="flex" flexDirection="column" gap={1.5}>
                        <SummaryRow
                            label="Invested amount"
                            value={format(calculation.invested)}
                        />
                        <SummaryRow
                            label="Est. returns"
                            value={format(calculation.returns)}
                        />
                        <SummaryRow
                            label="Total value"
                            value={format(calculation.totalValue)}
                        />
                    </Box>
                </Box>

                {/* ================= RIGHT : DONUT ================= */}
                <Box
                    flex={1}
                    sx={{
                        background: "#F8FBFF",
                        borderRadius: 4,
                        p: isMobile ? 3 : 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <DonutInvestmentChart
                        investedAmount={calculation.invested}
                        growthAmount={calculation.returns}
                        futureValue={calculation.totalValue}
                        investedLabel="Invested amount"
                        growthLabel="Est. returns"
                    />

                    <Box
                        sx={{
                            background: "#10B981",
                            color: "#fff",
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        INVEST NOW
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

/* ================= SMALL SUMMARY ROW ================= */
const SummaryRow = ({ label, value }) => (
    <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary">{label}</Typography>
        <Typography fontWeight={600}>{value}</Typography>
    </Box>
);

export default LumpsumCalculator;
