"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import React from 'react';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';

const EQUITY_INVEST_REASONS = [
    "मागील कामगिरी",
    "मुलांच्या शिक्षणासाठी",
    "मुलांच्या विवाहासाठी",
    "रिटायरमेंट प्लॅनिंग",
    "घर खरेदीसाठी",
    "गाडी घेण्यासाठी",
    "सहली / प्रवासासाठी",
    "संपत्ती निर्माण करण्यासाठी",

];

const How_to_invest_equity = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={6}>
            <GradientHeading
                text="Equity Mutual Fund मध्ये गुंतवणूक का करावी?"
                align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {EQUITY_INVEST_REASONS.map((text, index) => (
                    <ScrollReveal>
                        <StatusPill
                            key={index}
                            icon={<GppGoodRoundedIcon />}
                            text={text}
                            fontSize={isMobile ? '16px' : "18px"}
                            bgColor="#F0FFF6"
                            borderColor="#68FF9F"
                            textColor="#111827"
                        />
                    </ScrollReveal>
                ))}
            </div>
        </Box>
    );
};

export default How_to_invest_equity;
