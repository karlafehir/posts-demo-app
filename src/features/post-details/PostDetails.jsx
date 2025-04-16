import { useGetPostDetails } from "./api/useGetPostDetails.js";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const PostDetails = () => {
  const { postId } = useParams();

  const post = useGetPostDetails(postId);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Card type="inner" title={post.title}>
      {post.body}
    </Card>
  );
};

export default PostDetails;
