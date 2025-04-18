import { Divider, Breadcrumb } from "antd";
import PostComment from "./PostComment";
import PostDetailsCard from "./PostDetailsCard";

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
          params={{ id: post.id }}
        />
      </div>

      <div className="pb-18">
        <PostDetailsCard post={post} />
      </div>
      <Divider style={{ borderColor: "#7cb305" }}>Comments</Divider>
      <PostComment comments={comments} />
    </>
  );
};

export default PostDetails;
