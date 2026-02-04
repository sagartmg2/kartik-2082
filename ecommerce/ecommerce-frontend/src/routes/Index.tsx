import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RootLayout from "../components/layout/RootLayout";
import NotFount from "../pages/NotFount";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/seller/Dashboard";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/login", Component: Login },
      { path: "/signup", Component: Signup },
      {
        path: "/seller",
        Component: ProtectedRoute,
        children: [
            { path: "dashboard", Component: Dashboard },
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
