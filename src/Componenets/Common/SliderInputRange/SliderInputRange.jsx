"use client";

import * as React from "react";
import {
    Box,
    Typography,
    Slider,
    TextField,
    useTheme,
    useMediaQuery,
} from "@mui/material";

export default function SliderInputRange({
    label,
    value,          // number (MAX value)
    min = 0,
    max = 100,
    step = 1,
    unit = "",
    onChange,
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleMaxChange = (e) => {
        let newValue = Number(e.target.value);
        if (newValue >= min && newValue <= max) {
            onChange(newValue);
        }
    };

    return (
        <Box
            sx={{ width: "100%" }}
            // px={isMobile ? 2 : 2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
        >
            {/* LABEL + MAX INPUT */}
            <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent={isMobile ? "flex-start" : "space-between"}
                alignItems={isMobile ? "flex-start" : "center"}
                mb={1}
                gap={2}
                width="100%"
            >
                <Typography
                    fontWeight={500}
                    fontSize={isMobile ? 16 : 18}
                >
                    {label}
                </Typography>

                <TextField
                    size="small"
                    type="number"
                    value={value}
                    onChange={handleMaxChange}
                    inputProps={{ min, max, step }}
                    sx={{ width: isMobile ? 130 : 120 }}
                />
            </Box>

            {/* SLIDER */}
            <Slider
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(_, v) => onChange(v)}
                valueLabelDisplay="auto"
                sx={{
                    height: 8,
                    borderRadius: 10,

                    "& .MuiSlider-rail": {
                        backgroundColor: "#D9D9D9",
                        opacity: 1,
                        height: isMobile ? 6 : 8,
                        borderRadius: 10,
                    },

                    "& .MuiSlider-track": {
                        backgroundColor: "#008BDA",
                        height: isMobile ? 6 : 8,
                        borderRadius: 10,
                        border: "none",
                    },

                    "& .MuiSlider-thumb": {
                        width: isMobile ? 18 : 20,
                        height: isMobile ? 18 : 20,
                        backgroundColor: "#303F5E",
                    },
                }}
            />
        </Box>
    );
}
