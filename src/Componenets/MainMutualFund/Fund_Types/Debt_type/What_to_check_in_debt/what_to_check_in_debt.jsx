"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';
import React from 'react';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';

const WHAT_TO_CHECK_IN_DEBT = [
    "मागील कामगिरी",
    "AMC ची कर्ज रोखे अनुभव",
    "फंड मॅनेजरची कामगिरी",
    "पोर्टफोलिओतील कर्ज रोखे",
    "रेटिंग (High rating = Low risk)",
];

const What_to_check_in_debt = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={6}>
            <GradientHeading text="Debt Mutual Fund मध्ये गुंतवणूक करताना काय तपासावे?" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WHAT_TO_CHECK_IN_DEBT.map((text, index) => (
                    <ScrollReveal>
                        <StatusPill
                            key={index}
                            icon={<PlagiarismRoundedIcon />}
                            text={text}
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />
                    </ScrollReveal>
                ))}
            </div>
        </Box>
    );
};

export default What_to_check_in_debt;
