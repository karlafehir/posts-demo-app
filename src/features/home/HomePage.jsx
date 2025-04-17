import PostCard from "./PostCard";
import { Input } from "antd";

const HomePage = ({ filteredPosts, users, handleSearchChange, searchItem }) => {
  if (!filteredPosts || !users) return <div>Loading</div>;

  return (
    <div>
      <Input
        type="text"
        placeholder="Search posts"
        value={searchItem}
        onChange={handleSearchChange}
      />
      {filteredPosts.map((post) => (
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
