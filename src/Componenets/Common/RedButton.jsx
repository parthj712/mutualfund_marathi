"use client";

import { Button } from "@mui/material";

export default function RedButton({
    children,
    onClick,
    sx,
    bg,        // optional background color
    textColor,
    ...rest
}) {
    const baseColor = bg || "#1976d2"; // 🔵 default blue
    const lightColor = bg
        ? `${bg}CC` // lighter version of passed color
        : "#42a5f5";

    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                position: "relative",
                overflow: "hidden",

                /* 🔥 Animated gradient background */
                background: `linear-gradient(
          120deg,
          ${baseColor},
          ${lightColor},
          ${baseColor}
        )`,
                backgroundSize: "200% 200%",
                animation: "gradientMove 4s ease infinite",

                borderRadius: "12px",
                px: 2,
                py: 1.4,
                fontSize: "18px",
                fontWeight: 600,
                color: textColor || "white",
                textTransform: "none",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)",

                "&:hover": {
                    animationDuration: "2s", // faster on hover
                    opacity: 0.95,
                },

                ...sx,

                /* 🔑 KEYFRAMES */
                "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}
