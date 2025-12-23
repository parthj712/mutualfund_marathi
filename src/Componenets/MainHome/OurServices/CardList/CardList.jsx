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
        "Childrens Fund",
        "Debt: Banking and PSU",
        "Debt: Corporate Bond",
    ];


    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    /* ---------------- SAMPLE FUND DATA ---------------- */
    const funds = [
        /* ---------------- Childrens Fund ---------------- */
        {
            id: 1,
            logo: "/funds/icici.png",
            title: "ICICI Pru Childrens Fund Reg Plan",
            category: "Childrens Fund",
            launchDate: "20-08-2001",
            aum: "1424.12",
            fiveYearReturn: "16.59",
        },
        {
            id: 2,
            logo: "/funds/uti.png",
            title: "ABSL Bal Bhavishya Yojna Reg Gr",
            category: "Childrens Fund",
            launchDate: "05-02-2019",
            aum: "1202.81",
            fiveYearReturn: "12.01",
        },
        {
            id: 3,
            logo: "/funds/sbi.png",
            title: "Union Childrens Fund Reg Gr",
            category: "Childrens Fund",
            launchDate: "19-12-2023",
            aum: "80.84",
            fiveYearReturn: "0",
        },


        /* ---------------- Debt: Banking and PSU ---------------- */
        {
            id: 4,
            logo: "/funds/franklin.png",
            title: "UTI Banking & PSU Fund Reg Gr",
            category: "Debt: Banking and PSU",
            launchDate: "05-01-2014",
            aum: "811.19",
            fiveYearReturn: "7",
        },
        {
            id: 5,
            logo: "/funds/hdfc.png",
            title: "Franklin India Banking & PSU Debt Gr",
            category: "Debt: Banking and PSU",
            launchDate: "05-04-2014",
            aum: "485.44",
            fiveYearReturn: "5.83",
        },
        {
            id: 6,
            logo: "/funds/axis.png",
            title: "Kotak Banking and PSU Debt Gr",
            category: "Debt: Banking and PSU",
            launchDate: "29-12-1998",
            aum: "5699.11",
            fiveYearReturn: "5.98",
        },

        /* ---------------- Debt: Corporate Bond ---------------- */
        {
            id: 7,
            logo: "/funds/kotak.png",
            title: "Franklin India Corp Debt Gr",
            category: "Debt: Corporate Bond",
            launchDate: "23-06-1997",
            aum: "1309.34",
            fiveYearReturn: "5.98",
        },
        {
            id: 8,
            logo: "/funds/icici.png",
            title: "BARODA BNP PARIBAS Corporate Bond Fund Gr",
            category: "Debt: Corporate Bond",
            launchDate: "08-11-2008",
            aum: "490.14",
            fiveYearReturn: "5.42",
        },
        {
            id: 9,
            logo: "/funds/hdfc.png",
            title: "HSBC Corporate Bond Fund Reg Gr",
            category: "Debt: Corporate Bond",
            launchDate: "01-01-2013",
            aum: "6257.69",
            fiveYearReturn: "5.71",
        },


        /* ---------------- Debt: Credit Risk ---------------- */


        {
            id: 10,
            logo: "/funds/kotak.png",
            title: "DSP Credit Risk Reg Gr",
            category: "Debt: Corporate Bond",
            launchDate: "23-06-1997",
            aum: "1309.34",
            fiveYearReturn: "5.98",
        },
        {
            id: 11,
            logo: "/funds/icici.png",
            title: "HSBC Credit Risk Fund Reg Gr",
            category: "Debt: Corporate Bond",
            launchDate: "08-11-2008",
            aum: "490.14",
            fiveYearReturn: "5.42",
        },
        {
            id: 12,
            logo: "/funds/hdfc.png",
            title: "ABSL Credit Risk Reg Gr",
            category: "Debt: Corporate Bond",
            launchDate: "01-01-2013",
            aum: "6257.69",
            fiveYearReturn: "5.71",
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

            <Box display={"flex"} flexDirection={"column"} gap={6}>
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
