"use client";

import { useRef } from "react";
import Image from "next/image";
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { GiLoveLetter } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import RetirementPlanResult from "./RetirementPlanResult";
import GoalOptionCard from "@/Componenets/Common/GoalOptionCard/GoalOptionCard";

export default function Retirement() {

    const RISK_RETURN_MAP = {
        "Conservative": 0.07,               // 7%
        "Moderately Conservative": 0.08,    // 8%
        "Moderate": 0.10,                   // 10%
        "Moderately Aggressive": 0.11,      // 11%
        "Aggressive": 0.12,                 // 12%
    };



    const resultRef = useRef(null);

    const theme = useTheme();

    const router = useRouter();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    // FORM STATES
    const [currentAge, setCurrentAge] = useState("");
    const [retirementAge, setRetirementAge] = useState("");
    const [lifeExpectancy, setLifeExpectancy] = useState("");
    const [monthlyExpense, setMonthlyExpense] = useState("");
    const [inflationRate, setInflationRate] = useState("");
    const [alreadySaved, setAlreadySaved] = useState("");
    const [goalName, setGoalName] = useState("Retirement");
    const [risk, setRisk] = useState("");


    const [result, setResult] = useState(null);


    const [calculationMode, setCalculationMode] = useState("detailed");
    // "simple" | "detailed"



    // CALCULATION FUNCTION
    const calculateRetirement = () => {
        const ageNow = Number(currentAge);
        const retireAge = Number(retirementAge);
        const lifeAge = Number(lifeExpectancy);
        const expense = Number(monthlyExpense);
        const inflation = Number(inflationRate) / 100;
        const saved = Number(alreadySaved);

        if (
            !ageNow || !retireAge || !lifeAge ||
            !expense || !inflation || !risk
        ) return;

        const yearsToRetirement = retireAge - ageNow;
        const retirementYears = lifeAge - retireAge;

        const annualReturn = RISK_RETURN_MAP[risk];
        const monthlyReturn = annualReturn / 12;

        // Inflation-adjusted expense at retirement
        const inflatedMonthlyExpense =
            expense * Math.pow(1 + inflation, yearsToRetirement);

        const annualExpense = inflatedMonthlyExpense * 12;

        // Retirement corpus (Annuity formula)
        const retirementCorpus =
            annualExpense *
            ((1 - Math.pow(1 + annualReturn, -retirementYears)) / annualReturn);

        // Future value of current savings
        const futureSavings =
            saved * Math.pow(1 + annualReturn, yearsToRetirement);

        const remainingCorpus = Math.max(retirementCorpus - futureSavings, 0);

        const months = yearsToRetirement * 12;

        const monthlySIP =
            remainingCorpus > 0
                ? (remainingCorpus * monthlyReturn) /
                (Math.pow(1 + monthlyReturn, months) - 1)
                : 0;

        setResult({
            goalName,
            riskProfile: risk,
            yearsToRetirement,
            retirementYears,
            inflatedMonthlyExpense: Math.round(inflatedMonthlyExpense),
            retirementCorpus: Math.round(retirementCorpus),
            futureSavings: Math.round(futureSavings),
            monthlySip: Math.round(monthlySIP),
            assumedReturn: annualReturn * 100,
        });

        setTimeout(() => {
            resultRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 200);
    };


    const calculateSimpleRetirement = () => {
        const ageNow = Number(currentAge);
        const retireAge = Number(retirementAge);
        const expense = Number(monthlyExpense);
        const inflation = Number(inflationRate) / 100;
        const saved = Number(alreadySaved);

        if (!ageNow || !retireAge || !expense || !inflation || !risk) return;

        const yearsToRetirement = retireAge - ageNow;
        const annualReturn = RISK_RETURN_MAP[risk];
        const monthlyReturn = annualReturn / 12;

        // Inflation-adjusted monthly expense
        const inflatedMonthlyExpense =
            expense * Math.pow(1 + inflation, yearsToRetirement);

        // 🔥 Simple corpus rule (used by most portals)
        const retirementCorpus =
            inflatedMonthlyExpense * 12 * 11;

        // ✅ Future value of existing savings
        const futureSavings =
            saved * Math.pow(1 + annualReturn, yearsToRetirement);

        // Remaining corpus to be built via SIP
        const remainingCorpus =
            Math.max(retirementCorpus - futureSavings, 0);

        const months = yearsToRetirement * 12;

        const monthlySIP =
            remainingCorpus > 0
                ? (remainingCorpus * monthlyReturn) /
                (Math.pow(1 + monthlyReturn, months) - 1)
                : 0;

        setResult({
            mode: "simple",
            retirementCorpus: Math.round(retirementCorpus),
            inflatedMonthlyExpense: Math.round(inflatedMonthlyExpense),
            futureSavings: Math.round(futureSavings),
            monthlySip: Math.round(monthlySIP),
            yearsToRetirement,
            assumedReturn: annualReturn * 100,
            riskProfile: risk,
        });

        setTimeout(() => {
            resultRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        }, 200);
    };




    const CALCULATORS = [
        {
            key: "dream-home",
            title: "स्वप्नातील घर",
            Icon: AiFillHome,
            path: "/financial-planning/dream-home",
            backgroundGradient: "linear-gradient(135deg, #0F3443, #34E89E)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "wealth",
            title: "संपत्ती निर्मिती",
            Icon: FaRupeeSign,
            path: "/financial-planning/wealth-creation",
            backgroundGradient: "linear-gradient(135deg, #EAAFC8, #654EA3)",
            iconGradient: "linear-gradient(135deg, rgba(101,78,163,1), rgba(234,175,200,1))",
        },
        {
            key: "retirement",
            title: "निवृत्ती",
            Icon: TbMoneybag,
            path: "/financial-planning/retirement",
            backgroundGradient: "linear-gradient(135deg, #373B44, #4286F4)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "education",
            title: "मुलांचे शिक्षण",
            Icon: GiWhiteBook,
            backgroundGradient: "linear-gradient(135deg, #373B44, #4286F4)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "marriage",
            title: "मुलाचे लग्न",
            Icon: GiLoveLetter,
            backgroundGradient: "linear-gradient(135deg, #0F3443, #34E89E)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "emergency",
            title: "आणीबाणी",
            Icon: GrEmergency,
            backgroundGradient: "linear-gradient(135deg, #EAAFC8, #654EA3)",
            iconGradient: "linear-gradient(135deg, rgba(101,78,163,1), rgba(234,175,200,1))",
        },
    ];






    return (
        <>        <Box className="relative w-full bg-white overflow-hidden">

            {/* FLOATING CONTENT */}
            <Box
                px={isMobile ? 4 : isTablet ? 6 : 10}
                py={isMobile ? 4 : isTablet ? 6 : 8}
                className="
                    relative z-10 
                    max-w-8xl
                    px-6 py-16
                "
            >
                <Box className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-start justify-center">

                    {isDesktop && (
                        <Box pt={12} className="flex justify-center items-start">
                            <Image
                                src="/Calculators/DreamHome.jpg"
                                alt="Goal Calculator"
                                width={530}
                                height={620}
                                className="rounded-2xl shadow-2xl"
                            />
                        </Box>
                    )}

                    {/* RIGHT FORM + TEXT */}
                    <Box display={"flex"} flexDirection="column" gap={isMobile ? 6 : 12} py={isMobile ? 2 : isTablet ? 4 : 6} px={isMobile ? 2 : isTablet ? 4 : 10} alignItems={"center"}>

                        {/* Heading */}
                        <Box
                            sx={{

                                textAlign: "left",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 2,
                            }}
                        >
                            <GradientHeading text="निवृत्ती" sx={{ alignItems: "flex-start", }} />

                            <Typography
                                fontSize={16}
                                textAlign={isMobile ? "left" : "center"}
                                className="text-gray-600 mt-2"
                                sx={{ maxWidth: 520 }}   // optional: keeps line-length neat
                            >
                                स्वप्नातील घरासाठी आवश्यक खर्च, बचत आणि गुंतवणूक
                                समजून घेऊन आपला आर्थिक नियोजन सुरू करा
                            </Typography>
                        </Box>

                        {/* FORM CARD */}
                        <Box
                            p={isMobile ? 4 : isTablet ? 4 : 6}
                            // border={1}
                            display="flex"
                            flexDirection="column"
                            gap={3}
                            sx={{ backgroundColor: "white" }}
                            borderRadius={6}
                            boxShadow={8}
                            width="100%"     // remember this
                        >
                            <Box
                                display="flex"
                                gap={2}
                                mb={2}
                                width="100%"
                                justifyContent="center"
                            >
                                <Button
                                    variant={calculationMode === "simple" ? "contained" : "outlined"}
                                    color="success"
                                    onClick={() => setCalculationMode("simple")}
                                >
                                    Simple Estimate
                                </Button>

                                <Button
                                    variant={calculationMode === "detailed" ? "contained" : "outlined"}
                                    color="success"
                                    onClick={() => setCalculationMode("detailed")}
                                >
                                    Detailed Retirement Planning (Recommended)
                                </Button>
                            </Box>

                            <TextField
                                fullWidth
                                label="Your current age (Years)"
                                value={currentAge}
                                onChange={(e) => setCurrentAge(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Your retirement age (Years)"
                                value={retirementAge}
                                onChange={(e) => setRetirementAge(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Your life expectancy (Years)"
                                value={lifeExpectancy}
                                onChange={(e) => setLifeExpectancy(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Current monthly household expenses (₹)"
                                value={monthlyExpense}
                                onChange={(e) => setMonthlyExpense(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Inflation Rate (%)"
                                value={inflationRate}
                                onChange={(e) => setInflationRate(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="You have already saved (₹)"
                                value={alreadySaved}
                                onChange={(e) => setAlreadySaved(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="Name of the goal"
                                value={goalName}
                                onChange={(e) => setGoalName(e.target.value)}
                            />

                            <TextField
                                fullWidth
                                label="You have already saved (₹)"
                                value={alreadySaved}
                                onChange={(e) => setAlreadySaved(e.target.value)}
                            />


                            <FormControl fullWidth>
                                <InputLabel>Select Risk Profile</InputLabel>
                                <Select
                                    value={risk}
                                    label="Select Risk Profile"
                                    onChange={(e) => setRisk(e.target.value)}
                                >
                                    {Object.keys(RISK_RETURN_MAP).map(item => (
                                        <MenuItem key={item} value={item}>
                                            {item}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>






                            <RedButton
                                fullWidth
                                sx={{ mt: 3, py: 1.2 }}
                                onClick={() =>
                                    calculationMode === "simple"
                                        ? calculateSimpleRetirement()
                                        : calculateRetirement()
                                }
                            >
                                निवृत्तीचा प्लॅन काढा
                            </RedButton>



                        </Box>

                    </Box>

                </Box>
            </Box>

            {/* GREEN GRADIENT BACKGROUND */}
            <Box
                className="
                    absolute bottom-40 left-0 
                    w-full h-[680px]
                    bg-gradient-to-r 
                    from-[#0F3443] 
                    to-[#34E89E]
                "
            />

        </Box>

            {/* PLAN RESULT SECTION */}
            {result && (
                <Box ref={resultRef} mt={10}>
                    <RetirementPlanResult
                        mode={result.mode}
                        retirementCorpus={result.retirementCorpus}
                        inflatedMonthlyExpense={result.inflatedMonthlyExpense}
                        futureSavings={result.futureSavings}   // ⭐ ADD THIS
                        monthlySip={result.monthlySip}
                        yearsToRetirement={result.yearsToRetirement}
                        assumedReturn={result.assumedReturn}
                        riskProfile={result.riskProfile}
                    />



                </Box>
            )}



            {/* OTHER CALCULATORS */}
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="इतर आर्थिक कॅल्क्युलेटर" />

                <Box
                    className="
            max-w-8xl
            mx-auto
            px-4
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-14
            mt-8
        "
                >
                    {CALCULATORS
                        .filter(item => item.key !== "retirement")   // ⭐ THIS IS THE CONDITION
                        .map(item => (
                            <GoalOptionCard
                                key={item.key}
                                title={item.title}
                                Icon={item.Icon}
                                iconSize={isMobile ? 100 : 120}
                                backgroundGradient={item.backgroundGradient}
                                iconGradient={item.iconGradient}
                                onClick={() => item.path && router.push(item.path)}
                            />
                        ))}
                </Box>
            </Box>



        </>

    );
}
