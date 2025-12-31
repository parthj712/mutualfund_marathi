"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function GoalOptionCard({


    /* TEXT */
    title,
    titleColor = "white",
    description,                  // 🔥 NEW
    descriptionColor = "white",    // 🔥 NEW

    /* ICON */
    Icon,
    iconSize = 120,
    iconGradient = "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",

    /* BACKGROUND */
    backgroundGradient = "linear-gradient(135deg, #0B3C49, #2FE88F)",

    /* STYLING */
    borderRadius = 5,
    border = "none",

    /* ACTION */
    onClick,
}) {

    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (
        <Box
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick?.();
                }
            }}
            sx={{
                pt: 3,
                pb: 2,
                pl: 5,
                pr: isMobile ? 3 : 2,
                borderRadius,
                background: backgroundGradient,
                border,
                cursor: onClick ? "pointer" : "default",
                transition: "all 0.3s ease",

                "&:hover": onClick
                    ? {
                        transform: "translateY(-3px)",
                        boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
                    }
                    : {},

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
                    height: "100%",
                }}
            >
                {/* TEXT SECTION */}
                <Box>
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

                    {/* 🔥 DESCRIPTION (conditional render) */}
                    {description && (
                        <Typography
                            sx={{
                                mt: isMobile ? 1 : 3,
                                pr: 5,
                                fontSize: { xs: 16, sm: 20 },
                                fontWeight: 500,
                                lineHeight: 1.5,
                                color: descriptionColor,
                                opacity: 0.9,
                            }}
                        >
                            {description}
                        </Typography>
                    )}
                </Box>

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








// import { AiFillHome } from "react-icons/ai";
// import { useRouter } from "next/navigation";

// const router = useRouter();

// <GoalOptionCard
//     /* ================= TEXT ================= */
//     title="स्वप्नातील घर"                      // Main title text
//     titleColor="#ffffff"                      // Title text color (default: white)

//     description="आपल्या स्वतःच्या घरासाठी योग्य नियोजन आणि गुंतवणूक"
//     descriptionColor="#ffffff"                // Description text color (default: white)

//     /* ================= ICON ================= */
//     Icon={AiFillHome}                         // React icon component
//     iconSize={120}                            // Icon size (default: 120)

//     iconGradient="linear-gradient(
//         135deg,
//         rgba(255,255,255,0.4),
//         rgba(255,255,255,0.05)
//     )"                                        // Gradient applied to icon

//     /* ================= BACKGROUND ================= */
//     backgroundGradient="linear-gradient(
//         135deg,
//         #0B3C49,
//         #2FE88F
//     )"                                        // Card background gradient

//     /* ================= STYLING ================= */
//     borderRadius={5}                          // Border radius (default: 5)
//     border="1px solid rgba(255,255,255,0.15)" // Optional border

//     /* ================= ACTION ================= */
//     onClick={() => router.push("/dream-home")} // Click handler
// />
