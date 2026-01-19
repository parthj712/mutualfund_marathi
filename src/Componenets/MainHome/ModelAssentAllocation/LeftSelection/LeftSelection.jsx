"use client";

import React from "react";
import {
    Box,
    useMediaQuery,
    useTheme,
    FormControl,
    Select,
    MenuItem,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const LeftSelection = ({ selected, onSelect }) => {
    const options = [
        { id: "conservative", label: "कंझर्व्हेटिव्ह गुंतवणूकदार" },
        { id: "moderatelyConservative", label: "मध्यम रूढीवादी" },
        { id: "moderate", label: "मध्यम" },
        { id: "ModeratelyAggressiveInvestor", label: "मध्यम आक्रमक" },
        { id: "AggressiveInvestor", label: "आक्रमक" },
    ];

    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md")); // ✅ sm + md below

    // ✅ MOBILE/TABLET → Dropdown
    if (isMobileOrTablet) {
        return (
            <Box className="bg-[#1F2937] rounded-2xl p-4" boxShadow={2}>
                <FormControl>
                    <Select
                        fullWidth
                        value={selected}
                        onChange={(e) => onSelect(e.target.value)}
                        displayEmpty
                        sx={{
                            bgcolor: "white",
                            borderRadius: "12px",
                            fontSize: 18,
                            fontWeight: 600,
                            ".MuiSelect-icon": { color: "black" },
                        }}
                    >
                        {options.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    }

    // ✅ DESKTOP → Same menu with animation (your same layout)
    return (
        <div>
            <Box
                boxShadow={2}
                p={1.5}
                justifyContent={"space-between"}
                display={"flex"}
                flexDirection={"row"}
                className="bg-[#1F2937] rounded-2xl p-4"
            >
                {options.map((item) => (
                    <Box
                        fontSize={22}
                        py={3}
                        px={6}
                        fontWeight={selected === item.id ? 600 : 400}
                        key={item.id}
                        onClick={() => onSelect(item.id)}
                        className={` 
              cursor-pointer
              px-6 py-4 rounded-xl mb-2
              flex gap-2 justify-between items-center
              relative overflow-hidden
              ${selected === item.id
                                ? "text-black"
                                : "text-gray-400 hover:bg-gray-700"
                            }
            `}
                    >
                        <AnimatePresence>
                            {selected === item.id && (
                                <Box
                                    component={motion.div}
                                    layoutId="activeSelection"
                                    className="absolute inset-0 bg-white rounded-xl"
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 40,
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        <Box className="relative z-10">
                            {item.label}
                            <span> →</span>
                        </Box>
                    </Box>
                ))}
            </Box>
        </div>
    );
};

export default LeftSelection;
