// app/blogs/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "Read the latest articles",
};

// ✅ Next.js 15 requires viewport separately
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

async function getBlogs() {
  const res = await fetch("http://localhost:1337/api/blogs?populate=*", {
    next: { revalidate: 0 }, // request-time fetch (no caching)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>

      <div className="grid gap-6">
        {blogs?.data?.map((blog: any) => (
          <div
            key={blog.id}
            className="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/blogs/${blog.slug}`} className="hover:underline">
                {blog.blog_title}
              </Link>
            </h2>

            {blog.blog_header_image?.url && (
              <img
                src={`http://localhost:1337${blog.blog_header_image.url}`}
                alt={blog.blog_title}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
            )}

            <p className="text-gray-600 text-sm">
              Published on {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
