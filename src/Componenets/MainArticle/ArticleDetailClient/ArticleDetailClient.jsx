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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Zoom } from "@mui/material";

// import {
//   Tooltip,
//   CircularProgress,
//   useScrollTrigger,
// } from "@mui/material";
// import { useEffect } from "react";

// function ScrollToTopButton() {
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 200,
//   });

//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;

//       const scrolled = (scrollTop / docHeight) * 100;
//       setProgress(scrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Zoom in={trigger}>
//       <Tooltip title="Back to top" placement="left" arrow>
//         <Fab
//           onClick={handleClick}
//           sx={{
//             position: "fixed",
//             bottom: 112,
//             right: 26,
//             zIndex: 1400,
//             width: 64,
//             height: 64,
//             backdropFilter: "blur(12px)",
//             background:
//               "linear-gradient(135deg, rgba(37,99,235,0.9), rgba(29,78,216,0.9))",
//             boxShadow: "0 12px 30px rgba(37,99,235,0.35)",
//             color: "#fff",
//             "&:hover": {
//               background:
//                 "linear-gradient(135deg, rgba(29,78,216,1), rgba(30,64,175,1))",
//             },
//           }}
//         >
//           {/* Progress Ring */}
//           <CircularProgress
//             variant="determinate"
//             value={progress}
//             size={44}
//             thickness={3}
//             sx={{
//               position: "absolute",
//               color: "#93C5FD",
//             }}
//           />

//           {/* Arrow */}
//           <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
//         </Fab>
//       </Tooltip>
//     </Zoom>
//   );
// }



export default function ArticleDetailClient({ article }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openImage, setOpenImage] = useState(null);

  const images = article.images || [];
  const heroImage = images[0];
  const sideImages = images.slice(1);

  return (
    <>
      <Box display="flex" flexDirection="column" p={isMobile ? 4 : 10} gap={4}>
        {/* Heading */}
        <GradientHeading text={article.title} align="left" />

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
              alt={article.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}

        {/* Category + Date */}
        <Box display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-between" py={2}>
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
            {article.creator}
          </Box>

          <Typography fontSize={18}>
            {new Date(article.publishDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
          </Typography>
        </Box>

        {/* Content */}
        <Box display="flex" gap={6} flexDirection={isMobile ? "column" : "row"}>
          <Box flex={1}>
            <Typography
              fontSize={16}
              lineHeight={1.9}
              component="div"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Box>

          {/* Side Images */}
          {sideImages.length > 0 && (
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
                  <Image
                    src={img}
                    alt=""
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              ))}
            </Box>
          )}
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


      {/* <ScrollToTopButton /> */}

    </>
  );
}
