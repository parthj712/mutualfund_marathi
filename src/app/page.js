"use client";

import MainHome from "@/Componenets/MainHome/MainHome";
import { useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import API from "@/service/api";
export default function Home() {
  const theme = useTheme();

  // BREAKPOINTS
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const countVisit = async () => {
      try {
        const res = await API.post("/visitors/visit", {
          page: window.location.pathname,
        });
        console.log("visit counted", res.data);
      } catch (error) {
        console.error(
          "Visitor API error:",
          error.response?.data || error.message
        );
      }
    };

    countVisit();
  }, []);
  return (
    <>
      <>
        <MainHome />
      </>
    </>
  );
}
