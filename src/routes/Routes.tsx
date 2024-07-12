import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/home/Home";
import About from "@/Pages/About";
import Products from "@/Pages/Products/Products";
import ProductDetails from "@/Pages/productDetails/ProductDetails";
import Cart from "@/Pages/Cart";
import Checkout from "@/Pages/checkout/Checkout";
import SuccessPage from "@/Pages/checkout/SuccessPage";
import AddProduct from "@/Pages/manageProducts/AddProduct";
import ManageProducts from "@/Pages/manageProducts/ManageProducts";
import UpdateProduct from "@/Pages/manageProducts/UpdateProduct";

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
      {
        path: "/product-success",
        element: <SuccessPage></SuccessPage>,
      },
      {
        path: "/product-management",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
    ]
  },
]);

export default router;