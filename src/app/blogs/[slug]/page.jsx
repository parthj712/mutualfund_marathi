import { notFound } from "next/navigation";
import BlogDetailClient from "@/Componenets/MainBlogs/BlogDetailClient/BlogDetailClient";
import { blogs } from "@/Componenets/MainBlogs/blog";

export default async function BlogPage({ params }) {
    // ✅ UNWRAP params (THIS IS THE FIX)
    const { slug } = await params;

    console.log("Blog Slug:", slug);

    const blog = blogs.find((item) => item.slug === slug);

    console.log("Found Blog:", blog);

    if (!blog) {
        notFound();
    }

    return <BlogDetailClient blog={blog} />;
}
