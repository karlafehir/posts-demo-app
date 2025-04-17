import HomePage from "./HomePage";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

const HomePageContainer = ({}) => {
  const [searchItem, setSearchItem] = useState("");

  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const postsWithUsers = posts.map((post) => {
    let user = users.find((user) => user.id == post.userId);
    return { ...post, user };
  });

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const filteredPosts = postsWithUsers.filter((post) =>
    post.title.toLowerCase().includes(searchItem)
  );

  return (
    <HomePage
      filteredPosts={filteredPosts}
      handleSearchChange={handleSearchChange}
      searchItem={searchItem}
    />
  );
};

export default HomePageContainer;
