/* eslint-disable react/prop-types */
import { StringConcat } from "../utils/helper";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog }) {
  const navigate = useNavigate();
  return (
    <div
      className=" p-5 shadow-md border rounded-md cursor-pointer"
      onClick={() => navigate(`/blogs/${blog.id}`)}
    >
      <h1 className=" text-lg font-semibold mb-3">
        {StringConcat(blog.title, 20)}
      </h1>
      <p className=" text-gray-500">{StringConcat(blog.body, 50)}</p>
    </div>
  );
}

export default BlogCard;
