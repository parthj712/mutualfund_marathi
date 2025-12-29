"use client";

import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import RichContentRenderer from "@/Componenets/Common/RichContentRenderer/RichContentRenderer";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function BlogDetailClient({ blog }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} sx={{border : "1px solid black"}}>
            {/* Heading */}
            <Box display="flex" flexDirection="column" gap={2} px={2} py={2}>
                <GradientHeading text={blog.title} align="left" />

                <Typography fontSize={18} color="text.secondary">
                    {blog.date} • {blog.author}
                </Typography>
            </Box>

            {/* Featured Image */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, md: 420 },
                    borderRadius: 4,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    mt: 2,
                }}
            >
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />
            </Box>

            {/* 🧠 CMS-READY CONTENT */}
            <Box px={2} py={6}>
                <RichContentRenderer  content={blog.content} />
            </Box>
        </Box>
    );
}
