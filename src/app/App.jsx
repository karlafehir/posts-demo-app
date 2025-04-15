import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import PostDetails from "../features/posts/PostDetails";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomePage />,
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
