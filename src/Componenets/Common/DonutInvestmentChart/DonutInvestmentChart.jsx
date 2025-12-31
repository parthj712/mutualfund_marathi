"use client";

import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { Box, Typography } from "@mui/material";

const COLORS = ["#0f3d5e", "#ff0000"]; // Invested, Growth

export default function DonutInvestmentChart({
    investedAmount = 0,
    growthAmount = 0,
    futureValue = 0,
}) {
    const data = [
        { name: "Amount Invested", value: investedAmount },
        { name: "Growth Amount", value: growthAmount },
    ];

    return (
        <Box
            display="flex"
            alignItems="center"
            gap={6}
            flexWrap="wrap"
        >
            {/* CHART */}
            <Box width={260} height={260} position="relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={85}
                            outerRadius={110}
                            paddingAngle={2}
                        >
                            {data.map((_, index) => (
                                <Cell key={index} fill={COLORS[index]} />
                            ))}
                        </Pie>

                        <Tooltip
                            formatter={(value) =>
                                `₹ ${Number(value).toLocaleString("en-IN")}`
                            }
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* CENTER TEXT */}
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    sx={{
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                    }}
                >
                    <Typography fontSize={14} color="text.secondary">
                        Future Value
                    </Typography>
                    <Typography fontSize={16} fontWeight={700}>
                        ₹ {futureValue.toLocaleString("en-IN")}
                    </Typography>
                </Box>
            </Box>

            {/* LEGEND */}
            <Box display="flex" flexDirection="column" gap={1}>
                <LegendItem
                    color={COLORS[1]}
                    label="Growth Amount"
                />
                <LegendItem
                    color={COLORS[0]}
                    label="Amount Invested"
                />
            </Box>
        </Box>
    );
}

/* -------- SMALL LEGEND COMPONENT -------- */
function LegendItem({ color, label }) {
    return (
        <Box display="flex" alignItems="center" gap={1}>
            <Box
                sx={{
                    width: 14,
                    height: 14,
                    backgroundColor: color,
                    borderRadius: "2px",
                }}
            />
            <Typography fontSize={14}>{label}</Typography>
        </Box>
    );
}
