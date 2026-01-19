import { Card, Typography, Box, Tooltip, useTheme, useMediaQuery, Divider } from "@mui/material";
import Link from "next/link";

export default function GoalTile({
    icon,
    title,
    desscription,
    link,
    className = "",
}) {


    const theme = useTheme();

    // BREAKPOINTS
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    return (

        <Link href={link}>
            <Tooltip title={desscription} arrow placement="top">
                <Card
                    elevation={isMobile ? 3 : 6}
                    sx={{ p: 3, borderRadius: 3  , position : isMobile || isTablet ? "none" : "absolute"}}
                    className={`
                    
                    ${className}
                    group
                    cursor-pointer
                    flex items-center gap-3
                    flex-shrink-0
                    bg-white
                    border border-slate-200

                    transform
                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-1
                    hover:shadow-2xl
                `}
                >


                    {/* Icon */}
                    <Box
                        className="
                        w-10 h-10
                        rounded-full
                        bg-blue-50
                        lg:text-[#004A74]
                        md:text-[#004A74]
                        text-[#ED0000]
                        flex items-center justify-center
                        flex-shrink-0

                        transition-all
                        duration-300
                        ease-out

                        group-hover:bg-[#ED0000]
                        group-hover:text-white
                        group-hover:scale-110
                    "
                    >
                        {icon}
                    </Box>


                    {/* Text */}
                    <Box display="flex" flexDirection="column" textAlign="left">
                        <Typography
                            sx={{ fontSize: isMobile ? 16 : 20, fontWeight: 600 }}
                            className="
                            text-[#004A74]
                            whitespace-nowrap

                            transition-all
                            duration-300
                            ease-out

                            group-hover:text-[#ED0000]
                            group-hover:translate-x-[2px]
                        "
                        >
                            {title}
                        </Typography>


                        <Divider sx={{my : 1}}/>


                        {/* Description with Tooltip */}

                        <Typography
                            sx={{
                                maxWidth: isMobile ? "100%" : "300px",
                                whiteSpace: isMobile ? "none"  : "nowrap",
                                overflow: isMobile ? "none"  : "hidden",
                                textOverflow: "ellipsis",
                                fontSize: isMobile ? 14 : 16,
                                fontWeight: 500,
                            }}
                            className="
                                text-slate-700
                                cursor-help

                                transition-opacity
                                duration-300
                                ease-out

                                group-hover:opacity-80
                            "
                        >
                            {desscription}
                        </Typography>

                    </Box>
                </Card>
            </Tooltip>
        </Link >


    );
}
