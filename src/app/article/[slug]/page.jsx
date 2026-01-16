import { notFound } from "next/navigation";
import ArticleDetailClient from "@/Componenets/MainArticle/ArticleDetailClient/ArticleDetailClient";
import { articles } from "@/Componenets/MainArticle/article";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // 🔍 Find article by slug
  let article;

  try {
    const res = await fetch(
      `https://mutualfund-admin-backend.vercel.app/api/lekh/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) notFound();

    const data = await res.json();

    article = data.lekh;
  } catch (error) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
