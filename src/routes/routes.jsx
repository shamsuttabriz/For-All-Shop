import { createBrowserRouter } from "react-router";
import Favorite from "../Favorite";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <p className="text-center text-5xl text-red-500">Error Page</p>
    ),
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorite />,
        children: [
          {
            path: "more-nested",
            element: (
              <p className="text-center text-3xl">
                This is More nested favorite page
              </p>
            ),
          },
        ],
      },
      {
        path: "/about",
        element: <div className="text-center text-4xl">This is About page</div>,
      },
    ],
  },
]);

export default router;
