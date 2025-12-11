"use client";

import { Box, Typography } from "@mui/material";

export default function CopyrightBar({ company = "Shri Thakur Finserv Pvt. Ltd." }) {
    return (
        <Box py={2.5} className="w-full bg-[#002F4A] text-white py-4 flex justify-center">
            <Typography
                fontSize="14px"
                className="opacity-80 text-center"
            >
                © {new Date().getFullYear()} {company} सर्व हक्क राखीव. | All Rights Reserved.
            </Typography>
        </Box>
    );
}
