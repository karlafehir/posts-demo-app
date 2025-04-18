import { Divider, Breadcrumb } from "antd";
import PostComment from "./PostComment";
import PostCard from "../../components/PostCard";

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
        <PostCard post={post} showDetails={true} />
      </div>
      <Divider style={{ borderColor: "#7cb305" }}>Comments</Divider>
      <PostComment comments={comments} />
    </>
  );
};

export default PostDetails;
