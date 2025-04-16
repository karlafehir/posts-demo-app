import HomePage from "./HomePage";
import { useFetch } from "../../hooks/useFetch";

const HomePageContainer = () => {
  const posts = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return <HomePage posts={posts} />;
};

export default HomePageContainer;
