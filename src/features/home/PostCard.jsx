import { Card } from "antd";

const PostCard = ({ post }) => {
  return (
    <Card title={post.title} variant="border" style={{ width: 900 }}>
      <p>{post.body}</p>
      <p>autor: {post.userId}</p>
    </Card>
  );
};

export default PostCard;
