"use client";


import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import { FaShieldHeart } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import CommonInfoCard from "../CommonInfoCard/CommonInfoCard";
import GradientHeading from "@/Componenets/Common/GradientHeading/GradientHeading";
import { motion } from "framer-motion";



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
            icon: <TimeToLeaveIcon />,
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
        <Box display={"flex"} flexDirection={"column"} gap={isMobile ? 4 : 10} px={isMobile ? 4 : isTablet ? 6 : 10}
            py={isMobile ? 2 : isTablet ? 6 : 10}>

            <GradientHeading text="आमच्या सेवा" />
            <Box
                component={motion.div}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2, // ⭐ delay between cards
                        },
                    },
                }}
            >


                {cards.map((c, i) => (
                    <motion.div
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <CommonInfoCard
                            icon={c.icon}
                            title={c.title}
                            desc={c.desc}
                        />
                    </motion.div>
                ))}


            </Box>
        </Box>
    );
}
