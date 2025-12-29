"use client";

import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Dialog,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useState } from "react";

export default function BlogDetailClient({ blog }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [openImage, setOpenImage] = useState(null);

    // Side images
    const sideImages = [blog.iamge1, blog.iamge2, blog.iamge3].filter(Boolean);

    return (
        <>
            <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={4}>
                {/* Heading */}
                <Box display="flex" flexDirection="column" gap={2}>
                    <GradientHeading text={blog.title} align="left" />
                </Box>

                {/* Hero Image */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: 240, md: 420 },
                        borderRadius: 3,
                        overflow: "hidden",
                        cursor: "pointer",
                    }}
                    onClick={() => setOpenImage(blog.blogimage)}
                >
                    <Image
                        src={blog.blogimage}
                        alt={blog.title}
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </Box>

                {/* Date */}
                {/* Category + Date */}
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                >
                    {/* LEFT: Category Pill */}
                    <Box
                        sx={{
                            px: 3,
                            py: 1,
                            borderRadius: 20,
                            backgroundColor: "#EEF4FF",
                            color: "#1D4ED8",
                            fontSize: 18,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                        }}
                    >
                        {blog.category}
                    </Box>

                    {/* RIGHT: Date & Author */}
                    <Typography fontSize={18} fontWeight={500}>
                        {blog.date} • {blog.author}
                    </Typography>
                </Box>


                {/* Content Section */}
                <Box
                    display="flex"
                    gap={6}
                    flexDirection={isMobile ? "column" : "row"}
                >
                    {/* LEFT */}
                    <Box flex={1}>
                        <Typography fontSize={16} lineHeight={1.9}>
                            {blog.information}
                        </Typography>
                    </Box>

                    {/* RIGHT: Side Images */}
                    <Box
                        flex={isMobile ? "1" : "0 0 25%"}
                        display="flex"
                        flexDirection="column"
                        gap={3}
                    >
                        {sideImages.map((img, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: 220,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    border: "1px solid #e5e7eb",
                                    cursor: "pointer",
                                }}
                                onClick={() => setOpenImage(img)}
                            >
                                <Image
                                    src={img}
                                    alt={`Blog side image ${index + 1}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* 🔥 IMAGE PREVIEW MODAL */}
            <Dialog
                open={Boolean(openImage)}
                onClose={() => setOpenImage(null)}
                maxWidth="lg"
            >
                <Box position="relative" p={2}>
                    <IconButton
                        onClick={() => setOpenImage(null)}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            zIndex: 2,
                            background: "#fff",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {openImage && (
                        <Box
                            sx={{
                                position: "relative",
                                width: "80vw",
                                height: "70vh",
                            }}
                        >
                            <Image
                                src={openImage}
                                alt="Preview"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    )}
                </Box>
            </Dialog>
        </>
    );
}
