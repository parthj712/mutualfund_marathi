import GradientHeading from '@/Componenets/Common/GradientHeading/GradientHeading';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import MutualFundWork from './MutualFundWork';

const HowMutualFundWork = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div>
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10}>
                <GradientHeading text="म्युचुअल फंड कसे काम करतात?" />
                <MutualFundWork />
            </Box>
        </div>
    )
}

export default HowMutualFundWork