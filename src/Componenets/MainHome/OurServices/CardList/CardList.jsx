"use client";

import {
    Box,
    useMediaQuery,
    useTheme,
    Select,
    MenuItem,
} from "@mui/material";
import CommonInfoCard from "../CommonInfoCard/CommonInfoCard";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CardList() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    /* ---------------- FILTER STATE ---------------- */
    const categories = [
        "Banking and PSU",
        "Debt – Banking and PSU",
        "Debt – Corporate Bond",
    ];


    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    /* ---------------- SAMPLE FUND DATA ---------------- */
    const funds = [
        /* ---------------- Banking and PSU ---------------- */
        {
            id: 1,
            logo: "/funds/icici.png",
            title: "ICICI Prudential Banking & PSU Debt Fund",
            category: "Banking and PSU",
            launchDate: "05-01-2014",
            aum: "8,112.19",
            fiveYearReturn: "7.02",
        },
        {
            id: 2,
            logo: "/funds/uti.png",
            title: "UTI Banking & PSU Fund Regular Plan",
            category: "Banking and PSU",
            launchDate: "03-09-2013",
            aum: "6,542.87",
            fiveYearReturn: "6.91",
        },
        {
            id: 3,
            logo: "/funds/sbi.png",
            title: "SBI Banking & PSU Debt Fund",
            category: "Banking and PSU",
            launchDate: "15-02-2015",
            aum: "4,210.34",
            fiveYearReturn: "6.85",
        },

        /* ---------------- Debt – Banking and PSU ---------------- */
        {
            id: 4,
            logo: "/funds/franklin.png",
            title: "Franklin India Banking & PSU Debt Fund",
            category: "Debt – Banking and PSU",
            launchDate: "05-04-2014",
            aum: "5,485.44",
            fiveYearReturn: "5.83",
        },
        {
            id: 5,
            logo: "/funds/hdfc.png",
            title: "HDFC Banking & PSU Debt Fund",
            category: "Debt – Banking and PSU",
            launchDate: "12-08-2014",
            aum: "7,920.11",
            fiveYearReturn: "5.96",
        },
        {
            id: 6,
            logo: "/funds/axis.png",
            title: "Axis Banking & PSU Debt Fund",
            category: "Debt – Banking and PSU",
            launchDate: "21-06-2016",
            aum: "3,675.29",
            fiveYearReturn: "5.74",
        },

        /* ---------------- Debt – Corporate Bond ---------------- */
        {
            id: 7,
            logo: "/funds/kotak.png",
            title: "Kotak Corporate Bond Fund",
            category: "Debt – Corporate Bond",
            launchDate: "29-12-1998",
            aum: "31,699.11",
            fiveYearReturn: "6.12",
        },
        {
            id: 8,
            logo: "/funds/icici.png",
            title: "ICICI Prudential Corporate Bond Fund",
            category: "Debt – Corporate Bond",
            launchDate: "12-03-2009",
            aum: "28,455.78",
            fiveYearReturn: "6.08",
        },
        {
            id: 9,
            logo: "/funds/hdfc.png",
            title: "HDFC Corporate Bond Fund",
            category: "Debt – Corporate Bond",
            launchDate: "18-11-2015",
            aum: "22,310.66",
            fiveYearReturn: "5.97",
        },
    ];



    /* ---------------- FILTER LOGIC ---------------- */
    const filteredFunds = funds.filter(
        (fund) => fund.category === selectedCategory
    );


    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={isMobile ? 4 : 8}
            px={isMobile ? 4 : isTablet ? 6 : 10}
            py={isMobile ? 2 : 6}
        >
            {/* HEADING + DROPDOWN */}
            <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems={isMobile ? "flex-start" : "center"}
                gap={3}
            >
                <GradientHeading text="Top Performing Funds" />
            </Box>

            <Box display={"flex"} flexDirection={"column"}  gap={6}>
                <Select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    sx={{
                        minWidth: "100%",
                        borderRadius: "999px",
                        backgroundColor: "#F5F8FF",
                        fontWeight: 600,
                    }}
                >
                    {categories.map((cat) => (
                        <MenuItem key={cat} value={cat}>
                            Debt: {cat}
                        </MenuItem>
                    ))}
                </Select>
                {/* CARDS */}
                <Box
                    component={motion.div}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >

                    {filteredFunds.map((fund, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <CommonInfoCard
                                logo={fund.logo}
                                title={fund.title}
                                category={`Debt: ${fund.category}`}
                                launchDate={fund.launchDate}
                                aum={fund.aum}
                                fiveYearReturn={fund.fiveYearReturn}
                            />
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
