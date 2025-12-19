"use client";

import { Box, Typography } from "@mui/material";

export default function NumberInfoBox({
    number = "1",

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
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                alignItems: "flex-start",
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                borderRadius,
                p: { xs: 2, sm: 2.5 },
                ...sx,
            }}
        >
            {/* Number Circle */}
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
                    fontSize: "18px",
                }}
            >
                {number}
            </Box>

            {/* Text Content */}
            <Box display="flex" flexDirection="column" gap={1.5}>
                {text && (
                    <Typography
                        fontWeight={700}
                        fontSize="20px"
                        sx={{ color: textColor }}
                    >
                        {text}
                    </Typography>
                )}

                {subText && (
                    <Typography
                        fontSize="18px"
                        lineHeight={1.7}
                        fontWeight={600}
                        sx={{ color: subTextColor }}
                    >
                        {subText}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
