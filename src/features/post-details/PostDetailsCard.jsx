import { Link } from "react-router-dom";

const PostDetailsCard = ({ post }) => {
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
        <div className="pb-8 mr-16">{post.body}</div>
      </div>
    </>
  );
};

export default PostDetailsCard;
