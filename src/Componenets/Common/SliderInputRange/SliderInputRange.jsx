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
    value,          // [min, max]
    min = 0,
    max = 100,
    step = 1,
    unit = "",
    onChange,
}) {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    const handleMinChange = (e) => {
        let newMin = Number(e.target.value);
        if (newMin <= value[1] && newMin >= min) {
            onChange([newMin, value[1]]);
        }
    };

    const handleMaxChange = (e) => {
        let newMax = Number(e.target.value);
        if (newMax >= value[0] && newMax <= max) {
            onChange([value[0], newMax]);
        }
    };

    return (
        <Box sx={{ width: "100%" }} px={isMobile ? 4 : 2} display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
            {/* LABEL + INPUTS */}
            <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent={isMobile ? "flex-start" : "space-between"}
                alignItems={isMobile ? "flex-start" :  "center"}
                mb={1}
                gap={2}
            >
                <Typography textAlign={"left"} fontWeight={500} fontSize={isMobile ? 16 : 18}>
                    {label}
                </Typography>

                <Box display="flex" gap={1}>
                    <TextField
                        size="small"
                        type="number"
                        value={value[0]}
                        onChange={handleMinChange}
                        inputProps={{ min, max, step }}
                        sx={{ width: isMobile ? 130 : 100 }}
                    />

                    <Typography alignSelf="center">–</Typography>

                    <TextField
                        size="small"
                        type="number"
                        value={value[1]}
                        onChange={handleMaxChange}
                        inputProps={{ min, max, step }}
                        ssx={{ width: isMobile ? 130 : 100 }}
                    />
                </Box>
            </Box>

            {/* RANGE SLIDER */}
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
                        height: 8,
                        borderRadius: 10,
                        border: "none",
                    },

                    "& .MuiSlider-thumb": {
                        width: isMobile ? 18 : 20,
                        height: isMobile ? 18 : 20,
                        backgroundColor: "#303F5E",
                        // boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                    },
                }}
            />
        </Box>
    );
}
