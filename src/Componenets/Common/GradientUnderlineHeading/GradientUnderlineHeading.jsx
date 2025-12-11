"use client";

import { Typography } from "@mui/material";

export default function GradientUnderlineHeading({ text }) {
    return (
        <div className="flex flex-col items-start gap-1">
            {/* Heading */}
            <Typography
                fontWeight={600}
                className="text-[20px] md:text-[32px] text-white"
            >
                {text}
            </Typography>

            {/* Gradient Underline */}
            <div
                className="h-[4px] w-16 rounded-full"
                style={{
                    background: "linear-gradient(90deg, #B4C7DB, #FFFFFF, #E60000)"
                }}
            ></div>
        </div>
    );
}
