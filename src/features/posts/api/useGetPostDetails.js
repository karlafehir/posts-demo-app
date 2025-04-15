import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPostDetails = (postId) => {
  const [post, setPost] = useState({});

  async function fetchPosts() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        const data = res.data;
        setPost(data);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return post;
};
