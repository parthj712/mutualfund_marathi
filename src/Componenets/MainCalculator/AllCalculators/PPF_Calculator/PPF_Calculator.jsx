"use client";

import React, { useState } from "react";
import {
    Box,
    TextField,
    MenuItem,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import PPFResultTable from "./PPFResultTable";

/* ---------------- PPF INTEREST RATES (Year-wise) ---------------- */
const PPF_INTEREST_RATES = {
    2014: 8.7,
    2015: 8.7,
    2016: 8.22,
    2017: 7.88,
    2018: 7.6,
    2019: 8.0,
    2020: 7.3,
    2021: 7.1,
    2022: 7.1,
    2023: 7.1,
};

const PPF_Calculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= STATES ================= */
    const [investmentType, setInvestmentType] = useState("Fixed Investment");
    const [startYear, setStartYear] = useState(2014);
    const [annualInvestment, setAnnualInvestment] = useState(15000);
    const [resultData, setResultData] = useState([]);

    /* ================= CALCULATION ================= */
    const calculatePPF = () => {
        let openingBalance = 0;
        let totalInvestment = 0;
        const results = [];

        for (let year = startYear; year <= startYear + 14; year++) {
            const interestRate = PPF_INTEREST_RATES[year] || 7.1;

            totalInvestment += annualInvestment;
            const interest =
                (openingBalance + annualInvestment) *
                (interestRate / 100);

            const closingBalance =
                openingBalance + annualInvestment + interest;

            // Rules
            const loanPossible =
                year >= startYear + 2 && year <= startYear + 5
                    ? Math.round(openingBalance * 0.25)
                    : "--";

            const prematureWithdrawal =
                year >= startYear + 6
                    ? Math.round(closingBalance * 0.5)
                    : "--";

            results.push({
                year,
                interestRate,
                openingBalance: Math.round(openingBalance),
                annualInvestment,
                totalInvestment: Math.round(totalInvestment),
                interest: Math.round(interest),
                closingBalance: Math.round(closingBalance),
                prematureWithdrawal,
                loanPossible,
            });

            openingBalance = closingBalance;
        }

        setResultData(results);
    };

    return (
        <Box p={isMobile ? 4 : 10}>
            <GradientHeading text="पीपीएफ(PPF) कॅल्क्युलेटर" />

            {/* ================= FORM ================= */}
            <Box
                sx={{
                    mt: 6,
                    maxWidth: 900,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3.5,
                    backgroundColor: "#FFFFFF",
                    borderRadius: 5,
                    p: 5,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                }}
            >
                <TextField
                    select
                    label="पीपीएफ गुंतवणुकीसाठी पर्याय निवडा"
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value)}
                    fullWidth
                >
                    <MenuItem value="Fixed Investment">
                        Fixed Investment
                    </MenuItem>
                </TextField>

                <TextField
                    label="तुम्ही तुमचे पीपीएफ खाते कोणत्या वर्षी उघडले?"
                    value={startYear}
                    onChange={(e) => setStartYear(Number(e.target.value))}
                    fullWidth
                />

                <TextField
                    label="वार्षिक गुंतवणूक रक्कम (रु.) प्रविष्ट करा."
                    value={annualInvestment}
                    onChange={(e) =>
                        setAnnualInvestment(Number(e.target.value))
                    }
                    fullWidth
                />

                <Box mt={3} display="flex" justifyContent="flex-end">
                    <RedButton onClick={calculatePPF} sx={{ px: 4 }}>
                        सबमिट करा
                    </RedButton>
                </Box>
            </Box>

            {/* ================= RESULT ================= */}
            <PPFResultTable data={resultData} />
        </Box>
    );
};

export default PPF_Calculator;
