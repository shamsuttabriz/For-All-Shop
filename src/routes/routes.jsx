import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone-details",
        element: <PhoneDetails />,
      },
    ],
  },
]);

export default router;
