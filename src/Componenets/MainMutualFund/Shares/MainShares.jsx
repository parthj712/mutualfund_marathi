"use client";

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import Future_N_Options from "./F&O/Future_N_Options";
import Capital_markets_type from "./Capital_markets_type/Capital_markets_type";
import HeaderMutualFund from "../HeaderMutualFund.jsx/HeaderMutualFund";
import HeaderSelectionDropdown from "@/Componenets/Common/HeaderSelectionDropdown/HeaderSelectionDropdown";


const MainShares = () => {
    const [tab, setTab] = useState(0);
    const [type, setType] = useState("fno");



    const tabContent = [
        {
            label: "फ्युचर्स & ऑप्शन्स",
            description: "फ्युचर्स & ऑप्शन",
        },
        {
            label: "भांडवली बाजार",
            description: "भांडवली बाजार",
        },
    ];


    return (
        <Box>
            <HeaderSelectionDropdown
                image="/Header/ShareBazar.png"
                heading="शेअर बाजार"
                description={
                    type === "fno"
                        ? "फ्युचर्स & ऑप्शन्स"
                        : "भांडवली बाजार"
                }
                value={type}
                onChange={setType}
                options={[
                    { label: "फ्युचर्स & ऑप्शन्स", value: "fno" },
                    { label: "भांडवली बाजार", value: "capital" },
                ]}
            />



            {/* CONTENT */}
            {type === "fno" && <Future_N_Options />}
            {type === "capital" && <Capital_markets_type />}
        </Box>
    );
};

export default MainShares;
