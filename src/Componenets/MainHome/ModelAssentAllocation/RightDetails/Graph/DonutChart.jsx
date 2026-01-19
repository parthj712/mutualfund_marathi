"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#0E4C5A", "#4DA1A9", "#F5A623", "#EF4444"];

const DonutChart = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeData = data?.[activeIndex];
    const activeColor = COLORS[activeIndex % COLORS.length];


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box display={"flex"} flexDirection={isMobile ? "column" : "row"} gap={6} alignItems={"center"} width={"100%"}>
            {/* Chart */}
            <div className="w-[310px] lg:w-[250px] md:w-[250px] h-[200px]">
                <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="label"
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={3}
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                    style={{
                                        cursor: "pointer",
                                        opacity: activeIndex === index ? 1 : 0.4, // ✅ fade others
                                        transition: "0.3s",
                                    }}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Right Side Details */}
            <div className="rounded-xl p-4 w-[220px]">
                <div className="flex items-center gap-2 mb-2">
                    {/* ✅ color indicator */}
                    <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: activeColor }}
                    />
                    <p className="font-semibold text-gray-800">
                        {activeData?.label}
                    </p>
                </div>

                <p className="text-xl text-gray-500">Value</p>
                <p className="text-xl font-bold text-gray-900">
                    {activeData?.value}
                </p>
            </div>
        </Box>
    );
};

export default DonutChart;
