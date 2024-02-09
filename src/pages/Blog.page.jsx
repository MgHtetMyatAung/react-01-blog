import { useEffect, useState } from "react";
import { api } from "../services/apiConfig";
import BlogCard from "../components/BlogCard";

function BlogsPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data: results } = await api.get("/posts");
      setData(results);
    };
    fetchPosts();
  }, []);

  return (
    <div className=" min-h-screen">
      <div className=" max-w-[1024px] mx-auto grid grid-cols-3 gap-3">
        {data.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
