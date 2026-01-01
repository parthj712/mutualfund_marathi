"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import GradientHeading from "../GradientHeading/GradientHeading";

export default function DisclaimerBox({
    icon: Icon,
    title,
    description,
    iconColor = "text-blue-600",
    align = "center",
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" gap={4}>
            {/* Heading */}
            <Box
                display="flex"
                alignItems="center"
                justifyContent={align === "center" ? "center" : "flex-start"}
                gap={2}
            >
                {!isMobile && Icon && (
                    <Icon className={`${iconColor} text-3xl`} />
                )}

                {/* <Typography fontWeight={700} fontSize="20px" textAlign={align}>
                    {title}
                </Typography> */}

                <GradientHeading text={title} align="left"/>
            </Box>

            {/* Description */}
            <Typography
                fontSize="16px"
                textAlign={align}
                lineHeight={1.8}
                className="leading-relaxed"
            >
                {description}
            </Typography>
        </Box>
    );
}
