"use client";

import React, { useEffect, useMemo, useState } from "react";
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
import API from "@/service/api";

const DEFAULT_CATEGORY = "म्युचुअल फंडाबाबत";

const MainArticle = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [articles, setArticles] = useState([]);

  const fetchArticle = async () => {
    try {
      const res = await API.get("/lekh/active-lekhs");
      setArticles(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  // ✅ Extract unique categories (NO "all")
  const categories = useMemo(() => {
    const unique = new Set(articles.map((a) => a.category));
    return [DEFAULT_CATEGORY, ...[...unique].filter(c => c !== DEFAULT_CATEGORY)];
  }, [articles]);

  return (
    <>
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
              sx={{ borderRadius: 2, backgroundColor: "#fff" }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  <Typography>{cat}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* ARTICLES GRID */}
        <ArticlesGrid articles={articles} category={category} />
      </Box>
    </>
  );
};

export default MainArticle;
