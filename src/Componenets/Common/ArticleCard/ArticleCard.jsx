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

export default function ArticleCard({ date, creator, title, cta }) {
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
                        top: "-70%",
                        right: "0%",
                        width: "660px",
                        height: "560px",
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
                        // color="text.secondary"
                        mb={1}
                    >
                        {date}
                    </Typography>

                    <Typography
                        fontSize={isMobile ? "16px" : "22px"}
                        fontWeight={600}
                        mb={2}
                    >
                        {title}
                    </Typography>

                    <Typography
                        fontSize={isMobile ? "14px" : "16px"}
                        fontWeight={500}
                 
                    >
                        Author : {creator}
                    </Typography>

                    {/* CTA */}
                    <Box display="flex" justifyContent="flex-end">
                        <RedButton sx={{width : isMobile ? null : "20%" , fontSize: isMobile ? "13px" : "17px" }}>
                            {cta}
                        </RedButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
