"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import NumberInfoBox from '@/Componenets/Common/NumberInfoBox/NumberInfoBox';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { DEBT_FUND_ADVANTAGES } from './DEBT_FUND_ADVANTAGES';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';


const Debt_Type_Advantages = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={6}>
            <GradientHeading text="Debt Fund चे फायदे" />

            <div className="grid grid-cols-1 gap-6">
                {DEBT_FUND_ADVANTAGES.map((item, index) => (
                    <ScrollReveal>
                        <NumberInfoBox
                            key={index}
                            number={item.number}
                            text={item.text}
                            subText={item.subText}
                            bgColor={item.bgColor}
                            borderColor={item.borderColor}
                            numberBgColor={item.numberBgColor}
                            textColor={item.textColor}
                            subTextColor={item.subTextColor}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </Box>
    );
};

export default Debt_Type_Advantages;
