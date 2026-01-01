"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const SUITABLE_FOR_WHOM = [
    {
        icon: "🧑‍🦳",
        heading: "कमी जोखीम हवी असेल",
        borderColor: "#4ADE80",
        bgColor: "#ECFDF5",
        headingColor: "#166534",
    },
    {
        icon: "🏦",
        heading: "बँक ठेवींना पर्याय हवा असेल",
        borderColor: "#60A5FA",
        bgColor: "#EFF6FF",
        headingColor: "#1D4ED8",
    },
    {
        icon: "⏳",
        heading: "मुदत गुंतवणूक",
        borderColor: "#FBBF24",
        bgColor: "#FFFBEB",
        headingColor: "#92400E",
    },
];

const Suitable_whom = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={6}>
            <GradientHeading text="जोखीम आणि परतावा" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SUITABLE_FOR_WHOM.map((item, index) => (
                    <ScrollReveal>
                        <InfoBox
                            key={index}
                            icon={<span style={{ fontSize: 22 }}>{item.icon}</span>}
                            heading={item.heading}
                            borderColor={item.borderColor}
                            bgColor={item.bgColor}
                            headingColor={item.headingColor}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </Box>
    );
};

export default Suitable_whom;
