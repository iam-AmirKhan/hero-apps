import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AppPage from "../Pages/AppsPage/AppPage";





const router = createBrowserRouter([

{
       path:"/",
        element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index: true,
          loader:()=>fetch("/appsData.json"),
          element:<Home/>,
        },
         {
        path: "/apps",
        element: <AppPage />,
        loader: () => fetch("/appsData.json"),
      },

      ],
    },


]);

export default router;