import { Card } from "antd";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Card title={post.title} variant="border">
      <p>{post.body}</p>
      <p>autor: {post.userId}</p>
      <Link to={`/posts/${post.id}`}>View More</Link>
    </Card>
  );
};

export default PostCard;
