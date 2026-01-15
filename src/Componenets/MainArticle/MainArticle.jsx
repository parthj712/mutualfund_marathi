"use client";

import React, { useState } from "react";
import HeaderMutualFund from "../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund";
import {
    Box,
    useMediaQuery,
    useTheme,
    FormControl,
    Select,
    MenuItem,
    Typography,
} from "@mui/material";

import ArticlesGrid from "./ArticlesGrid/ArticlesGrid";
import { ARTICLE_CATEGORIES } from "./article";


const MainArticle = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [category, setCategory] = useState("all");

    return (
        <div>
            <HeaderMutualFund
                image="/Header/Blogs.jpg"
                heading="लेख"
                description="योग्य आर्थिक निर्णय घेण्यासाठी तज्ज्ञांच्या अनुभवातून लिहिलेले लेख"
                imagePosition="left"
                radius={100}
            />

            <Box
                display="flex"
                flexDirection="column"
                px={isMobile ? 4 : 10}
                py={6}
                gap={4}
            >
                {/* FILTER DROPDOWN */}
                <Box display="flex" justifyContent="flex-end">
                    <FormControl size="small" sx={{ minWidth: 220 }}>
                        <Select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            displayEmpty
                            sx={{
                                borderRadius: 2,
                                backgroundColor: "#fff",
                            }}
                        >
                            {ARTICLE_CATEGORIES.map((cat) => (
                                <MenuItem key={cat.value} value={cat.value}>
                                    <Typography>{cat.label}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* ARTICLES GRID */}
                <ArticlesGrid showHeading={false} category={category} />
            </Box>
        </div>
    );
};

export default MainArticle;
