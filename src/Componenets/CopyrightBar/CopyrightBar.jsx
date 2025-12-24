"use client";

import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CopyrightBar({
    company = "Shri Thakur Finserv Pvt. Ltd.",
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const router = useRouter();

    return (
        <Box
            px={isMobile ? 2 : 4}
            py={isMobile ? 2 : 2.5}
            className="w-full bg-[#002F4A] text-white"
        >
            <Box
                className="max-w-8xl mx-auto flex items-center"
                sx={{
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    gap: isMobile ? 1.5 : 0,
                }}
            >
                {/* LEFT LINKS */}
                <Box>
                    <Typography
                        fontSize={isMobile ? "12px" : "14px"}
                        className="opacity-80 text-center sm:text-left"
                    >
                        <span
                            onClick={() => router.push("/privacy-policy")}
                            className="cursor-pointer hover:underline transition"
                        >
                            गोपनीयता धोरण (Privacy Policy)
                        </span>
                        {" | "}
                        <span
                            onClick={() => router.push("/disclaimer")}
                            className="cursor-pointer hover:underline hover:text-white transition"
                        >
                            अस्वीकरण (Disclaimer)
                        </span>
                    </Typography>
                </Box>

                {/* RIGHT TEXT */}
                <Box>
                    <Typography
                        fontSize={isMobile ? "12px" : "14px"}
                        className="opacity-80 text-center sm:text-right"
                    >
                        © {new Date().getFullYear()} {company} – सर्व हक्क राखीव. | All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
