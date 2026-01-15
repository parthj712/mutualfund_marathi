import { notFound } from "next/navigation";
import ArticleDetailClient from "@/Componenets/MainArticle/ArticleDetailClient/ArticleDetailClient";
import { articles } from "@/Componenets/MainArticle/article";

export default async function ArticlePage({ params }) {
     const { slug } = await params;

    // 🔍 Find article by slug
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound(); // ✅ 404 page
    }

    return <ArticleDetailClient article={article} />;
}
