"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function HeaderMutualFund({
    image,
    heading,
    description,
    imagePosition = "left", // "left" | "right"
    imageHeight = { mobile: 220, desktop: 400 },
    radius = 100,
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
                            isImageLeft && !isMobile ? radius : 0,
                        borderBottomLeftRadius:
                            !isImageLeft && !isMobile ? radius : 0,
                        overflow: "hidden",
                        flexShrink: 0,
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
                <Box sx={{ width: isMobile ? "100%" : "50%" , px : isMobile ? 4 : 0}}>
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
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
