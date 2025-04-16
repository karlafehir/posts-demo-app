import { Card, Divider, Breadcrumb } from "antd";
import PostComment from "./PostComment";

const PostDetails = ({ post, comments }) => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Posts",
            href: "/posts",
          },
          {
            title: ":id",
            href: "",
          },
        ]}
        params={{ id: 1 }}
      />
      <Card type="inner" title={post.title}>
        {post.body}
      </Card>
      <Divider style={{ borderColor: "#7cb305" }}>Comments</Divider>
      <PostComment comments={comments} />
    </>
  );
};

export default PostDetails;
