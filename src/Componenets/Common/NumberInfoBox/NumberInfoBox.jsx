"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function NumberInfoBox({
    number = null, // ← important

    text,
    subText,

    bgColor = "#F3E8FF",
    borderColor = "#E9D5FF",

    textColor = "#5B21B6",
    subTextColor = "#6D28D9",

    numberBgColor = "#7C3AED",
    numberColor = "#FFFFFF",

    borderRadius = "12px",
    sx = {},
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const showNumber = number !== null && number !== "";

    return (
        <Box
            sx={{
                display: "flex",
                gap: showNumber ? 2 : 0, // ← no empty space
                alignItems: "flex-start",
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                borderRadius,
                p: { xs: 2, sm: 2.5 },
                ...sx,
            }}
        >
            {/* Number Circle (ONLY if number exists) */}
            {showNumber && (
                <Box
                    sx={{
                        minWidth: 42,
                        height: 42,
                        borderRadius: "8px",
                        backgroundColor: numberBgColor,
                        color: numberColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: isMobile ? "16px" : "18px",
                        flexShrink: 0,
                    }}
                >
                    {number}
                </Box>
            )}

            {/* Text Content */}
            <Box display="flex" flexDirection="column" gap={1.5}>
                {text && (
                    <Typography
                        fontWeight={600}
                        fontSize={isMobile ? "18px" : "20px"}
                        sx={{ color: textColor }}
                    >
                        {text}
                    </Typography>
                )}

                {subText && (
                    <Typography
                        fontSize={isMobile ? "16px" : "18px"}
                        lineHeight={1.7}
                        fontWeight={500}
                        sx={{ color: subTextColor }}
                    >
                        {subText}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
