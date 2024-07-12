import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/home/Home";
import About from "@/Pages/About";
import Products from "@/Pages/Products/Products";
import ProductDetails from "@/Pages/productDetails/ProductDetails";
import Cart from "@/Pages/Cart";
import Checkout from "@/Pages/Checkout";

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
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: '/products',
        element: <Products></Products>,
      },
      {
        path: '/product-details',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "/product-cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ]
  },
]);

export default router;