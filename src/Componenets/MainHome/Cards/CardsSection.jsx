"use client";

import InfoCard from "@/Componenets/Common/InfoCard";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function CardsSection() {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const cardData = [
        {
            image: "/Cards/C1.png",
            title: "संचय ठेवा आणि बाजारातून दीर्घकालीन फायदा मिळवा",
            desc: "संचयाच्या योग्य योजनेत दीर्घकालीन गुंतवणूक..."
        },
        {
            image: "/Cards/C1.png",
            title: "संचय ठेवा आणि बाजारातून दीर्घकालीन फायदा मिळवा",
            desc: "योग्य नियोजन तुम्हाला आर्थिक स्वातंत्र्य..."
        },
        {
            image: "/Cards/C1.png",
            title: "संचय ठेवा आणि दीर्घकालीन लाभ घ्या",
            desc: "म्युच्युअल फंडात योग्य गुंतवणूक..."
        },
        {
            image: "/Cards/C1.png",
            title: "संचय ठेवा आणि दीर्घकालीन लाभ घ्या",
            desc: "या योजनांमुळे तुमचा आर्थिक प्रवास..."
        }
    ];

    return (
        <Box p={isMobile ? 3 : 10}>
            {isMobile ? (
                <div className="flex overflow-x-auto pb-4 space-x-4">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-[96%] shrink"   // 👈 This makes next card visible
                        >
                            <InfoCard {...card} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {cardData.map((card, index) => (
                        <InfoCard key={index} {...card} />
                    ))}
                </div>
            )}

        </Box>
    );
}
