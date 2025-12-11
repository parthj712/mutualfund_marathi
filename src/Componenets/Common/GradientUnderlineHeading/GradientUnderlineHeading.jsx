"use client";

import { Typography } from "@mui/material";

export default function GradientUnderlineHeading({ text, size }) {
    const fontSize = size || "20px";   // ✅ Default size
    const underlineWidth = size ? "40%" : "4rem";
    // If custom size is big → underline grows a bit

    return (
        <div className="flex flex-col items-start gap-1">
            {/* Heading */}
            <Typography
                fontWeight={600}
                sx={{ fontSize }}
                className="text-white leading-tight"
            >
                {text}
            </Typography>

            {/* Gradient Underline */}
            <div
                className="h-[4px] rounded-full"
                style={{
                    width: underlineWidth,   // auto size based on font size
                    background:
                        "linear-gradient(90deg, #B4C7DB, #FFFFFF, #E60000)"
                }}
            ></div>
        </div>
    );
}
