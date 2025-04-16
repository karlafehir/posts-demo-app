import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageContainer from "../features/home/HomePageContainer";
import PostDetailsContainer from "../features/post-details/PostDetailsContainer";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <HomePageContainer />,
  },
  {
    path: "/",
    element: <HomePageContainer />,
  },
  {
    path: "/posts/:postId",
    element: <PostDetailsContainer />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
