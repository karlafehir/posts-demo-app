import { useParams } from "react-router-dom";
import PostDetails from "./PostDetails.jsx";
import { useFetch } from "../../hooks/useFetch.js";

const PostDetailsContainer = () => {
  const { postId } = useParams();

  const post = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
    id: postId,
  });

  return <PostDetails post={post} />;
};

export default PostDetailsContainer;
