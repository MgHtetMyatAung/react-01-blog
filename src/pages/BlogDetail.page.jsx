import { useNavigate, useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { useFetch } from "../hooks/useFetch";
export default function BlogDetailPage() {
  const { id } = useParams();
  const { loading, results } = useFetch(`/posts/${id}`);
  const navigation = useNavigate();
  return (
    <>
      {loading ? (
        <div className=" h-screen grid place-items-center">
          <FadeLoader color="#36d7b7" />
        </div>
      ) : (
        <div className=" max-w-[1024px] mx-auto h-screen">
          <button onClick={() => navigation("/blogs")}>back to home</button>
          <h1 className=" mt-5">{results?.title}</h1>
          <p>{results?.body}</p>
        </div>
      )}
    </>
  );
}
