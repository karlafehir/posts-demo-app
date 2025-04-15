import { useGetPostDetails } from "./api/useGetPostDetails.js";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();

  const post = useGetPostDetails(postId);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  );
};

export default PostDetails;
