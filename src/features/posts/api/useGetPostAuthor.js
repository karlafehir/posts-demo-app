import axios from "axios";
import { useEffect, useState } from "react";

export const useGetPostAutor = (post) => {
  const [author, setAuthor] = useState([]);

  async function fetchPostAuthor() {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const users = res.data;
        const author = users.find((user) => post.userId === user.id);
        setAuthor(author);
      });
  }

  useEffect(() => {
    fetchPostAuthor();
  }, []);

  return author;
};
