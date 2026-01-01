"use client";

import {
    Card,
    CardContent,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import RedButton from "../RedButton";

export default function ArticleCard({ date, title, cta }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box position="relative">
            <Card
                elevation={3}
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    

                    /* 🔵 Blue corner shading */
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-40%",
                        right: "-30%",
                        width: "460px",
                        height: "260px",
                        background:
                            "radial-gradient(circle at top right, rgba(22,131,240,30%), transparent 80%)",
                        zIndex: 0,
                    },

                    transition: "all 0.3s ease",
                    "&:hover": {
                        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                        transform: "translateY(-2px)",
                    },
                }}
            >
                <CardContent sx={{ px: 3, py : 3, zIndex: 1 }}>
                    <Typography
                        fontSize={isMobile ? "14px" : "16px"}
                        fontWeight={600}
                        color="text.secondary"
                        mb={1}
                    >
                        {date}
                    </Typography>

                    <Typography
                        fontSize={isMobile ? "16px" : "18px"}
                        fontWeight={700}
                        mb={2}
                    >
                        {title}
                    </Typography>

                    {/* CTA */}
                    <Box display="flex" justifyContent="flex-end">
                        <RedButton sx={{ fontSize: isMobile ? "13px" : "15px" }}>
                            {cta}
                        </RedButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
