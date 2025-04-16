import HomePage from "./HomePage";
import { useFetch } from "../../hooks/useFetch";

const HomePageContainer = () => {
  const posts = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const users = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return <HomePage posts={posts} users={users} />;
};

export default HomePageContainer;
