import { lazy, Suspense } from "react";
import { Input } from "antd";

const HomePage = ({ filteredPosts, handleSearchChange, searchItem }) => {
  if (!filteredPosts) return <div>Loading</div>;

  const PostCard = lazy(() => import("../../components/PostCard"));

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
      <Suspense fallback={<h2>🌀 Loading posts...</h2>}>
        {filteredPosts.map((post) => (
          <div className="py-1" key={post.id}>
            <PostCard post={post} showDetails={false} />
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default HomePage;
