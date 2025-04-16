import { useGetPostDetails } from "./api/useGetPostDetails.js";
import { useParams } from "react-router-dom";
import PostDetails from "./PostDetails.jsx";

const PostDetailsContainer = () => {
  const { postId } = useParams();
  const post = useGetPostDetails(postId);

  return <PostDetails post={post} />;
};

export default PostDetailsContainer;
