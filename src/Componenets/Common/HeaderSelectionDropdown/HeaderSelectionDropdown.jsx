"use client";

import { Box, Typography, Select, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function HeaderSelectionDropdown({
    image,
    heading,
    description,
    value,
    options,
    onChange,
    imagePosition = "left", // "left" | "right"
    imageHeight = { mobile: 220, desktop: 400 },
    radius = 100,
    selectWidth = 260,
    label = "विभाग निवडा",
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const isImageLeft = imagePosition === "left";

    return (
        <Box sx={{ mx: "auto", pr: isMobile ? 0 : 8 }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: isMobile
                        ? "column"
                        : isImageLeft
                            ? "row"
                            : "row-reverse",
                    alignItems: "center",
                    gap: { xs: 3, md: 6 },
                }}
            >
                {/* IMAGE */}
                <Box
                    sx={{
                        position: "relative",
                        width: isMobile ? "100%" : "60%",
                        height: isMobile ? imageHeight.mobile : imageHeight.desktop,
                        borderBottomRightRadius:
                            isImageLeft && !isMobile ? radius : 80,
                        borderBottomLeftRadius:
                            !isImageLeft && !isMobile ? radius : 0,
                        overflow: "hidden",
                        flexShrink: 0,
                    }}
                >
                    <Image
                        src={image}
                        alt={heading}
                        fill
                        className="object-cover"
                        priority
                    />
                </Box>

                {/* CONTENT */}
                <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 2 : 6} sx={{ width: isMobile ? "100%" : "50%", px: isMobile ? 4 : 0 }}>
                    <Box>
                        <Typography
                            fontSize={isMobile ? "18px" : "24px"}
                            fontWeight={700}
                            mb={1}
                        >
                            {heading}
                        </Typography>

                        <Typography
                            fontSize={isMobile ? "16px" : "20px"}
                            lineHeight={1.8}
                            color="text.secondary"
                            mb={2}
                        >
                            {description}
                        </Typography>
                    </Box>
                    {/* DROPDOWN */}
                    <Box>
                        {label && (
                            <Typography
                                fontSize={14}
                                fontWeight={600}
                                mb={0.5}
                                color="text.secondary"
                            >
                                {label}
                            </Typography>
                        )}

                        <Select
                            fullWidth
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            size="small"
                            sx={{
                                width: selectWidth,
                                borderRadius: 2,
                                backgroundColor: "#f8fafc",
                                fontWeight: 600,
                                "& fieldset": {
                                    borderColor: "#e5e7eb",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#2563eb",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#2563eb",
                                },
                            }}
                        >
                            {options.map((opt) => (
                                <MenuItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
