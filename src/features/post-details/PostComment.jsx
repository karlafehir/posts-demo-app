import { Avatar, Card } from "antd";

const PostComment = ({ comments }) => {
  const { Meta } = Card;
  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title={comment.name}
            description={comment.email}
          />
          <p>{comment.body}</p>
        </Card>
      ))}
    </div>
  );
};

export default PostComment;
