import { Card } from "antd";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className="pet">
      <Card title={post.title} variant="border" style={{ width: 900 }}>
        <p>{post.body}</p>
        <p>autor: {post.userId}</p>
      </Card>
    </Link>
  );
};

export default PostCard;
