"use client";

import { Button, Card, CardContent, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import RedButton from "../RedButton";

export default function ArticleCard({ date, title, cta }) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <div className="relative">
            <Card
                elevation={3}
                className="rounded-xl pl-6"
                sx={{
                    transition: "all 0.3s ease",
                    borderRadius: 2,
                    "&:hover": {
                        boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                    },
                }}
            >
                <CardContent>
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

                    {/* BUTTON RIGHT ALIGN */}
                    <Box display="flex" justifyContent="flex-end">
                        <RedButton sx={{ fontSize: isMobile ? "13px" :"15px" }}>{cta}</RedButton>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}
