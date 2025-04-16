import { Card } from "antd";
import { Link } from "react-router-dom";

const PostCard = ({ post, user }) => {
  if (!user) return <div>Loading...</div>;

  return (
    <Card title={post.title} type="inner">
      <p>{post.body}</p>
      <p>by {user.name}</p>
      <Link to={`/posts/${post.id}`}>View More</Link>
    </Card>
  );
};

export default PostCard;
