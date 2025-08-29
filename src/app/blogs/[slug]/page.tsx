// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

async function getBlog(slug: string) {
  const res = await fetch(
    `http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog");
  }

  const data = await res.json();
  return data?.data?.[0]; // get first blog
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlog(params.slug);

  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-10 prose prose-lg">
      <h1 className="text-4xl font-bold mb-4">{blog.blog_title}</h1>

      {blog.blog_header_image?.url && (
        <img
          src={`http://localhost:1337${blog.blog_header_image.url}`}
          alt={blog.blog_title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Render blog content */}
      {blog.blog_content ? (
        <ReactMarkdown>{blog.blog_content}</ReactMarkdown>
      ) : (
        <p className="text-gray-600 italic">No content available.</p>
      )}
    </article>
  );
}
