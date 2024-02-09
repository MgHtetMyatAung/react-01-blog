import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/apiConfig";
import FadeLoader from "react-spinners/FadeLoader";
export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await api.get(`/posts/${id}`);
      setBlog(data);
    };
    fetchBlog();
  }, [id]);

  return (
    <>
      {blog ? (
        <div className=" max-w-[1024px] mx-auto h-screen">
          <h1>{blog?.title}</h1>
          <p>{blog?.body}</p>
        </div>
      ) : (
        <div className=" h-screen grid place-items-center">
          <FadeLoader color="#36d7b7" />
        </div>
      )}
    </>
  );
}
