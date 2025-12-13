"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FundCategoryCard({ imgSrc, title }) {
    return (
        <motion.div
            className="flex flex-col items-center gap-10 cursor-pointer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
        >
            {/* GRAPH IMAGE */}
            <motion.div
                className="relative w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center"
                variants={{
                    hidden: { scale: 0, rotate: -30, opacity: 0 },
                    show: { scale: 1, rotate: 0, opacity: 1 },
                }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                whileHover={{ scale: 1.15 }}
            >
                <Image
                    src={imgSrc}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </motion.div>


            {/* TITLE */}
            <motion.p
                className="text-[20px] md:text-[18px] lg:text-[20px] font-semibold text-center"
                variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
                {title}
            </motion.p>
        </motion.div>
    );
}
