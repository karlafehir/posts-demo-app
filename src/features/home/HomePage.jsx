import { Input } from "antd";
import PostCard from "../../components/PostCard";

const HomePage = ({ filteredPosts, handleSearchChange, searchItem }) => {
  if (!filteredPosts) return <div>Loading...</div>;

  return (
    <div>
      <div className="pb-10">
        <Input
          type="text"
          placeholder="Search posts or author"
          value={searchItem}
          onChange={handleSearchChange}
        />
      </div>
      {filteredPosts.map((post) => (
        <div className="py-1" key={post.id}>
          <PostCard post={post} showDetails={false} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
