"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { blogs } from "../blog";

// const blogs = [
//     {
//         slug: "sip-ne-sampatti-kashi-vadhvavi",
//         category: "म्युच्युअल फंड",
//         title: "SIP ने संपत्ती कशी वाढवावी?",
//         date: "12 डिसेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Calculators/ChildEducation.jpg",
//         information : "SIP म्हणजे काय? SIP चा अर्थ Systematic Investment Plan असा होतो. SIP ही एक गुंतवणूक पद्धत आहे ज्यामध्ये तुम्ही नियमितपणे ठराविक रक्कम म्युच्युअल फंडात गुंतवता. SIP चा मुख्य उद्देश म्हणजे लहान लहान रक्कमांद्वारे दीर्घकालीन संपत्ती निर्माण करणे. SIP कसे कार्य करते? SIP मध्ये तुम्ही दर महिन्याला ठराविक रक्कम गुंतवता. उदाहरणार्थ, तुम्ही दर महिन्याला ५,००० रुपये SIP मध्ये गुंतवण्याचा निर्णय घेतला आहे. या रकमेने तुम्ही म्युच्युअल फंड युनिट्स खरेदी करता. SIP चा फायदा काय? १. अनुशासनात्मक गुंतवणूक: SIP तुम्हाला नियमितपणे गुंतवणूक करण्याची सवय लावते. २. रक्कम कमी पडल्यासही गुंतवणूक: तुम्ही कमी रक्कमेतही गुंतवणूक सुरू करू शकता. ३. जोखीम व्यवस्थापन: SIP मधील नियमित गुंतवणूकामुळे बाजारातील चढ-उतारांपासून संरक्षण मिळते."
//     },
//     {
//         slug: "aapatkalin-nidhi-kiti-asava",
//         category: "आर्थिक नियोजन",
//         title: "आपत्कालीन निधी किती असावा?",
//         date: "08 डिसेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Blogs/blog2.jpg",
//     },
//     {
//         slug: "joakhim-profile-kase-tharvave",
//         category: "गुंतवणूक",
//         title: "जोखीम प्रोफाइल कसे ठरवावे?",
//         date: "01 डिसेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Blogs/blog3.jpg",
//     },
//     {
//         slug: "nivrutti-guntavnuk-niyojan",
//         category: "निवृत्ती नियोजन",
//         title: "निवृत्तीसाठी योग्य गुंतवणूक कशी निवडावी?",
//         date: "20 नोव्हेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Blogs/blog4.jpg",
//     },
//     {
//         slug: "kar-niyojan-kase-kara",
//         category: "कर नियोजन",
//         title: "कर वाचवण्यासाठी योग्य गुंतवणूक कोणती?",
//         date: "18 नोव्हेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Blogs/blog5.jpg",
//     },
//     {
//         slug: "term-insurance-ka-avashyak",
//         category: "इन्शुरन्स",
//         title: "टर्म इन्शुरन्स का आवश्यक आहे?",
//         date: "10 नोव्हेंबर 2025",
//         author: "Parth Jathar",
//         image: "/Blogs/blog6.jpg",
//     },
// ];

const CARDS_PER_ROW = 3;

export default function BlogExpandableGrid() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const router = useRouter();

    const [activeMap, setActiveMap] = useState({});

    /* Split blogs into rows */
    const rows = [];
    for (let i = 0; i < blogs.length; i += CARDS_PER_ROW) {
        rows.push(blogs.slice(i, i + CARDS_PER_ROW));
    }

    /* Mobile fallback (simple cards) */
    if (isMobile) {
        return (
            <Box display="flex" flexDirection="column" gap={2}>
                {blogs.map((blog, index) => (
                    <Box
                        key={index}
                        onClick={() => router.push(`/blogs/${blog.slug}`)}
                        sx={{
                            height: 260,
                            borderRadius: 6,
                            overflow: "hidden",
                            position: "relative",
                            cursor: "pointer",
                        }}
                    >
                        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                            }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 20,
                                left: 20,
                                right: 20,
                                color: "#fff",
                            }}
                        >
                            <Typography fontWeight={600}>{blog.title}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column" gap={2.5}>
            {rows.map((rowBlogs, rowIndex) => (
                <Box
                    key={rowIndex}
                    sx={{
                        display: "flex",
                        gap: 1.5,
                        height: 360,
                        overflow: "hidden",
                    }}
                >
                    {rowBlogs.map((blog, cardIndex) => {
                        const isActive =
                            activeMap[rowIndex] === cardIndex ||
                            (activeMap[rowIndex] === undefined && cardIndex === 0);

                        return (
                            <Box
                                key={cardIndex}
                                onMouseEnter={() =>
                                    setActiveMap((prev) => ({
                                        ...prev,
                                        [rowIndex]: cardIndex,
                                    }))
                                }
                                onClick={() => router.push(`/blogs/${blog.slug}`)}
                                sx={{
                                    flex: isActive ? 3 : 1,
                                    transition: "all 0.45s ease",
                                    borderRadius: 6,
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    minWidth: 0,
                                }}
                            >
                                {/* Image */}
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background: isActive
                                            ? "linear-gradient(to top, rgba(0,0,0,0.65), transparent)"
                                            : "rgba(0,0,0,0.35)",
                                        transition: "0.3s",
                                    }}
                                />

                                {/* Content */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 20,
                                        left: 20,
                                        right: 20,
                                        color: "#fff",
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive
                                            ? "translateY(0)"
                                            : "translateY(12px)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            px: 2,
                                            py: 0.5,
                                            mb: 1,
                                            borderRadius: 20,
                                            fontSize: 13,
                                            fontWeight: 600,
                                            backgroundColor: "rgba(255,255,255,0.9)",
                                            color: "#000",
                                        }}
                                    >
                                        {blog.category}
                                    </Box>

                                    <Typography
                                        fontSize="20px"
                                        fontWeight={600}
                                        mb={0.5}
                                        sx={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {blog.title}
                                    </Typography>

                                    <Typography fontSize="14px" opacity={0.85}>
                                        {blog.date} • {blog.author}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            ))}
        </Box>
    );
}
