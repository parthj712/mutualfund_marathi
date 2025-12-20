"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function DiffereneceBox({
    title,
    titleBgColor = "#EF4444",
    titleColor = "#FFFFFF",

    bgColor = "#FEF2F2",
    borderColor = "transparent",

    items = [], // [{ heading, description }]

    sx = {},




}) {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
            sx={{
                borderRadius: "20px",
                overflow: "hidden",
                backgroundColor: bgColor,
                border: borderColor !== "transparent" ? `1px solid ${borderColor}` : "none",
                ...sx,

            }}
        >
            {/* Header */}
            {title && (
                <Box
                    sx={{
                        backgroundColor: titleBgColor,
                        py: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography
                        fontWeight={isMobile ? 600 : 700}
                        fontSize={isMobile ? "18px" : "24px"}
                        sx={{ color: titleColor }}
                    >
                        {title}
                    </Typography>
                </Box>
            )}

            {/* Content */}
            <Box p={4} display="flex" flexDirection="column" gap={3}>
                {items.map((item, index) => (
                    <Box key={index}>
                        <Typography fontWeight={isMobile ? 600 : 700} fontSize="18px" mb={0.5}>
                            {item.heading}
                        </Typography>

                        <Typography fontSize="16px" lineHeight={1.7}>
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
