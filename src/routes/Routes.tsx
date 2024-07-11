import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/home/Home";
import About from "@/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
]);

export default router;