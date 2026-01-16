"use client";

import { useEffect, useState } from "react";
import {
    Fab,
    Zoom,
    Tooltip,
    CircularProgress,
    useScrollTrigger,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function GlobalScrollToTop() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 250,
    });

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Zoom in={trigger}>
            <Tooltip title="Back to top" placement="left" arrow>
                <Fab
                    onClick={scrollToTop}
                    sx={{
                        position: "fixed",
                        bottom: { xs: 100, md: 112 },
                        right: { xs: 28, md: 30 },
                        width: 54,
                        height: 54,
                        zIndex: 1600,
                        backdropFilter: "blur(12px)",
                        background:
                            "linear-gradient(135deg, rgba(37,99,235,0.95), rgba(29,78,216,0.95))",
                        boxShadow: "0 16px 40px rgba(37,99,235,0.4)",
                        color: "#fff",
                        "&:hover": {
                            background:
                                "linear-gradient(135deg, rgba(29,78,216,1), rgba(30,64,175,1))",
                        },
                    }}
                >
                    {/* Scroll progress ring */}
                    <CircularProgress
                        variant="determinate"
                        value={progress}
                        size={54}
                        thickness={3}
                        sx={{
                            position: "absolute",
                            color: "#BFDBFE",
                        }}
                    />

                    <KeyboardArrowUpIcon sx={{ fontSize: 28 }} />
                </Fab>
            </Tooltip>
        </Zoom>
    );
}
