"use client";

import { Button } from "@mui/material";

export default function RedButton({
    children,
    onClick,
    sx,
    bg,          // optional background color
    textColor,   // optional text color
    ...rest
}) {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: bg || "", // ✅ default red
                borderRadius: "10px",
                px: 3,
                py: 1,
                fontSize: "18px",
                fontWeight: 600,
                color: textColor || "white",     // ✅ default white
                textTransform: "none",
                "&:hover": {
                    backgroundColor: bg
                        ? bg
                        : "003859",                  // darker red hover
                    opacity: 0.9,
                },
                ...sx,
            }}
            {...rest}
        >
            {children}
        </Button>
    );
}
