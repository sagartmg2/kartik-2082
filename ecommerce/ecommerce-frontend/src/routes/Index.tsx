import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../components/layout/RootLayout";
import NotFount from "../pages/NotFount";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/login", Component: Login },
      {
        path: "/seller",
        Component: ProtectedRoute,
        children: [
            { path: "products", Component: Login },
            { path: "orders", Component: Login }
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
