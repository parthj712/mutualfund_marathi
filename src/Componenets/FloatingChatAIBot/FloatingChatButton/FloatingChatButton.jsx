"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";

export default function FloatingChatButton({ setOpen }) {
    const [showButton, setShowButton] = useState(true);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(false);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                setShowButton(true);
            }, 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            onClick={() => setOpen(true)}
            className="
        fixed bottom-6 right-6 z-50
        w-16 h-16
        rounded-full
        cursor-pointer
        flex items-center justify-center

        bg-gradient-to-br from-[#008BDA] to-[#004A74]
        shadow-[0_10px_30px_rgba(0,139,218,0.45)]
        backdrop-blur-md
        border border-white/20
      "

            /* 🔵 CONTINUOUS BOUNCE */
            animate={{
                y: [0, -4, 0],
                opacity: showButton ? 1 : 0,
                scale: showButton ? 1 : 0.9,
            }}

            /* 🔵 IMPORTANT: separate transitions */
            transition={{
                y: {
                    duration: 2.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                },
                opacity: {
                    duration: 0.25,
                    ease: "easeOut",
                },
                scale: {
                    duration: 0.25,
                    ease: "easeOut",
                },
            }}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Icon */}
            <span className="text-3xl text-white drop-shadow-md"> <TbMessageChatbotFilled /></span>
        </motion.div>
    );
}
