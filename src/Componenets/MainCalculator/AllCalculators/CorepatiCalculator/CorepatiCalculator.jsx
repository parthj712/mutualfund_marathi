"use client";

import React, { useMemo, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import SliderInputRange from "@/Componenets/Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";

const format = (v) => `₹ ${v.toLocaleString("en-IN")}`;

const CrorepatiCalculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= STATES ================= */
    const [targetWealth, setTargetWealth] = useState(50000000); // 5 Cr
    const [currentAge, setCurrentAge] = useState(30);
    const [targetAge, setTargetAge] = useState(60);
    const [inflationRate, setInflationRate] = useState(5);
    const [returnRate, setReturnRate] = useState(12);
    const [currentSavings, setCurrentSavings] = useState(2500000);

    /* ================= CALCULATIONS ================= */
    const calculation = useMemo(() => {
        const years = targetAge - currentAge;
        const months = years * 12;

        const inflationAdjustedTarget =
            targetWealth * Math.pow(1 + inflationRate / 100, years);

        const r = returnRate / 12 / 100;

        const sipFactor =
            ((Math.pow(1 + r, months) - 1) / r) * (1 + r);

        const currentSavingsFV =
            currentSavings * Math.pow(1 + returnRate / 100, years);

        const requiredCorpus =
            inflationAdjustedTarget - currentSavingsFV;

        const monthlySip =
            requiredCorpus > 0 ? requiredCorpus / sipFactor : 0;

        const investedThroughSip = monthlySip * months;
        const growthAmount =
            inflationAdjustedTarget -
            investedThroughSip -
            currentSavings;

        return {
            years,
            monthlySip: Math.round(monthlySip),
            investedThroughSip: Math.round(investedThroughSip),
            growthAmount: Math.round(growthAmount),
            futureValue: Math.round(inflationAdjustedTarget),
        };
    }, [
        targetWealth,
        currentAge,
        targetAge,
        inflationRate,
        returnRate,
        currentSavings,
    ]);

    return (
        <Box p={isMobile ? 4 : 10}>
            <GradientHeading text="Become a Crorepati Calculator" />

            <Box
                boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                sx={{
                    mt: 6,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 6,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 5,
                    p: 5
                }}
            >
                {/* ================= LEFT : INPUTS ================= */}
                <Box flex={1} display="flex" flexDirection="column" gap={4}>
                    <SliderInputRange
                        label="How many Crores (at current value) you would need to consider yourself wealthy (Rs)"
                        value={targetWealth}
                        min={10000000}
                        max={100000000}
                        step={1000000}
                        onChange={setTargetWealth}
                    />

                    <SliderInputRange
                        label="Your current age (in years)"
                        value={currentAge}
                        min={18}
                        max={70}
                        onChange={setCurrentAge}
                    />

                    <SliderInputRange
                        label="The age when you want to become a Crorepati (in years)"
                        value={targetAge}
                        min={30}
                        max={80}
                        onChange={setTargetAge}
                    />

                    <SliderInputRange
                        label="The expected rate of inflation over the years (% per annum)"
                        value={inflationRate}
                        min={1}
                        max={15}
                        step={0.5}
                        onChange={setInflationRate}
                    />

                    <SliderInputRange
                        label="What rate of return would you expect your SIP investment to generate (% per annum)"
                        value={returnRate}
                        min={5}
                        max={30}
                        step={0.5}
                        onChange={setReturnRate}
                    />

                    <SliderInputRange
                        label="How much savings you have now (Rs)"
                        value={currentSavings}
                        min={0}
                        max={100000000}
                        step={500000}
                        onChange={setCurrentSavings}
                    />
                </Box>

                {/* ================= RIGHT : RESULT ================= */}
                <Box
                    flex={1}
                    sx={{
                       background: "#EAF0FF",
                        border : "5px solid #F8FBFF",
                        borderRadius: 4,
                        p: isMobile ? 3 : 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <DonutInvestmentChart
                        investedAmount={
                            calculation.investedThroughSip +
                            currentSavings
                        }
                        growthAmount={calculation.growthAmount}
                        futureValue={calculation.futureValue}
                    />

                    {/* SUMMARY CARDS */}
                    <Box
                        width="100%"
                        display="grid"
                        gridTemplateColumns={isMobile ? "1fr" : "1fr 1fr"}
                        gap={3}
                    >
                        <SummaryCard
                            label="Monthly SIP Amount"
                            value={format(calculation.monthlySip)}
                        />

                        <SummaryCard
                            label="Total Growth Amount"
                            value={format(calculation.growthAmount)}
                        />

                        <SummaryCard
                            label={`Amount Invested through SIP in ${calculation.years} years`}
                            value={format(calculation.investedThroughSip)}
                        />

                        <SummaryCard
                            label="Your targeted Wealth Amount (Inflation adjusted)"
                            value={format(calculation.futureValue)}
                        />

                        <SummaryCard
                            label="Growth Amount"
                            value={format(calculation.growthAmount)}
                        />

                        <SummaryCard
                            label="Future Value"
                            value={format(calculation.futureValue)}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

/* ================= SMALL CARD ================= */
export const SummaryCard = ({ label, value }) => (
    <Box
        sx={{
            p: 3,
            borderRadius: 3,
            background: "#fff",
            border: "1px solid #E5E7EB",
        }}
    >
        <Box fontSize={18} color="text.secondary">
            {label}
        </Box>
        <Box fontSize={18} fontWeight={600} mt={1}>
            {value}
        </Box>
    </Box>
);

export default CrorepatiCalculator;
