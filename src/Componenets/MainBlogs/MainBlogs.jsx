"use client";

import React from 'react'
import HeaderMutualFund from '../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund'
import BlogsCard from './BlogsCard/BlogsCard'

import { Box, useMediaQuery, useTheme } from '@mui/material'

const MainBlogs = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));



    return (
        <div>
            <HeaderMutualFund
                image="/Header/Blogs.jpg"
                heading="ब्लॉग्ज"
                description="योग्य आर्थिक निर्णय घेण्यासाठी तज्ज्ञांच्या अनुभवातून लिहिलेले लेख"
                imagePosition="left"
                radius={100}
            />
            <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10}>

                <BlogsCard />
            </Box>
        </div>
    )
}

export default MainBlogs