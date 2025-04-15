import PostCard from "./PostCard";
import { useGetPosts } from "./api/useGetPost";

const HomePage = () => {
  const posts = useGetPosts();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
