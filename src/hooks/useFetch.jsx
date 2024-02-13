import { useEffect, useState } from "react";
import { api } from "../services/apiConfig";

export function useFetch(url) {
  const [data, setData] = useState({
    loading: false,
    results: null,
    error: false,
  });
  useEffect(() => {
    const fetchPosts = async () => {
      setData({ ...data, loading: true });
      const res = await api.get(url);
      if (res.status === 200) {
        setData({ ...data, loading: false, results: res.data });
      } else {
        setData({ ...data, loading: false, error: true });
      }
    };
    fetchPosts();
  }, [url]);
  return { ...data };
}
