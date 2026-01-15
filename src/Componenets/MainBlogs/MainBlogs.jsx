"use client";

import React, { useState } from "react";
import HeaderMutualFund from "../MainMutualFund/HeaderMutualFund.jsx/HeaderMutualFund";
import BlogsCard from "./BlogsCard/BlogsCard";

import {
  Box,
  useMediaQuery,
  useTheme,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const MainBlogs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [category, setCategory] = useState("all");

  const handleChange = (event) => {
    setCategory(event.target.value);
    // 👉 later: pass this value to BlogsCard for filtering
  };

  return (
    <div>
      <HeaderMutualFund
        image="/Header/Blogs.jpg"
        heading="ब्लॉग्ज"
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
        {/* <Box display="flex" justifyContent="flex-end">
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <Select
              value={category}
              onChange={handleChange}
              displayEmpty
              sx={{
                borderRadius: 2,
                backgroundColor: "#fff",
              }}
            >
              <MenuItem value="all">
                <Typography>सर्व ब्लॉग्ज</Typography>
              </MenuItem>
              <MenuItem value="Mutual fund">What is Mutual Fund</MenuItem>
              <MenuItem value="shares">Mutual Fund in Shares</MenuItem>
              <MenuItem value="Future And Options">
                Mutual Fund in F &amp; O
              </MenuItem>
            </Select>
          </FormControl>
        </Box> */}

        {/* BLOG LIST */}
        <BlogsCard selectedCategory={category} />
      </Box>
    </div>
  );
};

export default MainBlogs;
