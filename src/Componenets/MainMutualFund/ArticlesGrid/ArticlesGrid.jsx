"use client";

import ArticleCard from "@/Componenets/Common/ArticleCard/ArticleCard";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ArticlesGrid() {
    const articles = [
        {
            date: "22/12/2018",
            title: "शेअर बाजार संबंधी योजनांचे गुंतवणूक का करावी?",
            cta: "आता वाचा",
        },
        {
            date: "22/12/2018",
            title: "शेअर बाजार संबंधी योजनांचे गुंतवणूक का करावी?",
            cta: "आता वाचा",
        },
        {
            date: "22/12/2018",
            title: "शेअर बाजार संबंधी योजनांचे गुंतवणूक का करावी?",
            cta: "आता वाचा",
        },
        {
            date: "22/12/2018",
            title: "शेअर बाजार संबंधी योजनांचे गुंतवणूक का करावी?",
            cta: "आता वाचा",
        },
    ];


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box display={"flex"} flexDirection={"column"} p={isMobile ? 4 : 10} gap={6}>
            <GradientHeading text="म्युच्युअल फंडावरील लेख वाचा" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item, index) => (
                    <ArticleCard
                        key={index}
                        date={item.date}
                        title={item.title}
                        cta={item.cta}
                    />
                ))}
            </div>
        </Box>

    );
}
