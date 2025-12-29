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

  // ✅ Images array from backend
  const images = blog.images || [];

  const heroImage = images[0];
  const sideImages = images.slice(1);

  return (
    <>
      hii
      <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={4}>
        {/* Heading */}
        <GradientHeading text={blog.title} align="left" />

        {/* Hero Image */}
        {heroImage && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 240, md: 420 },
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => setOpenImage(heroImage)}
          >
            <Image
              src={heroImage}
              alt={blog.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}

        {/* Category + Date */}
        <Box display="flex" justifyContent="space-between" py={2}>
          <Box
            sx={{
              px: 3,
              py: 1,
              borderRadius: 20,
              backgroundColor: "#EEF4FF",
              color: "#1D4ED8",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {blog.category}
          </Box>

          <Typography fontSize={18}>
            {blog.publishDate} • {blog.creator}
          </Typography>
        </Box>

        {/* Content */}
        <Box display="flex" gap={6} flexDirection={isMobile ? "column" : "row"}>
          <Box flex={1}>
            <Typography fontSize={16} lineHeight={1.9}>
              {blog.content}
            </Typography>
          </Box>

          {/* Side Images */}
          <Box flex="0 0 25%" display="flex" flexDirection="column" gap={3}>
            {sideImages.map((img, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  height: 220,
                  borderRadius: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => setOpenImage(img)}
              >
                <Image src={img} alt="" fill style={{ objectFit: "contain" }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Image Modal */}
      <Dialog
        open={Boolean(openImage)}
        onClose={() => setOpenImage(null)}
        maxWidth="lg"
      >
        <Box position="relative" p={2}>
          <IconButton
            onClick={() => setOpenImage(null)}
            sx={{ position: "absolute", top: 8, right: 8, background: "#fff" }}
          >
            <CloseIcon />
          </IconButton>

          {openImage && (
            <Box sx={{ position: "relative", width: "80vw", height: "70vh" }}>
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
