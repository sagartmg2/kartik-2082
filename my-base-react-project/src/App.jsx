import Home from "./pages/Home";
import "./App.css";
import { Tabs } from "./Tabs";
import Counter from "./Counter";
import { Todo } from "./Todo";
import { Theme } from "./Theme";
import Header from "./Header";
import { useContext, useEffect, useState } from "react";
import { TodosApi } from "./TodosApi";
import Products from "./Products";

import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useLocation,
} from "react-router";

import RootLayout from "./RootLayout";
import ProductView from "./ProductView";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import ProtectedRoute from "./ProtectedRoute";
import axios from "axios";
import PageNotFound from "./pages/PageNotFound";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  let router = createBrowserRouter([
    {
      path: "",
      // Component: RootLayout ,
      element: (
        <RootLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ),
      children: [
        {
          path: "",
          Component: Home,
        },
        {
          path: "todos",
          Component: Todo,
        },
        {
          path: "login",
          // Component: Login,
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "products",
          children: [
            {
              path: "",
              // Component: Products,
              element: <Products  setCartItemsCount ={ setCartItemsCount} isLoggedIn={isLoggedIn} />,
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
          // Component: ProtectedRoute,
          element: <ProtectedRoute isLoggedIn={isLoggedIn} />,
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
        {
          path: "*",
          Component: PageNotFound,
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

  useEffect(() => {
    let accessToken = localStorage.getItem("accessToken");

    axios
      .get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch((res) => {
        setIsLoading(false);
      });
  }, []);

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
