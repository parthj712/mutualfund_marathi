"use client";

import React from 'react'
import HeaderMutualFund from '../../HeaderMutualFund.jsx/HeaderMutualFund'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import DisclaimerBox from '@/Componenets/Common/DisclaimerBox/DisclaimerBox'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import Suitable_whom from './Suitable_whom/Suitable_whom';
import Debt_Fund_Type from './Debt_Fund_Type/Debt_Fund_Type';
import InvestmentSummaryCard from './InvestmentSummaryCard/InvestmentSummaryCard';
import Debt_Type_Advantages from './Debt_Type_Advantages/Debt_Type_Advantages';
import What_to_check_in_debt from './What_to_check_in_debt/what_to_check_in_debt';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';


const Debt_type = () => {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <div>
            <HeaderMutualFund
                image="/Header/Debt.jpg"
                heading="म्युच्युअल फंडाचे प्रकार"
                description="प्रकार II - कर्ज रोखे आधारित योजना"
                imagePosition="left"
                radius={100}
            />


            <ScrollReveal>
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
                        title="कर्ज रोखे म्हणजे काय?"
                        description={`कर्ज रोखे आधारित योजनांमध्ये पैसे निश्चित उत्पन्न देणाऱ्या साधनांमध्ये गुंतवले जातात. यामध्ये शेअर बाजाराची जोखीम नसते, त्यामुळे जोखीम तुलनेने कमी असते.`}
                    />
                </Box>
            </ScrollReveal>

            <Suitable_whom />

            <ScrollReveal>
                <InvestmentSummaryCard />
            </ScrollReveal>

            <ScrollReveal>
                <Debt_Type_Advantages />
            </ScrollReveal>


            <ScrollReveal>
                <Debt_Fund_Type />
            </ScrollReveal>

            <ScrollReveal>
                <What_to_check_in_debt />
            </ScrollReveal>
        </div>
    )
}

export default Debt_type