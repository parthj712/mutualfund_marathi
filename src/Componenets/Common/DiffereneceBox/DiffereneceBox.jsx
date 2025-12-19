"use client";

import { Box, Typography } from "@mui/material";

export default function DiffereneceBox({
    title,
    titleBgColor = "#EF4444",
    titleColor = "#FFFFFF",

    bgColor = "#FEF2F2",
    borderColor = "transparent",

    items = [], // [{ heading, description }]

    sx = {},
}) {
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
                        fontWeight={700}
                        fontSize="20px"
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
                        <Typography fontWeight={700} fontSize="18px" mb={0.5}>
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
