"use client";

import * as React from "react";
import { Box, Typography, Slider, Input } from "@mui/material";

export default function SliderInput({
    label,
    value,          // [minValue, maxValue]
    min = 0,
    max = 100,
    step = 1,
    unit = "",
    onChange,
}) {
    const handleMinChange = (e) => {
        const newMin = Number(e.target.value);
        if (newMin <= value[1]) {
            onChange([newMin, value[1]]);
        }
    };

    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value);
        if (newMax >= value[0]) {
            onChange([value[0], newMax]);
        }
    };

    return (
        <Box sx={{ width: "100%" }}>
            {/* Label Row */}
            <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography fontWeight={500}>{label}</Typography>
                <Typography fontWeight={600}>
                    {value[0]}{unit} - {value[1]}{unit}
                </Typography>
            </Box>

            {/* Slider */}
            <Slider
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(_, v) => onChange(v)}
                sx={{
                    height: 8,
                    borderRadius: 10,

                    "& .MuiSlider-rail": {
                        backgroundColor: "#2a2f3a",
                        opacity: 1,
                        height: 8,
                        borderRadius: 10,
                    },

                    "& .MuiSlider-track": {
                        backgroundColor: "#7dd3fc",
                        height: 8,
                        borderRadius: 10,
                        border: "none",
                    },

                    "& .MuiSlider-thumb": {
                        width: 22,
                        height: 22,
                        backgroundColor: "#7dd3fc",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                    },
                }}
            />

            {/* Inputs */}
            <Box display="flex" gap={2} mt={2}>
                <Input
                    type="number"
                    value={value[0]}
                    onChange={handleMinChange}
                    inputProps={{ min, max, step }}
                />
                <Input
                    type="number"
                    value={value[1]}
                    onChange={handleMaxChange}
                    inputProps={{ min, max, step }}
                />
            </Box>
        </Box>
    );
}
