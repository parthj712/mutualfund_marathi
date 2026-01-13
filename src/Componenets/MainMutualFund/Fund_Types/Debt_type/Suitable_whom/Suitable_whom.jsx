"use client";

import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import InfoBox from '@/Componenets/Common/InfoBox/InfoBox';
import ScrollReveal from '@/Componenets/Common/ScrollReveal/ScrollReveal';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
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

            <Typography>
                या योजनेतील पैसे हे योजनेच्या उद्दिष्टांनुसार निश्चित उत्पन्न देणाऱ्या साधनात गुंतवले जातात. यामध्ये शेअर बाजाराची जोखीम असत नाही त्यामुळे या प्रकारच्या योजनेत तुलनेने कमी जोखीम असते. या प्रकारच्या योजनेच्या Fact Sheet मध्ये YTM (Yield to Maturity) म्हणजेच मुदत पुर्तीला मिळू शकणारे व्याजाचे उत्पन्न दर्शवलेले असते. तसेच सोबत (Average Maturity) कर्ज रोख्यांचा सरासरी मुदत संपण्याचा कालावधी दिलेला असतो. त्याचप्रमाणे योजनेचा (Total Expense Ratio) एकूण खर्चाचे प्रमाण यांचा उल्लेख केलेला असतो. याचा वापर करून आपल्याला या योजनेतून किती परतावा मिळू शकेल हे समजू शकते. जर का गुंतवणूक करणाऱ्या व्यक्तीने Average Maturity इतक्या कालावधीसाठी गुंतवणूक केली तर त्या व्यक्तीला YTM - Total Expense Ratio = मुदती नंतर मिळणारा परतावा योजनेतून मिळू शकतो समजू शकते.
            </Typography>
        </Box>
    );
};

export default Suitable_whom;
