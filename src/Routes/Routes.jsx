import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";





const router = createBrowserRouter([

{
       path:"/",
        Component:Root,
      errorElement:<ErrorPage/>,
      children:[
        {
          index: true,
          path:"/",
          Component:Home
        }
      ]
    },


])

export default router