"use client";

import React, { useMemo, useState } from "react";
import {
    Box,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import DonutInvestmentChart from "@/Componenets/Common/DonutInvestmentChart/DonutInvestmentChart";

const format = (v) => `₹ ${v.toLocaleString("en-IN")}`;

const LessSpendingCalculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= PERSONAL DETAILS ================= */
    const [currentAge, setCurrentAge] = useState(25);
    const [retirementAge, setRetirementAge] = useState(60);
    const [returnRate, setReturnRate] = useState(12);
    const [taxRate, setTaxRate] = useState(7);
    const [inflationRate, setInflationRate] = useState(5);

    /* ================= SPENDING DETAILS (MONTHLY SAVINGS) ================= */
    const [houseDeferral, setHouseDeferral] = useState(500000);
    const [homeLoanEMI, setHomeLoanEMI] = useState(30000);
    const [newCarDelay, setNewCarDelay] = useState(300000);
    const [eatOutLess, setEatOutLess] = useState(25000);
    const [lifestyleCut, setLifestyleCut] = useState(25000);
    const [lessHolidays, setLessHolidays] = useState(10000);
    const [publicTransport, setPublicTransport] = useState(10000);
    const [creditCardInterest, setCreditCardInterest] = useState(30000);
    const [personalLoanClose, setPersonalLoanClose] = useState(20000);
    const [lessShopping, setLessShopping] = useState(10000);

    const [submitted, setSubmitted] = useState(false);

    /* ================= CALCULATION ================= */
    const calculation = useMemo(() => {
        const years = retirementAge - currentAge;

        const yearlySaving =
            homeLoanEMI +
            eatOutLess +
            lifestyleCut +
            lessHolidays +
            publicTransport +
            creditCardInterest +
            personalLoanClose +
            lessShopping;

        const r = returnRate / 100;

        const futureValue =
            yearlySaving *
            ((Math.pow(1 + r, years) - 1) / r);

        return {
            years,
            yearlySaving,
            futureValue: Math.round(futureValue),
        };
    }, [
        currentAge,
        retirementAge,
        returnRate,
        homeLoanEMI,
        eatOutLess,
        lifestyleCut,
        lessHolidays,
        publicTransport,
        creditCardInterest,
        personalLoanClose,
        lessShopping,
    ]);

    return (
        <Box p={isMobile ? 4 : 10}>
            <GradientHeading text="Less Spending, More Savings Calculator" />

            <Box
                sx={{
                    mt: 6,
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: 6,
                }}
            >
                {/* ================= LEFT FORM ================= */}
                <Box flex={1}>
                    {/* PERSONAL DETAILS */}
                    <Section title="Personal Details">
                        <Input
                            label="Your Current age (in years)"
                            value={currentAge}
                            setValue={setCurrentAge}
                        />
                        <Input
                            label="Age at which you want to retire (in years)"
                            value={retirementAge}
                            setValue={setRetirementAge}
                        />
                        <Input
                            label="Savings or interest rate of your current investments (% per annum)"
                            value={returnRate}
                            setValue={setReturnRate}
                        />
                        <Input
                            label="Income Tax rate (% per annum)"
                            value={taxRate}
                            setValue={setTaxRate}
                        />
                        <Input
                            label="Current inflation rate (% per annum)"
                            value={inflationRate}
                            setValue={setInflationRate}
                        />
                    </Section>

                    {/* SPENDING DETAILS */}
                    <Section title="Spending Details">
                        <Input label="Deferring purchase of a house / flat (Rs.)" value={houseDeferral} setValue={setHouseDeferral} />
                        <Input label="Reducing the Home Loan EMI (Rs.)" value={homeLoanEMI} setValue={setHomeLoanEMI} />
                        <Input label="Waiting to buy a new car (Rs.)" value={newCarDelay} setValue={setNewCarDelay} />
                        <Input label="Eating out less with family (Rs.)" value={eatOutLess} setValue={setEatOutLess} />
                        <Input label="Reduce lifestyle spending (Rs.)" value={lifestyleCut} setValue={setLifestyleCut} />
                        <Input label="Taking fewer holidays (Rs.)" value={lessHolidays} setValue={setLessHolidays} />
                        <Input label="Taking public transport (Rs.)" value={publicTransport} setValue={setPublicTransport} />
                        <Input label="Reducing the credit card interest (Rs.)" value={creditCardInterest} setValue={setCreditCardInterest} />
                        <Input label="Closing the personal loan (Rs.)" value={personalLoanClose} setValue={setPersonalLoanClose} />
                        <Input label="Doing less shopping (Rs.)" value={lessShopping} setValue={setLessShopping} />
                    </Section>

                    <Box mt={3}>
                        <RedButton onClick={() => setSubmitted(true)}>
                            Submit
                        </RedButton>
                    </Box>
                </Box>

                {/* ================= RIGHT RESULT ================= */}
                {submitted && (
                    <Box
                        flex={1}
                        sx={{
                            background: "#F8FBFF",
                            borderRadius: 4,
                            p: 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 4,
                        }}
                    >
                        <DonutInvestmentChart
                            investedAmount={calculation.yearlySaving}
                            growthAmount={
                                calculation.futureValue -
                                calculation.yearlySaving
                            }
                            futureValue={calculation.futureValue}
                        />

                        <ResultCard
                            label="By reducing your spending you will save this amount each year"
                            value={format(calculation.yearlySaving)}
                        />

                        <ResultCard
                            label="Number of Years"
                            value={`${calculation.years} Years`}
                        />

                        <ResultCard
                            label="If you invest this amount, you will accumulate this amount by the time you retire"
                            value={format(calculation.futureValue)}
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

/* ================= SMALL COMPONENTS ================= */

const Section = ({ title, children }) => (
    <Box mb={4}>
        <Box
            sx={{
                background: "#1F2937",
                color: "#fff",
                px: 2,
                py: 1,
                fontWeight: 600,
            }}
        >
            {title}
        </Box>
        <Box sx={{ border: "1px solid #E5E7EB" }}>{children}</Box>
    </Box>
);

const Input = ({ label, value, setValue }) => (
    <Box
        sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            borderBottom: "1px solid #E5E7EB",
            p: 2,
            alignItems: "center",
            gap: 2,
        }}
    >
        <Typography fontSize={14}>{label}</Typography>
        <TextField
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            size="small"
        />
    </Box>
);

const ResultCard = ({ label, value }) => (
    <Box
        sx={{
            width: "100%",
            p: 3,
            borderRadius: 3,
            background: "#fff",
            border: "1px solid #E5E7EB",
        }}
    >
        <Typography fontSize={14} color="text.secondary">
            {label}
        </Typography>
        <Typography fontSize={18} fontWeight={600} mt={1}>
            {value}
        </Typography>
    </Box>
);

export default LessSpendingCalculator;
