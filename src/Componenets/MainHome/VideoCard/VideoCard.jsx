"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { getYouTubeID } from "../VideoList/utils/getYouTubeID";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function VideoCard({ url, title, desc, duration }) {
    const videoId = getYouTubeID(url);
    const [hover, setHover] = useState(false);


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box
        display={"flex"} flexDirection={isMobile || isTablet ? "column" : "row"}
            className="gap-5 p-4 bg-white rounded-lg shadow hover:shadow-md transition-all"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            {/* LEFT — FIXED SIZE THUMBNAIL */}
            <div className=" md:w-full lg:w-[300px] h-[200px] overflow-hidden rounded-lg flex-shrink-0">
                <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* RIGHT — CONTENT */}
            <Box display="flex" flexDirection="column" gap={1.5} flex="1" p={2}>

                {/* PLAY + DURATION RED PILL */}
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1} px={2} py={1} className={`bg-red-600 text-white rounded-md w-fit relative overflow-hidden`}>

                    {/* Play Icon */}
                    <FaPlay className="text-white text-[14px]" />

                    {/* Duration Slide-In */}
                    <span
                        className={`
                            ml-2 text-xs font-semibold 
                            transform transition-all duration-300
                            
                        `}
                    >
                        ⏱ {duration}
                    </span>
                </Box>

                {/* TITLE */}
                <Typography fontSize={isMobile ? "16px":  isTablet ? "18px" : "20px"} fontWeight={600}>
                    {title}
                </Typography>

                {/* DESCRIPTION */}

                <Typography fontSize={isMobile ? "14px":  isTablet ? "15px" : "14px"} fontWeight={500}>
                    {desc}
                </Typography>
                <p className="text-[1px] md:text-[14px] lg:text-[14px] leading-relaxed">
                    
                </p>
            </Box>

        </Box>
    );
}
