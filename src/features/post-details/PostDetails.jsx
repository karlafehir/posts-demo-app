import { Card, Divider, Breadcrumb } from "antd";
import PostComment from "./PostComment";

const PostDetails = ({ post, comments }) => {
  return (
    <>
      <div className="pb-8">
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
      </div>

      <div className="pb-18">
        <Card type="inner" title={post.title}>
          {post.body}
        </Card>
      </div>
      <Divider style={{ borderColor: "#7cb305" }}>Comments</Divider>
      <PostComment comments={comments} />
    </>
  );
};

export default PostDetails;
