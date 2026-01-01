"use client";

import React, { useMemo, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import SliderInputRange from "@/Componenets/Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";

const format = (v) => `₹ ${v.toLocaleString("en-IN")}`;

const HomeLoanCalculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= STATES ================= */
    const [loanAmount, setLoanAmount] = useState(1000000); // 10L
    const [interestRate, setInterestRate] = useState(6.5);
    const [tenureYears, setTenureYears] = useState(5);

    /* ================= CALCULATION ================= */
    const calculation = useMemo(() => {
        const months = tenureYears * 12;
        const r = interestRate / 12 / 100;

        const emi =
            (loanAmount * r * Math.pow(1 + r, months)) /
            (Math.pow(1 + r, months) - 1);

        const totalAmount = emi * months;
        const totalInterest = totalAmount - loanAmount;

        return {
            emi: Math.round(emi),
            totalInterest: Math.round(totalInterest),
            totalAmount: Math.round(totalAmount),
        };
    }, [loanAmount, interestRate, tenureYears]);

    return (
        <Box p={isMobile ? 4 : 10}>
            <GradientHeading text="होमलोन EMI Calculator" />

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
                        label="कर्जाची रक्कम"
                        value={loanAmount}
                        min={500000}
                        max={20000000}
                        step={100000}
                        unit="₹"
                        onChange={setLoanAmount}
                    />

                    <SliderInputRange
                        label="व्याजदर (दरसाल)"
                        value={interestRate}
                        min={5}
                        max={15}
                        step={0.1}
                        unit="%"
                        onChange={setInterestRate}
                    />

                    <SliderInputRange
                        label="कर्जाचा कालावधी"
                        value={tenureYears}
                        min={5}
                        max={30}
                        step={1}
                        unit="Yr"
                        onChange={setTenureYears}
                    />

                    {/* ================= SUMMARY ================= */}
                    <Box mt={4} display="flex" flexDirection="column" gap={1.5}>
                        <SummaryRow
                            label="मासिक EMI"
                            value={format(calculation.emi)}
                        />
                        <SummaryRow
                            label="मूळ रक्कम"
                            value={format(loanAmount)}
                        />
                        <SummaryRow
                            label="एकूण व्याज"
                            value={format(calculation.totalInterest)}
                        />
                        <SummaryRow
                            label="एकूण रक्कम"
                            value={format(calculation.totalAmount)}
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
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <DonutInvestmentChart
                        investedAmount={loanAmount}
                        growthAmount={calculation.totalInterest}
                        futureValue={calculation.totalAmount}
                        investedLabel="Principal amount"
                        growthLabel="Interest amount"
                    />
                </Box>
            </Box>
        </Box>
    );
};

/* ================= REUSABLE SUMMARY ROW ================= */
const SummaryRow = ({ label, value }) => (
    <Box display="flex" justifyContent="space-between">
        <Typography color="text.secondary">{label}</Typography>
        <Typography fontWeight={600}>{value}</Typography>
    </Box>
);

export default HomeLoanCalculator;
