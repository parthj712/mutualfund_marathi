"use client";

import { Box } from "@mui/material";

export default function GradientHeading({
    text,
    className = "",
    variant = "default", // default | white | gradient
    align = "center",    // left | center | right
}) {
    const getTextStyle = () => {
        if (variant === "white") {
            return { color: "#ffffff" };
        }

        if (variant === "gradient") {
            return {
                background: "linear-gradient(to right, #4DA3FF, #FF5A5A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            };
        }

        // DEFAULT → black
        return { color: "#000000" };
    };

    const getAlignmentStyles = () => {
        switch (align) {
            case "left":
                return {
                    alignItems: "flex-start",
                    textAlign: "left",
                    underlineAlign: "flex-start",
                };
            case "right":
                return {
                    alignItems: "flex-end",
                    textAlign: "right",
                    underlineAlign: "flex-end",
                };
            default:
                return {
                    alignItems: "center",
                    textAlign: "center",
                    underlineAlign: "flex-start",
                };
        }
    };

    const alignment = getAlignmentStyles();

    return (
        <div
            className={`w-full flex ${className}`}
            style={{ justifyContent: alignment.alignItems }}
        >
            <Box
                display="flex"
                flexDirection="column"
                gap={0.5}
                alignItems={alignment.alignItems}
            >
                {/* Heading text */}
                <p
                    className="text-[22px] md:text-[20px] lg:text-[24px] font-semibold"
                    style={{
                        ...getTextStyle(),
                        textAlign: alignment.textAlign,
                    }}
                >
                    {text}
                </p>

                {/* Underline */}
                <div
                    className="flex w-full"
                    style={{ justifyContent: alignment.underlineAlign }}
                >
                    <div
                        className="h-[4px] w-20 rounded-full"
                        style={{
                            background:
                                "linear-gradient(to right, #004A74, #E60000)",
                        }}
                    />
                </div>
            </Box>
        </div>
    );
}
