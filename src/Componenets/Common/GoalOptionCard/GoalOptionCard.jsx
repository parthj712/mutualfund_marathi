"use client";

import { Box, Typography } from "@mui/material";

export default function GoalOptionCard({
    /* TEXT */
    title,
    titleColor = "white",

    /* ICON */
    Icon,
    iconSize = 120,
    iconGradient = "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",

    /* BACKGROUND */
    backgroundGradient = "linear-gradient(135deg, #0B3C49, #2FE88F)",

    /* STYLING */
    borderRadius = 5,
    border = "none",
}) {


    
    return (
        <Box
            sx={{
                pt: 3,
                pb: 2,
                pl: 5,
                pr: 2,
                borderRadius,
                background: backgroundGradient,
                border,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                },

                /* 🔥 HOVER TARGETS */
                "&:hover .goal-title": {
                    transform: "scale(1.05)",
                },
                "&:hover .goal-icon": {
                    transform: "scale(1.15)",
                    opacity: 0.5,
                },
            }}
        >
            {/* FLEX CONTAINER */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                {/* TITLE */}
                <Typography
                    className="goal-title"
                    sx={{
                        fontSize: { xs: 22, sm: 24 },
                        fontWeight: 700,
                        color: titleColor,
                        transition: "transform 0.3s ease",
                        transformOrigin: "left top",
                    }}
                >
                    {title}
                </Typography>

                {/* ICON */}
                {Icon && (
                    <Box
                        className="goal-icon"
                        sx={{
                            alignSelf: "flex-end",
                            fontSize: iconSize,
                            opacity: 0.35,
                            background: iconGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            transition: "transform 0.35s ease, opacity 0.35s ease",
                            transformOrigin: "bottom right",
                        }}
                    >
                        <Icon size={iconSize} />
                    </Box>
                )}
            </Box>
        </Box>
    );
}
