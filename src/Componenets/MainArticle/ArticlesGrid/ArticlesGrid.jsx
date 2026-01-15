"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import ArticleCard from "@/Componenets/Common/ArticleCard/ArticleCard";
import { articles } from "../article";

export default function ArticlesGrid({ showHeading = true, category = "all" }) {
    const filteredArticles =
        category === "all"
            ? articles
            : articles.filter((a) => a.category === category);

    return (
        <Box display="flex" flexDirection="column" gap={6}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/article/${item.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <ArticleCard
                            date={new Date(item.date).toLocaleDateString("en-GB")}
                            title={item.title}
                            cta="आता वाचा"
                        />
                    </Link>
                ))}
            </div>
        </Box>
    );
}
