"use client";


import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { GiMoneyStack } from "react-icons/gi";
import { FaPiggyBank } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FaCarRear } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { HiCalculator } from "react-icons/hi2";
import { GiWallet } from "react-icons/gi";
import { GrEmergency } from "react-icons/gr";
import { useRouter } from "next/navigation";
import GoalOptionCard from '../Common/GoalOptionCard/GoalOptionCard';
import GradientHeading from '../Common/GradientHeading/GradientHeading';
import HeaderMutualFund from '../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund';
import SIP_Calculator from './AllCalculators/SIP_Calculator/SIP_Calculator';
import SliderInputRange from '../Common/SliderInputRange/SliderInputRange';


const MainCalculator = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const router = useRouter();


    return (
        <div>
            <HeaderMutualFund
                image="/Header/Calculator.jpg"
                heading="कॅल्क्युलेटर"
                description="तुमच्या स्वप्नांसाठी किती बचत आणि गुंतवणूक आवश्यक आहे, हे सोप्या कॅल्क्युलेटर्सद्वारे समजून घ्या.       "
                imagePosition="left"
                radius={100}
            />

            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>

                <div
                    className="
          max-w-8xl
          mx-auto
          px-4
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-1
          lg:grid-cols-4
          gap-14
        "
                >
                    <GoalOptionCard
                        title="करोडपती व्हा"
                        description="करोडपती होण्यासाठी किती बचत आणि गुंतवणूक आवश्यक आहे ते जाणून घ्या.."
                        Icon={GiMoneyStack}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #0F3443, #34E89E)"
                        iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
                        onClick={() => router.push("/calculator/become-crorepati")}
                    />
                    <GoalOptionCard
                        title="SIP"
                        description="तुमच्या SIP द्वारे तुम्हाला किती बचत करायची आहे किंवा किती जमा होईल याची गणना करा."
                        Icon={FaPiggyBank}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #EAAFC8, #654EA3)"
                        iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
                        onClick={() => router.push("/calculator/sip")}
                    />
                    <GoalOptionCard
                        title="EPF"
                        description="तुमच्या कर्मचारी भविष्य निर्वाह निधीसाठी (EPF) परतावा मोजा.."
                        Icon={FaChartPie}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #373B44, #4286F4)"
                        iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
                        onClick={() => router.push("/calculator/epf")}
                    />
                    <GoalOptionCard
                        title="PPF"
                        description="सार्वजनिक भविष्य निर्वाह निधी (PPF) वरील तुमच्या परताव्यांची गणना करा."
                        Icon={IoStatsChart}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #fc4a1a, #f7b733)"
                        iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
                        onClick={() => router.push("/calculator/ppf")}
                    />

                    <GoalOptionCard
                        title="कार कर्ज"
                        description="तुमच्या कार कर्जाच्या EMI ची गणना करा"
                        Icon={FaCarRear}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #fc4a1a, #f7b733)"
                        iconGradient="linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))"
                        onClick={() => router.push("/calculator/car-loan")}
                    />
                    <GoalOptionCard
                        title="होम लोन"
                        description="तुमच्या गृहकर्जाच्या ईएमआयची गणना करा."
                        Icon={HiHome}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #373B44, #4286F4)"
                        iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
                        onClick={() => router.push("/calculator/home-loan")}
                    />
                    <GoalOptionCard
                        title="ईएमआय (EMI)"
                        description="तुमच्या कर्जावरील ईएमआयची गणना करा गृहकर्ज, कार कर्ज किंवा वैयक्तिक कर्ज"
                        Icon={HiCalculator}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #EAAFC8, #654EA3)"
                        iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
                        onClick={() => router.push("/calculator/emi")}
                    />
                    <GoalOptionCard
                        title="कमी खर्च कॅल्क्युलेटर"
                        description="तुमच्या मासिक खर्चाचा अंदाज घेऊन आवश्यक बचत आणि गुंतवणूक समजून घ्या."
                        Icon={GiWallet}
                        iconSize={isMobile ? 100 : 120}
                        backgroundGradient="linear-gradient(135deg, #0F3443, #34E89E)"
                        iconGradient="linear-gradient(135deg, rgba(101,78,163,100), rgba(234,175,200,100))"
                        onClick={() => router.push("/calculator/low-expense-calculator")}
                    />
                </div>

            </Box>
        </div>
    )
}

export default MainCalculator