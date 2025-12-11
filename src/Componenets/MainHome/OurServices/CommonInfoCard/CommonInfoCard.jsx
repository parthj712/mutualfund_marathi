"use client";

import { Box, Typography } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";

export default function CommonInfoCard({ icon, title, desc }) {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={3}
            p={4}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            className="
                group   /* IMPORTANT: allows child hover effects */
                bg-white rounded-2xl shadow
                w-full transition-all duration-300 hover:shadow-2xl
                relative cursor-pointer
            "
            sx={{
                borderBottom: "4px solid #004A74",
                borderRight: "4px solid #E60000",
            }}
        >
            {/* ICON */}
            <div
                className="
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300 
                    group-hover:scale-110   /* Icon becomes bigger */
                "
                style={{
                    background: "linear-gradient(135deg, #004A74, #E60000)",
                }}
            >
                <span className="text-white text-xl">{icon}</span>
            </div>

            {/* TITLE + DESCRIPTION */}
            <Box display={"flex"} flexDirection={"column"} gap={1.5}>
                {/* TITLE */}
                <Typography fontSize="20px" fontWeight={700} className="text-left">
                    {title}
                </Typography>

                {/* DESCRIPTION with 3-line clamp */}
                <Typography
                    fontWeight={500}
                    fontSize="16px"
                    className="text-left leading-relaxed"
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {desc}
                </Typography>
            </Box>

            {/* BOTTOM ARROW */}
            <div className="flex justify-end mt-2 w-full">
                <div
                    className="
                        p-2 rounded-full 
                        transition-all duration-300
                        group-hover:bg-gray-200   /* grey bg on card hover */
                    "
                >
                    <FiChevronRight className="text-[30px]" />
                </div>
            </div>

        </Box>
    );
}
