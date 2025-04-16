import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetails from "../features/post-details/PostDetails";
import HomePageContainer from "../features/home/HomePageContainer";

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
    element: <PostDetails />,
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
