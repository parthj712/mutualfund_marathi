"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function OurTeam({ image, name, desc }) {
    const [hover, setHover] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    return (
        <Box
            display="flex"
            flexDirection={isMobile || isTablet ? "column" : "row"}
            className="gap-5 p-4 bg-white rounded-lg shadow hover:shadow-md transition-all"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* LEFT — IMAGE */}
            <Box
                sx={{
                    width: { xs: "100%", md: "100%", lg: "300px" },
                    height: "200px",
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    flexShrink: 0,
                }}
            >
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </Box>

            {/* RIGHT — CONTENT */}
            <Box display="flex" flexDirection="column" gap={1.5} flex="1" p={4}>
                {/* TITLE */}
                <Typography
                    fontSize={isMobile ? "18px" : isTablet ? "18px" : "20px"}
                    fontWeight={600}
                >
                    {name}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                    fontSize={isMobile ? "14px" : "15px"}
                    fontWeight={500}
                    
                >
                    {desc}
                </Typography>
            </Box>
        </Box>
    );
}
