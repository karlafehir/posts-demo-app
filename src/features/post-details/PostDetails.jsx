import { Divider, Breadcrumb } from "antd";

import PostCard from "../../components/PostCard";
import { lazy, Suspense } from "react";

const PostDetails = ({ post, comments }) => {
  const PostComment = lazy(() => import("./PostComment"));
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
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <PostComment comments={comments} />
      </Suspense>
    </>
  );
};

export default PostDetails;
