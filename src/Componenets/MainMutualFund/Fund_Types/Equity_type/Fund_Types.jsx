"use client";

import React from 'react'
import HeaderMutualFund from '../../HeaderMutualFund.jsx/HeaderMutualFund'
import { Box, useMediaQuery, useTheme } from '@mui/material';
import DisclaimerBox from '@/Componenets/Common/DisclaimerBox/DisclaimerBox';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import { HiExclamationTriangle } from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";
import DiffereneceBox from '@/Componenets/Common/DiffereneceBox/DiffereneceBox';
import EquityFundStepper from './EquityFundStepper/EquityFundStepper';
import RiskNReturn from './RiskNReturn/RiskNReturn';
import SIP_Is_Best_Option from './SIP_Is_Best_Option/SIP_Is_Best_Option';
import Equity_Types from './Equity_Types/Equity_Types';
import RiskVsReturn from './RiskVsReturn/RiskVsReturn';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';
import How_to_invest_equity from './How_to_invest_equity/How_to_invest_equity';


const Fund_Types = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            <HeaderMutualFund
                image="/Header/EquityTrade.jpg"
                heading="म्युच्युअल फंडाचे प्रकार"
                description="प्रकार I - समभाग आधारित"
                imagePosition="left"
                radius={100}
            />



            <Box
                p={isMobile ? 3 : 6}
                display="flex"
                flexDirection="column"
                gap={6}
                mx={isMobile ? 4 : 8}
                my={8}
                className="
                bg-white 
                shadow-md 
                rounded-2xl 
                border-t-4 border-gray-200
                max-w-8xl
              "
            >
                <DisclaimerBox
                    icon={CandlestickChartIcon}
                    title="Equity Mutual Fund म्हणजे काय?"
                    description={`समभाग आधारित योजनांमध्ये गुंतवणूक केलेले पैसे वेगवेगळ्या कंपन्यांच्या शेअर्समध्ये गुंतवले जातात. या योजनांमध्ये बाजाराशी निगडीत जोखीम असते, मात्र दीर्घ मुदतीत परतावा जास्त मिळण्याची शक्यता असते.`}
                />
            </Box>

            <ScrollReveal>
                <EquityFundStepper />
            </ScrollReveal>

            {/* <ScrollReveal>
                <RiskNReturn />
            </ScrollReveal> */}

            <ScrollReveal>
                <RiskVsReturn />
            </ScrollReveal>


            <ScrollReveal>
                <SIP_Is_Best_Option />
            </ScrollReveal>

            <ScrollReveal>
                <Equity_Types />
            </ScrollReveal>

            <How_to_invest_equity />



        </div>
    )
}

export default Fund_Types