"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";

import SliderInputRange from "../Common/SliderInputRange/SliderInputRange";
import DonutInvestmentChart from "../Common/DonutInvestmentChart/DonutInvestmentChart";


const SIP_Calculator = () => {
    const [monthlySip, setMonthlySip] = useState(25000);
    const [months, setMonths] = useState(120);
    const [returnRate, setReturnRate] = useState(12.5);
    const [investmentRange, setInvestmentRange] = useState([10000, 50000]);

    return (
        <Box
            sx={{
                maxWidth: 600,
                mx: "auto",        // center horizontally
                mt: 6,
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >
            <SliderInputRange
                label="Monthly Investment Range"
                value={investmentRange}
                min={0}
                max={100000}
                step={500}
                unit="₹"
                onChange={setInvestmentRange}
            />

            <DonutInvestmentChart
                investedAmount={2500000}
                growthAmount={282400}
                futureValue={2782400}
            />

            {/* 
            <SliderInput
                label="Time Period"
                value={months}
                min={12}
                max={480}
                unit="Months"
                onChange={setMonths}
            />

            <SliderInput
                label="Expected Return Rate"
                value={returnRate}
                min={1}
                max={20}
                step={0.1}
                unit="%"
                onChange={setReturnRate}
            /> */}
        </Box>
    );
};

export default SIP_Calculator;
