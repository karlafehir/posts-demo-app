import HomePage from "./HomePage";
import { useGetPosts } from "./api/useGetPost";

const HomePageContainer = () => {
  const posts = useGetPosts();

  return <HomePage posts={posts} />;
};

export default HomePageContainer;
