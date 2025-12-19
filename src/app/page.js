"use client";

import MainHome from "@/Componenets/MainHome/MainHome";
import NavigationBar from "@/Componenets/NavigationBar/NavigationBar";
import UpperNavbar from "@/Componenets/UpperNavbar/UpperNavbar";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import API from "@/service/api";
export default function Home() {
  const theme = useTheme();

  // BREAKPOINTS
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    API.post("/visitors/visit", {
      page: window.location.pathname,
    });
  }, []);
  return (
    <>
      <>
        <MainHome />
      </>
    </>
  );
}
