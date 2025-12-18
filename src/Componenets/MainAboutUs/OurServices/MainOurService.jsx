import React from 'react'
import MobileServicesGrid from './MobileServicesGrid'
import OurServices from './OurServices'
import { useMediaQuery, useTheme } from '@mui/material';

const MainOurService = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <div>
            <>
                {isMobile ? <MobileServicesGrid /> : <OurServices />}
            </>
        </div>
    )
}

export default MainOurService