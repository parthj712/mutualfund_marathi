"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/service/api";

const CARDS_PER_ROW = 3;

export default function BlogExpandableGrid({ selectedCategory = "all" }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [activeMap, setActiveMap] = useState({});
  const [loading, setLoading] = useState(true);

  /* Fetch blogs from API */
  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs/active-blogs");
      console.log(res);

      // supports both { blogs: [] } and direct []
      setBlogs(res.data.blogs || res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* Loading state */
  if (loading) {
    return (
      <Box textAlign="center" py={6}>
        <Typography>Loading blogs...</Typography>
      </Box>
    );
  }

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter(
        (blog) =>
          blog.category?.toLowerCase() === selectedCategory.toLowerCase()
      );

  if (!loading && filteredBlogs.length === 0) {
    return (
      <Box textAlign="center" py={6}>
        <Typography>No blogs found in this category</Typography>
      </Box>
    );
  }
  /* Split blogs into rows */
  const rows = [];
  for (let i = 0; i < filteredBlogs.length; i += CARDS_PER_ROW) {
    rows.push(filteredBlogs.slice(i, i + CARDS_PER_ROW));
  }

  /* -------------------- MOBILE VIEW -------------------- */
  if (isMobile) {
    return (
      <Box display="flex" flexDirection="column" gap={2}>
        {filteredBlogs.map((blog) => (
          <Box
            key={blog._id}
            onClick={() => window.open(`/blogs/${blog.slug}`, "_blank", "noopener,noreferrer")}
            sx={{
              height: 260,
              borderRadius: 6,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <Image
              src={
                blog.images?.[0] ||
                "https://www.bing.com/images/search?view=detailV2&ccid=qt5DlFWz&id=45E5FB3776E1797F198E14A0E74FCD0F3DE3EDEB&thid=OIP.qt5DlFWzIXEJB__YcuBsIwHaE5&mediaurl=https%3a%2f%2fcdn.mos.cms.futurecdn.net%2fTUBEH5DbN4jD73RKzkFvui.jpg&exph=1409&expw=2127&q=mutual+fund&FORM=IRPRST&ck=B60C9B36B6EB4EE7F6B2198670144646&selectedIndex=9&itb=0"
              }
              alt={blog.title}
              fill
              className="object-cover"
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                color: "#fff",
              }}
            >
              <Typography fontWeight={600}>{blog.title}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  /* -------------------- DESKTOP / TABLET -------------------- */
  return (
    <Box display="flex" flexDirection="column" gap={2.5}>
      {rows.map((rowBlogs, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: "flex",
            gap: 1.5,
            height: 360,
            overflow: "hidden",
          }}
        >
          {rowBlogs.map((blog, cardIndex) => {
            const isActive =
              activeMap[rowIndex] === cardIndex ||
              (activeMap[rowIndex] === undefined && cardIndex === 0);

            return (
              <Box
                key={blog._id}
                onMouseEnter={() =>
                  setActiveMap((prev) => ({
                    ...prev,
                    [rowIndex]: cardIndex,
                  }))
                }
                onClick={() =>
                  window.open(`/blogs/${blog.slug}`, "_blank", "noopener,noreferrer")
                }
                sx={{
                  flex: isActive ? 3 : 1,
                  transition: "all 0.45s ease",
                  borderRadius: 6,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  minWidth: 0,
                }}
              >
                {/* Image */}
                <Image
                  src={blog.images?.[0]}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: isActive
                      ? "linear-gradient(to top, rgba(0,0,0,0.65), transparent)"
                      : "rgba(0,0,0,0.35)",
                    transition: "0.3s",
                  }}
                />

                {/* Content */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    color: "#fff",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(12px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      mb: 1,
                      borderRadius: 20,
                      fontSize: 13,
                      fontWeight: 600,
                      backgroundColor: "rgba(255,255,255,0.9)",
                      color: "#000",
                    }}
                  >
                    {blog.category}
                  </Box>

                  <Typography
                    fontSize="20px"
                    fontWeight={600}
                    mb={0.5}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography fontSize="14px" opacity={0.85}>
                    {new Date(blog.publishDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{blog.creator}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
