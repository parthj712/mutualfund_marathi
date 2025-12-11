"use client";

import Image from "next/image";

export default function FundCategoryCard({ imgSrc, title }) {


    return (
        <div className="flex flex-col items-center gap-5 cursor-pointer transition-all hover:scale-[1.03]">

            {/* GRAPH IMAGE */}
            <div className="w-34 lg:w-32 md:w-28 h-34 lg:h-32 md:h-28 flex items-center justify-center">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={150}
                    height={150}
                    className="object-contain"
                />
            </div>

            {/* TITLE */}
            <p className="text-[20px] md:text-[18px] lg:text[20px] font-semibold text-center">
                {title}
            </p>
        </div>
    );
}
