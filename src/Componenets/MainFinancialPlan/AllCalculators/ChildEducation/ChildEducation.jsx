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
import GoalOptionCard from "@/Componenets/Common/GoalOptionCard/GoalOptionCard";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import ChildEducationPlanResult from "./ChildEducationPlanResult";

export default function ChildEducation() {

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
    const [years, setYears] = useState("");
    const [amount, setAmount] = useState("");
    const [inflation, setInflation] = useState("");
    const [goalName, setGoalName] = useState("");
    const [risk, setRisk] = useState("");

    const [result, setResult] = useState(null);


    // CALCULATION FUNCTION
    const calculateChildEducationGoal = () => {
        if (!years || !amount || !inflation || !risk) {
            alert("कृपया सर्व माहिती भरा");
            return;
        }

        const yearsNum = Number(years);
        const amountNum = Number(amount);
        const inflationNum = Number(inflation);

        const annualReturn = RISK_RETURN_MAP[risk] || 0.08;

        // Inflation adjusted future value
        const futureValue =
            amountNum * Math.pow(1 + inflationNum / 100, yearsNum);

        // SIP calculation
        const monthlyReturn = annualReturn / 12;
        const totalMonths = yearsNum * 12;

        const monthlySIP =
            (futureValue * monthlyReturn) /
            (Math.pow(1 + monthlyReturn, totalMonths) - 1);

        const finalResult = {
            goalName,
            targetedAmount: Math.round(amountNum),
            futureValue: Math.round(futureValue),
            years: yearsNum,
            monthlySip: Math.round(monthlySIP),
            assumedReturn: annualReturn * 100, // %
            riskProfile: risk,
        };

        setResult(finalResult);

        // smooth scroll
        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
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
            path: "/financial-planning/child-education",
            backgroundGradient: "linear-gradient(135deg, #373B44, #4286F4)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "marriage",
            title: "मुलाचे लग्न",
            Icon: GiLoveLetter,
            path: "/financial-planning/child-marriage",
            backgroundGradient: "linear-gradient(135deg, #0F3443, #34E89E)",
            iconGradient: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
        },
        {
            key: "emergency",
            title: "आणीबाणी",
            Icon: GrEmergency,
            path: "/financial-planning/emergency",
            backgroundGradient: "linear-gradient(135deg, #EAAFC8, #654EA3)",
            iconGradient: "linear-gradient(135deg, rgba(101,78,163,1), rgba(234,175,200,1))",
        },
    ];






    return (
        <>
            <Box className="relative w-full bg-white overflow-hidden">

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
                                    src="/Calculators/ChildEducation.jpg"
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
                                <GradientHeading text="मुलांचे शिक्षण" sx={{ alignItems: "flex-start", }} />

                                <Typography
                                    fontSize={16}
                                    textAlign={isMobile ? "left" : "center"}
                                    className="text-gray-600 mt-2"
                                    sx={{ maxWidth: 520 }}   // optional: keeps line-length neat
                                >
                                   मुलांच्या शिक्षणासाठी आजची योग्य गुंतवणूक, उद्याच्या यशाची भक्कम पायाभरणी ठरते.
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
                                <TextField
                                    fullWidth
                                    label="Saving Periods in Years"
                                    value={years}
                                    onChange={(e) => setYears(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    label="Amount need to save for home (₹)"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    label="Inflation Rate (%)"
                                    value={inflation}
                                    onChange={(e) => setInflation(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    label="Name of the goal"
                                    value={goalName}
                                    onChange={(e) => setGoalName(e.target.value)}
                                />

                                <FormControl fullWidth>
                                    <InputLabel>Select Risk Profile</InputLabel>
                                    <Select
                                        value={risk}
                                        label="Select Risk Profile"
                                        onChange={(e) => setRisk(e.target.value)}
                                    >
                                        {Object.keys(RISK_RETURN_MAP).map((item) => (
                                            <MenuItem key={item} value={item}>
                                                {item}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <RedButton
                                    fullWidth
                                    sx={{ mt: 3, py: 1.2 }}
                                    onClick={calculateChildEducationGoal}
                                >
                                    शिक्षण नियोजन काढा
                                </RedButton>


                            </Box>

                        </Box>

                    </Box>
                </Box>

                {/* GREEN GRADIENT BACKGROUND */}
                <Box
                    className="
                        absolute bottom-0 left-0 
                        w-full h-[480px]
                        bg-gradient-to-r 
                        from-[#373B44] 
                        to-[#4286F4]
                    "
                />

            </Box>

            {/* PLAN RESULT SECTION */}
            {result && (
                <Box ref={resultRef} mt={10}>
                    <ChildEducationPlanResult
                        targetedAmount={result.targetedAmount}
                        futureValue={result.futureValue}
                        monthlySip={result.monthlySip}
                        years={result.years}
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
                        .filter(item => item.key !== "education")   // ⭐ THIS IS THE CONDITION
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
