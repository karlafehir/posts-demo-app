import { Card } from "antd";
import { Link } from "react-router-dom";
import { useGetPostAuthor } from "../post-details/api/useGetPostAuthor";

const PostCard = ({ post }) => {
  const author = useGetPostAuthor(post);

  return (
    <Card title={post.title} type="inner">
      <p>{post.body}</p>
      <p>by {author.name}</p>
      <Link to={`/posts/${post.id}`}>View More</Link>
    </Card>
  );
};

export default PostCard;
