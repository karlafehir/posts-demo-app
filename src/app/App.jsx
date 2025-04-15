import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomePage />,
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
