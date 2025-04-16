import PostCard from "./PostCard";

const HomePage = ({ posts, users }) => {
  if (!users) return <div>Loading</div>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          user={users.find((user) => post.userId == user.id)}
        />
      ))}
    </div>
  );
};

export default HomePage;
