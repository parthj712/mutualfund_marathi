import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import GppGoodRoundedIcon from '@mui/icons-material/GppGoodRounded';
import React from 'react'

const How_to_invest_equity = () => {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                <GradientHeading text="Equity Mutual Fund मध्ये गुंतवणूक का करावी?" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="मागील कामगिरी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="मुलांच्या शिक्षणासाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="मुलांच्या विवाहासाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="रिटायरमेंट प्लॅनिंग"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="संपत्ती निर्माण करण्यासाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="घर खरेदीसाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="गाडी घेण्यासाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />
                    <StatusPill
                        icon={<GppGoodRoundedIcon />}
                        text="सहली / प्रवासासाठी"
                        bgColor="#F0FFF6"
                        borderColor="#68FF9F"
                        textColor="#111827"
                    />

                </div>
            </Box>
        </div>
    )
}

export default How_to_invest_equity