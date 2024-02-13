import BlogCard from "../components/BlogCard";
import { useFetch } from "../hooks/useFetch";
import FadeLoader from "react-spinners/FadeLoader";

function BlogsPage() {
  const { loading, results } = useFetch("/posts");

  return (
    <>
      {loading ? (
        <div className=" h-screen grid place-items-center">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <div className=" min-h-screen py-5">
          <div className=" max-w-[1024px] mx-auto grid grid-cols-3 gap-3">
            {results?.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BlogsPage;
