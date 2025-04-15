import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPosts = () => {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        const data = res.data;
        setPosts(data);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return posts;
};
