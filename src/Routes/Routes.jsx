import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppPage from "../Pages/AppsPage/AppPage";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installation from "../Components/InstalledApps/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "/apps",
        element: <AppPage />,
        loader: () => fetch("/appsData.json"),
      },
      {
        path: "/AppDetails/:id",
        loader: () => fetch("/appsData.json"),
        element: <AppDetails />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
