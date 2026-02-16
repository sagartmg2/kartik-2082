import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../components/layout/RootLayout";
import NotFount from "../pages/NotFount";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/seller/Dashboard";
import Signup from "../pages/Signup";
import Products from "../pages/Products";
import SellerProducts from "../pages/seller/Products";
import ProductDetail from "../pages/ProductDetail";
import CreateProduct from "../pages/seller/CreateProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderVerification from "../pages/OrderVerification";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Signup },
      {
        path: "/products",
        children: [
          { path: "", Component: Products },
          { path: ":id", Component: ProductDetail },
        ],
      },

      {
        Component: ProtectedRoute,
        children: [
          { path: "/cart", Component: Cart },
          { path: "/checkout", Component: Checkout },
          // { path: "/order", Component: orders },
          { path: "/order/success", Component: OrderVerification },
        ],
      },

      {
        path: "/seller",
        Component: ProtectedRoute,
        children: [
          { path: "dashboard", Component: Dashboard },
          { path: "products", Component: SellerProducts },
          { path: "products/create", Component: CreateProduct },
        ],
      },
      { path: "*", Component: NotFount },
    ],
  },
]);

function Index() {
  return <RouterProvider router={router} />;
}

export default Index;
