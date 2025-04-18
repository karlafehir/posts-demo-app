import { Link } from "react-router-dom";

const PostCard = ({ post, showDetails }) => {
  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="border-1 border-gray-200  rounded-xl p-10">
        <div className="flex justify-between ">
          <div className="text-3xl pb-8 font-semibold">{post.title}</div>
          <img
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            className="h-10"
          />
        </div>
        {showDetails ? (
          <div className="pb-8 mr-16">{post.body}</div>
        ) : (
          <div>
            <div className="pb-4">
              <div className="text-gray-400">by {post.user.name}</div>
              <div>Comments</div>
            </div>
            <Link to={`/posts/${post.id}`} className="text-blue-700">
              View More
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default PostCard;
