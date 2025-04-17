import HomePage from "./HomePage";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

const HomePageContainer = ({}) => {
  const [searchItem, setSearchItem] = useState("");

  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleSearchChange = (e) => {
    setSearchItem(e.target.value.toLowerCase());
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchItem)
  );

  return (
    <HomePage
      filteredPosts={filteredPosts}
      users={users}
      handleSearchChange={handleSearchChange}
      searchItem={searchItem}
    />
  );
};

export default HomePageContainer;
