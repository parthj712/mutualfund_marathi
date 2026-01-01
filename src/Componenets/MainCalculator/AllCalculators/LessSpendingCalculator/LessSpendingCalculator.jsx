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
            <GradientHeading text=" अधिक बचत कॅल्क्युलेटर" />

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
                    <Section title="वैयक्तिक माहिती">
                        <Input
                            label="तुमचे सध्याचे वय (वर्षांमध्ये)"
                            value={currentAge}
                            setValue={setCurrentAge}
                        />
                        <Input
                            label="तुम्हाला निवृत्ती घ्यायची आहे ते वय (वर्षांमध्ये)"
                            value={retirementAge}
                            setValue={setRetirementAge}
                        />
                        <Input
                            label="तुमच्या सध्याच्या गुंतवणुकीची बचत किंवा व्याजदर (वार्षिक%)"
                            value={returnRate}
                            setValue={setReturnRate}
                        />
                        <Input
                            label="आयकर दर (% प्रतिवर्ष)"
                            value={taxRate}
                            setValue={setTaxRate}
                        />
                        <Input
                            label="सध्याचा महागाई दर (% प्रतिवर्ष)"
                            value={inflationRate}
                            setValue={setInflationRate}
                        />
                    </Section>

                    {/* SPENDING DETAILS */}
                    <Section title="खर्चाचे तपशील">
                        <Input label="घर / फ्लॅट खरेदी पुढे ढकलणे (रु.)" value={houseDeferral} setValue={setHouseDeferral} />
                        <Input label="गृहकर्जाचा ईएमआय (रु.) कमी करणे" value={homeLoanEMI} setValue={setHomeLoanEMI} />
                        <Input label="नवीन गाडी खरेदी करण्याची वाट पाहत आहे (रु.)" value={newCarDelay} setValue={setNewCarDelay} />
                        <Input label="कुटुंबासह बाहेर कमी जेवणे (रु.)" value={eatOutLess} setValue={setEatOutLess} />
                        <Input label="जीवनशैली खर्च कमी करा (रु.)" value={lifestyleCut} setValue={setLifestyleCut} />
                        <Input label="कमी सुट्ट्या घेणे (रु.)" value={lessHolidays} setValue={setLessHolidays} />
                        <Input label="सार्वजनिक वाहतुकीने प्रवास (रु.)" value={publicTransport} setValue={setPublicTransport} />
                        <Input label="क्रेडिट कार्डवरील व्याजदर कमी करणे (रु.)" value={creditCardInterest} setValue={setCreditCardInterest} />
                        <Input label="वैयक्तिक कर्ज बंद करणे (रु.)" value={personalLoanClose} setValue={setPersonalLoanClose} />
                        <Input label="कमी खरेदी करणे (रु.)" value={lessShopping} setValue={setLessShopping} />
                    </Section>

                    <Box mt={3}>
                        <RedButton onClick={() => setSubmitted(true)}>
                           सबमिट करा
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
                            label="तुमचा खर्च कमी करून तुम्ही दरवर्षी ही रक्कम वाचवू शकाल."
                            value={format(calculation.yearlySaving)}
                        />

                        <ResultCard
                            label="वर्षांची संख्या"
                            value={`${calculation.years} वर्षे`}
                        />

                        <ResultCard
                            label="जर तुम्ही ही रक्कम गुंतवली तर तुम्ही निवृत्त होईपर्यंत ही रक्कम एवढी होईल"
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
