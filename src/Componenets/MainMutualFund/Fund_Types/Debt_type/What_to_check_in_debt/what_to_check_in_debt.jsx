import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading'
import StatusPill from '@/Componenets/Common/StatusPill/StatusPill'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';
import React from 'react'

const What_to_check_in_debt = () => {

        const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <div>
            <div>
                <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
                    <GradientHeading text="Equity Mutual Fund मध्ये गुंतवणूक का करावी?" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <StatusPill
                            icon={<PlagiarismRoundedIcon />}
                            text="मागील कामगिरी"
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />
                        <StatusPill
                            icon={<PlagiarismRoundedIcon />}
                            text="AMC ची कर्ज रोखे अनुभव"
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />
                        <StatusPill
                            icon={<PlagiarismRoundedIcon />}
                            text="फंड मॅनेजरची कामगिरी"
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />
                        <StatusPill
                            icon={<PlagiarismRoundedIcon />}
                            text="पोर्टफोलिओतील कर्ज रोखे"
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />
                        <StatusPill
                            icon={<PlagiarismRoundedIcon />}
                            text="रेटिंग (High rating = Low risk)"
                            bgColor="#FFF7CF"
                            borderColor="#FFD400"
                            textColor="#111827"
                        />


                    </div>
                </Box>
            </div>
        </div>
    )
}

export default What_to_check_in_debt