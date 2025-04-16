import { Card } from "antd";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const PostCard = ({ post }) => {
  const author = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
    id: post.userId,
  });

  return (
    <Card title={post.title} type="inner">
      <p>{post.body}</p>
      <p>by {author.name}</p>
      <Link to={`/posts/${post.id}`}>View More</Link>
    </Card>
  );
};

export default PostCard;
