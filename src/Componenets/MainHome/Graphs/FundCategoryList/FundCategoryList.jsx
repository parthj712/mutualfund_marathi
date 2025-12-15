"use client";

import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import FundCategoryCard from "../FundCategoryCard/FundCategoryCard";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function FundCategoryList() {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));



    const categories = [
        { imgSrc: "/Graphs/G1.png", title: "लार्ज कॅप फंड" },
        { imgSrc: "/Graphs/G2.png", title: "मिड आणि स्मॉल कॅप फंड" },
        { imgSrc: "/Graphs/G3.png", title: "संतुलित फंड" },
    ];

    return (
        <Box
            p={isMobile ? 4 : 10}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            className="w-full"
        >

            {/* Make content centered + same width as cards */}
            <div className="w-full flex flex-col items-center gap-20">

                <GradientHeading text="योग्य जोखिम, अधिक परतावा" />

                {/* Graph Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-40 md:gap-16">
                    {categories.map((item, i) => (
                        <FundCategoryCard
                            key={i}
                            imgSrc={item.imgSrc}
                            title={item.title}
                        />
                    ))}
                </div>

            </div>
        </Box>
    );
}
