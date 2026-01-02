import { notFound } from "next/navigation";
import BlogDetailClient from "@/Componenets/MainBlogs/BlogDetailClient/BlogDetailClient";

export default async function BlogPage({ params }) {
  const { slug } = await params;

  let blog;

  try {
    const res = await fetch(
      `https://mutualfund-admin-backend.vercel.app/api/blogs/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) notFound();

    const data = await res.json();

    blog = data.blog;
  } catch (error) {
    notFound();
  }

  return <BlogDetailClient blog={blog} />;
}
