"use client";

import { Box, Typography } from "@mui/material";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";


export default function CommonInfoCard({ icon, title, desc, iconBg }) {
    const reduceMotion = useReducedMotion();

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={3}
            p={4}
            alignItems="flex-start"
            justifyContent="space-between"
            className="
                group bg-white rounded-2xl shadow
                w-full transition-all duration-300 hover:shadow-2xl
                relative cursor-pointer
            "
            sx={{
                borderBottom: "4px solid #004A74",
                borderRight: "4px solid #E60000",
            }}
        >
            {/* ICON */}
            <motion.div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                    background: iconBg,
                    backgroundSize: "300% 300%",
                }}
                animate={
                    reduceMotion
                        ? {}
                        : {
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }
                }
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={{ scale: 1.15 }}
            >
                <span className="text-white text-xl">{icon}</span>
            </motion.div>



            {/* TITLE + DESCRIPTION */}
            <Box display="flex" flexDirection="column" gap={1.5}>
                <Typography fontSize="22px" fontWeight={700}>
                    {title}
                </Typography>

                <Typography
                    fontWeight={500}
                    fontSize="18px"
                    sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {desc}
                </Typography>
            </Box>

            {/* ARROW */}
            <div className="flex justify-end w-full">
                <div className="p-2 rounded-full lg:group-hover:bg-gray-200 ">
                    <FiChevronRight className="text-[30px]" />
                </div>
            </div>
        </Box>
    );
}

