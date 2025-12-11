"use client";

import Image from "next/image";

export default function FundCategoryCard({ imgSrc, title }) {


    return (
        <div className="flex flex-col items-center gap-5 cursor-pointer transition-all hover:scale-[1.2]">

            {/* GRAPH IMAGE */}
            <div className="w-40 lg:w-32 md:w-28 h-40 lg:h-32 md:h-28 flex items-center justify-center">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={250}
                    height={250}
                    // className="object-contain"
                />
            </div>

            {/* TITLE */}
            <p className="text-[20px] md:text-[18px] lg:text[20px] font-semibold text-center">
                {title}
            </p>
        </div>
    );
}
