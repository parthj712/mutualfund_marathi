"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function InfoBox({
    icon = null,

    heading,
    subText,

    borderColor = "#F87171",      // red-400
    bgColor = "#FEE2E2",          // red-100

    headingColor = "#B91C1C",     // heading text color
    subTextColor = "#7F1D1D",     // sub text color

    sx = {},
}) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                border: `1.5px solid ${borderColor}`,
                backgroundColor: bgColor,
                borderRadius: "16px",
                padding: { xs: 2.5, sm: 3 },
                display: "flex",
                justifyContent: "center",
                gap: 2,
                alignItems: "center",
                ...sx, // 🔥 full style override
            }}
        >
            {/* Icon */}
            {icon && (
                <Box sx={{ fontSize: 22 }}>
                    {icon}
                </Box>
            )}

            {/* Text */}
            <Box display="flex" flexDirection="column" gap={1}>
                {heading && (
                    <Typography
                        fontWeight={700}
                        fontSize="20px"
                        sx={{ color: headingColor }}
                    >
                        {heading}
                    </Typography>
                )}

                {subText && (
                    <Typography
                        fontSize={isMobile ? "16px" : "18px"}
                        lineHeight={1.7}
                        sx={{ color: subTextColor }}
                    >
                        {subText}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
