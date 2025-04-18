import { useParams } from "react-router-dom";
import PostDetails from "./PostDetails.jsx";
import { useFetch } from "../../hooks/useFetch.js";

const PostDetailsContainer = () => {
  const { postId } = useParams();

  const post = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const comments = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return <PostDetails post={post} comments={comments} />;
};

export default PostDetailsContainer;
