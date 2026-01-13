"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function StatusPill({
  icon = null,
  text = "",

  bgColor = "#FEE2E2",
  borderColor = "#EF4444",
  textColor = "#1F2937",

  borderRadius = "999px",
  paddingX = 4,
  paddingY = 1.5,

  fontSize = "18px",
  fontWeight = 600,

  sx = {},
}) {


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "inline-flex",
        width: "fit-content",
        alignItems: "baseline",
        gap: 1.5,
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`,
        borderRadius,
        px: paddingX,
        py: paddingY,
        ...sx,
      }}
    >
      {icon && (
        <Box sx={{ fontSize: 18, color: textColor }}>
          {icon}
        </Box>
      )}

      <Typography
        fontSize={fontSize}
        fontWeight={fontWeight}
        sx={{ color: textColor, whiteSpace: "nowrap" }}
      >
        {text}
      </Typography>
    </Box>
  );
}
