import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageContainer from "../features/home/HomePageContainer";
import PostDetailsContainer from "../features/post-details/PostDetailsContainer";
import "./App.css";

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
    <div className="py-20 px-28">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
