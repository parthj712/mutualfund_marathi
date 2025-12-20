"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function InsuranceCards() {

    const cards = [
        {
            src: "/Insurance/i1.png",
            alt: "Life Insurance",
            title: "जीवन विमा",
            desc: "अकस्मात मृत्यू झाल्यास कुटुंबाच्या आर्थिक गरजांसाठी सुरक्षित संरक्षण देणारा विमा.",
            link: "/insurance/life-insurance",
        },
        {
            src: "/Insurance/i2.png",
            alt: "General Insurance",
            title: "जनरल इन्सुरन्स",
            desc: "वाहन, घर, प्रवास व मालमत्तेचे नुकसान, अपघात किंवा चोरीपासून संरक्षण देणारा विमा.",
            link: "/insurance/vehical-insurance",
        },
        {
            src: "/Insurance/i3.png",
            alt: "Health Insurance",
            title: "हेल्थ इन्सुरन्स",
            desc: "आजारपण, रुग्णालय खर्च व उपचारांसाठी आर्थिक संरक्षण देणारा आरोग्य विमा.",
            link: "/insurance/family",
        },
    ];


    return (
        <Box className="w-full py-10">
            <div
                className="
          max-w-8xl
          mx-auto
          px-4
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-10
        "
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="
              group
              relative
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              transition-transform
              duration-300
              hover:-translate-y-1
            "
                    >
                        {/* Image */}
                        <Image
                            src={card.src}
                            alt={card.alt}
                            width={600}
                            height={200}
                            className="w-full h-auto object-cover"
                        />

                        {/* Overlay (ONLY for first card) */}
                        { (
                            <Box p={4}
                                className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/70
      via-black/40
      to-black/20
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
      flex
      flex-col
      justify-between
      p-6
    "
                            >
                                {/* TOP TITLE */}
                                <Typography
                                    fontSize="24px"
                                    fontWeight={600}
                                    className="text-white"
                                >
                                    {card.title}
                                </Typography>

                                {/* BOTTOM CONTENT */}
                                <Box display={"flex"} flexDirection={"column"} gap={2} className="text-white">
                                    <Typography fontSize={"18px"}>
                                        {card.desc}
                                    </Typography>

                                    <Link
                                        href={card.link}
                                        className="
          inline-flex
          items-center
          gap-2
          text-xl
          font-medium
          text-white
          hover:underline
        "
                                    >
                                        अधिक वाचा
                                        <FiArrowUpRight className="text-lg" />
                                    </Link>
                                </Box>
                            </Box>
                        )}

                    </div>
                ))}
            </div>
        </Box>
    );
}
