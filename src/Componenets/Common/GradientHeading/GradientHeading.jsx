"use client";

import { Box } from "@mui/material";

export default function GradientHeading({ text, className = "" }) {
    return (
        <div className={`w-full flex flex-col items-start md:items-center lg:items-center gap-1 ${className}`}>

            <Box display={"flex"} flexDirection={"column"} gap={0.5}>

                {/* Heading text */}
                <p className="text-[22px] md:text-[20px] lg:text-[24px] font-semibold text-black">
                    {text}
                </p>

                {/* BLUE → RED underline aligned RIGHT */}
                <div className="flex justify-start">
                    <div
                        className="h-[4px] w-20 rounded-full"
                        style={{
                            background: "linear-gradient(to right, #004A74, #E60000)",
                        }}
                    ></div>
                </div>
            </Box>
        </div>
    );
}
