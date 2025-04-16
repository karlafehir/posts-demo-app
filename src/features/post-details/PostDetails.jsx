import { Card } from "antd";

const PostDetails = ({ post }) => {
  return (
    <Card type="inner" title={post.title}>
      {post.body}
    </Card>
  );
};

export default PostDetails;
