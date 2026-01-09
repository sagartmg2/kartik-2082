import Home from "./pages/Home";
import "./App.css";
import { Tabs } from "./Tabs";
import Counter from "./Counter";
import { Todo } from "./Todo";
import { Theme } from "./Theme";
import Header from "./Header";
import { useContext, useState } from "react";
import { TodosApi } from "./TodosApi";
import Products from "./Products";

import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useLocation,
} from "react-router";

import RootLayout from "./RootLayout";
import Todos from "./pages/Todos";
import ProductView from "./ProductView";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import ProtectedRoute from "./ProtectedRoute";

export const App = () => {
  let router = createBrowserRouter([
    {
      path: "",
      Component: RootLayout,
      children: [
        {
          path: "",
          Component: Home,
        },
        {
          path: "todos",
          Component: Todos,
        },
        {
          path: "login",
          Component: Login,
        },
        {
          path: "products",
          children: [
            {
              path: "",
              Component: Products,
            },
            {
              path: ":productId", // slug
              Component: ProductView,
            },
          ],
        },
        {
          path: "counter",
          Component: Counter,
        },
        {
          Component: ProtectedRoute,
          children: [
            {
              path: "dashboard",
              Component: Dashboard,
            },
            {
              path: "setting",
              Component: Setting,
            },
          ],
        },
      ],
    },
  ]);

  console.log("app render");

  const [theme, setTheme] = useState("theme");
  // useContext
  // redux

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );

  return (
    // <div className="app bg-amber-950  text-white min-h-screen">
    <div
      className={`app min-h-screen ${
        theme == "dark" ? "bg-amber-950 text-white" : ""
      } `}
    >
      {/* routing */}
      {/* <Home /> */}
      {/* <Tabs/> */}

      {/* <Todo /> */}
      {/* <Counter /> */}

      {/* <Theme theme={theme} changeTheme={changeTheme} /> */}
      <div className="m-8">
        {/* <TodosApi /> */}
        <Products />
      </div>
    </div>
  );
};
