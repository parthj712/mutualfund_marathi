"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function CopyrightBar({
    company = "Shri Thakur Finserv Pvt. Ltd.",
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            px={isMobile ? 2 : 4}
            py={isMobile ? 2 : 2.5}
            className="w-full bg-[#002F4A] text-white flex justify-center"
        >
            <Typography
                fontSize={isMobile ? "12px" : "14px"}
                className="opacity-80 text-center leading-relaxed"
            >
                © {new Date().getFullYear()} {company} 
                <br className="block sm:hidden" />
                -सर्व हक्क राखीव. | All Rights Reserved.
            </Typography>
        </Box>
    );
}
