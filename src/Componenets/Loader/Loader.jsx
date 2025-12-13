"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-[9999]">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                }}
            >
                <Image
                    src="/Tlogo.png"
                    alt="Loading..."
                    width={90}
                    height={90}
                    style={{ borderRadius: "50%" }}
                />
            </motion.div>
        </div>
    );
}


// #ff122a