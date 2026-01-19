"use client";

import { useEffect, useRef } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import SavingsIcon from "@mui/icons-material/Savings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ElderlyIcon from "@mui/icons-material/Elderly";
import WarningIcon from "@mui/icons-material/Warning";
import GoalTile from "./GoalTile/GoalTile";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { GOAL_PLANNER_ITEMS } from "./goal";


export default function RadialGoalPlanner() {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    const videoRef = useRef(null);

    const mobileVideoRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            { threshold: 0.5 } // 50% visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);



    return (
        <Box px={isMobile ? 3 : 10} py={isMobile ? 10 : 10}>
            {/* Heading */}
            <Box pb={4} className="text-center mb-16 px-4">

                <GradientHeading text={"ध्येय नियोजक"} />

                <Typography fontSize={isMobile ? 18 : 22} mt={5} fontWeight={500} className="md:text-5xl font-bold text-slate-900">
                    गुंतवणूक आणि नियोजन करण्यासाठी हा नेहमीच चांगला काळ असतो!
                </Typography>
            </Box>

            {/* Radial Layout */}
            <Box display={isMobile || isTablet ? "none" : "block"} className="relative max-w-8xl mx-auto h-[600px] hidden lg:block">


                {/* Center Image with Gradient Ring */}
                <Box px={4} className="absolute inset-0 flex items-center justify-center">
                    {/* Gradient Ring */}
                    <Box
                        className="
    w-[1000px] h-[460px]
    rounded-[220px]
    flex items-center justify-center
  "
                        sx={{
                            background: "linear-gradient(270deg, #ED0000, #004A74)",
                        }}
                    >
                        {/* White Spacer */}
                        <Box className="w-[500px] h-[600px] rounded-full flex items-center justify-center">
                            {/* Actual Image */}
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                preload="none"
                                className="w-[380px] h-[680px] rounded-full object-cover shadow-xl"
                            >
                                <source src="/Videos/Parents_Saving_For_Child_s_Future.mp4" type="video/mp4" />
                            </video>

                        </Box>
                    </Box>
                </Box>


                {/* LEFT COLUMN */}
                {GOAL_PLANNER_ITEMS.map((goal) => (
                    <GoalTile
                        key={goal.key}
                        icon={goal.icon}
                        title={goal.title}
                        desscription={goal.description}
                        link={goal.link}
                        // className={goal.position}
                        className={isDesktop ? goal.position : ""}
                    />
                ))}
            </Box>


            {/* Mobile Grid */}
            <Box sx={{display : isMobile || isTablet ? "block" : "none"}} display={"flex"} flexDirection={"column"} gap={4}>

                <Box 
                    className="
                    rounded-[220px]
                "
                    sx={{
                        background: "linear-gradient(180deg, #ED0000, #004A74)",
                    }}
                >
                    <Box className="flex items-center justify-center">
                        {/* Actual Image */}
                        <video
                            ref={mobileVideoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-[330px] h-[560px] rounded-full object-cover shadow-xl"
                        >
                            <source
                                src="/Videos/Parents_Saving_For_Child_s_Future.mp4"
                                type="video/mp4"
                            />
                        </video>


                    </Box>
                </Box>

                <Box pt={6} className="grid grid-cols-1 sm:grid-cols-1 gap-6 px-6 lg:hidden">
                    {GOAL_PLANNER_ITEMS.map((goal) => (
                        <GoalTile
                            key={goal.key}
                            icon={goal.icon}
                            title={goal.title}
                            desscription={goal.description}
                            link={goal.link}
                            className={isDesktop ? goal.position : ""}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
