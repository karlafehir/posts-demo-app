import PostCard from "./PostCard";
import { Input } from "antd";

const HomePage = ({ filteredPosts, handleSearchChange, searchItem }) => {
  if (!filteredPosts) return <div>Loading</div>;

  return (
    <div>
      <Input
        type="text"
        placeholder="Search posts"
        value={searchItem}
        onChange={handleSearchChange}
      />
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomePage;
