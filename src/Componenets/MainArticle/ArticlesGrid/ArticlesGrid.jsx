"use client";

import Link from "next/link";
import { Box } from "@mui/material";
import ArticleCard from "@/Componenets/Common/ArticleCard/ArticleCard";

export default function ArticlesGrid({ articles = [], category = "all" }) {
  const filteredArticles =
    category === "all"
      ? articles
      : articles.filter((a) => a.category === category);

  return (
    <Box display="flex" flexDirection="column" gap={6}>
      <div className="grid grid-cols-1 gap-6">
        {filteredArticles.map((item) => (
          <Link
            key={item._id}
            href={`/article/${item.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ArticleCard
              title={item.title}
              cta="आता वाचा"
              date={new Date(item.publishDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          </Link>
        ))}
      </div>
    </Box>
  );
}
