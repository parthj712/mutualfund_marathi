"use client";

import { useRef } from "react";
import Image from "next/image";
import { Box, Typography, TextField, Button, useTheme, useMediaQuery } from "@mui/material";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RedButton from "@/Componenets/Common/RedButton";
import DreamHomePlanResult from "./DreamHomePlanResult";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { GiWhiteBook } from "react-icons/gi";
import { GiLoveLetter } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";



import { useState } from "react";
import GoalOptionCard from "@/Componenets/Common/GoalOptionCard/GoalOptionCard";
import { useRouter } from "next/navigation";

export default function DreamHome() {

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
    const calculateDreamHome = () => {
        const Y = Number(years);
        const A = Number(amount);
        const I = Number(inflation) / 100;

        if (!Y || !A || !I || !risk) return;

        const futureValue = A * Math.pow(1 + I, Y);

        const annualReturn = RISK_RETURN_MAP[risk];
        const monthlyRate = annualReturn / 12;
        const months = Y * 12;

        const sip =
            (futureValue * monthlyRate) /
            (Math.pow(1 + monthlyRate, months) - 1);

        setResult({
            targetedAmount: A,
            futureValue: Math.round(futureValue),
            monthlySip: Math.round(sip),
            years: Y,
            assumedReturn: annualReturn * 100,
            riskProfile: risk,
        });

        // ⬇️ AUTO SCROLL
        setTimeout(() => {
            resultRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
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
                            <GradientHeading text="स्वप्नातील घर" sx={{ alignItems: "flex-start", }} />

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
                                onClick={calculateDreamHome}
                            >
                                स्वप्नातील घराचे प्लॅन काढा
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
                    from-[#0F3443] 
                    to-[#34E89E]
                "
            />

        </Box>

            {/* PLAN RESULT SECTION */}
            {result && (
                <Box ref={resultRef} mt={10}>
                    <DreamHomePlanResult
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
                        .filter(item => item.key !== "dream-home")   // ⭐ THIS IS THE CONDITION
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
