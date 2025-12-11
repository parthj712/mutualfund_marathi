"use client";


import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineDirectionsCar } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import CommonInfoCard from "../CommonInfoCard/CommonInfoCard";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";

export default function CardList() {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));


    const cards = [
        {
            icon: <FaRupeeSign />,
            title: "म्युच्युअल फंड",
            desc: "म्युच्युअल फंड ही अशी आर्थिक साधने आहेत जी विविध गुंतवणूक पोर्टफोलिओमध्ये गुंतवणूक करतात.",
        },
        {
            icon: <MdOutlineDirectionsCar />,
            title: "सामान्य विमा",
            desc: "कार, मोटरसायकल किंवा स्कूटर असलेल्या मोटर विमा अनिवार्य आहे...",
        },
        {
            icon: <FaShieldHeart />,
            title: "जीवन विमा",
            desc: "जीवन विमा हे एक आर्थिक उत्पादन आहे जे पॉलिसीधारकाला संरक्षण देते...",
        },
        {
            icon: <FaHeartbeat />,
            title: "आरोग्य विमा",
            desc: "गेल्या दशकात भारतात वाढत्या आरोग्यखर्चामुळे लोकांना अधिक गरज भासली आहे...",
        },
    ];

    return (
        <Box display={"flex"} flexDirection={"column"} gap={10} p={isMobile ? 3 : 10}>

            <GradientHeading text="आमच्या सेवा" />
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {cards.map((c, i) => (
                    <CommonInfoCard
                        key={i}
                        icon={c.icon}
                        title={c.title}
                        desc={c.desc}
                    />
                ))}
            </Box>
        </Box>
    );
}
