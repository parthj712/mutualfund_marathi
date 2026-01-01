"use client";

import React, { useState } from "react";
import {
    Box,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import EPFResultTable from "./EPFResultTable";

const EPF_Calculator = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    /* ================= STATES ================= */
    const [currentAge, setCurrentAge] = useState(50);
    const [retirementAge, setRetirementAge] = useState(60);
    const [currentEPFBalance, setCurrentEPFBalance] = useState(200000);
    const [employeeContribution, setEmployeeContribution] = useState(5000);
    const [employerContribution, setEmployerContribution] = useState(5000);
    const [contributionGrowthRate, setContributionGrowthRate] = useState(5);
    const [interestRate, setInterestRate] = useState(7);
    const [currentPensionBalance, setCurrentPensionBalance] = useState(200000);

    const [resultData, setResultData] = useState([]);

    const calculateEPFTable = ({
        currentAge,
        retirementAge,
        openingBalance,
        employeeMonthly,
        employerMonthly,
        contributionGrowthRate,
        interestRate,
    }) => {
        const results = [];

        let age = currentAge;
        let epfBalance = openingBalance;
        let empContr = employeeMonthly;
        let emprContr = employerMonthly;

        const EPS_MONTHLY = 541;

        while (age <= retirementAge) {
            const yearlyEmployee = empContr * 12;
            const employerToEPF = Math.max(emprContr - EPS_MONTHLY, 0);
            const yearlyEmployer = employerToEPF * 12;

            const yearlyEPS = EPS_MONTHLY * 12;

            const totalContribution = yearlyEmployee + yearlyEmployer;
            const interest =
                (epfBalance + totalContribution / 2) *
                (interestRate / 100);

            const closingBalance =
                epfBalance + totalContribution + interest;

            results.push({
                age,
                openingBalance: Math.round(epfBalance),
                employeeMonthly: Math.round(empContr),
                employerMonthly: Math.round(emprContr - EPS_MONTHLY),
                closingBalance: Math.round(closingBalance),
                pensionFund: Math.round(yearlyEPS),
            });

            // prepare next year
            epfBalance = closingBalance;
            empContr = empContr * (1 + contributionGrowthRate / 100);
            emprContr = emprContr * (1 + contributionGrowthRate / 100);
            age++;
        }

        return results;
    };



    /* ================= SUBMIT ================= */
    const handleSubmit = () => {
        const data = calculateEPFTable({
            currentAge,
            retirementAge,
            openingBalance: currentEPFBalance,
            employeeMonthly: employeeContribution,
            employerMonthly: employerContribution,
            contributionGrowthRate,
            interestRate,
        });

        setResultData(data);
    };


    return (
        <>
            <Box p={isMobile ? 4 : 10}>
                <GradientHeading text="ईपीएफ(EPF) कॅल्क्युलेटर" />

                <Box
                    boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
                    sx={{
                        mt: 6,
                        maxWidth: 900,
                        mx: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 3.5,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 5,
                        p: 5
                    }}
                >
                    <TextField
                        label="तुमचे सध्याचे वय (वर्षांमध्ये)"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचे निवृत्तीचे वय (वर्षांमध्ये)"
                        value={retirementAge}
                        onChange={(e) => setRetirementAge(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचा सध्याचा ईपीएफ शिल्लक (रु.)"
                        value={currentEPFBalance}
                        onChange={(e) => setCurrentEPFBalance(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचे कर्मचारी योगदान दरमहा (रु.)"
                        value={employeeContribution}
                        onChange={(e) => setEmployeeContribution(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमच्या नियोक्त्याचे दरमहा योगदान (रु.)"
                        value={employerContribution}
                        onChange={(e) => setEmployerContribution(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचा ईपीएफ योगदानातील वाढीचा दर (प्रतिवर्ष%)"
                        value={contributionGrowthRate}
                        onChange={(e) => setContributionGrowthRate(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचा व्याजदर (% प्रतिवर्ष)"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        fullWidth
                    />

                    <TextField
                        label="तुमचा सध्याचा पेन्शन फंड शिल्लक (रु.)"
                        value={currentPensionBalance}
                        onChange={(e) =>
                            setCurrentPensionBalance(Number(e.target.value))
                        }
                        fullWidth
                    />

                    {/* SUBMIT BUTTON */}
                    <Box mt={3} display="flex" justifyContent="flex-end">
                        <RedButton onClick={handleSubmit} sx={{ px: 4 }}>
                            सबमिट करा
                        </RedButton>
                    </Box>
                </Box>

                <EPFResultTable data={resultData} />

            </Box>
        </>
    );
};

export default EPF_Calculator;
