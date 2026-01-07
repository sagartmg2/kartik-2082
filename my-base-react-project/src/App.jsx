import Home from "./Home";
import "./App.css";
import { Tabs } from "./Tabs";
import Counter from "./Counter";
import { Todo } from "./Todo";
import { Theme } from "./Theme";
import Header from "./Header";
import { useContext, useState } from "react";
import { TodosApi } from "./TodosApi";
import Products from "./Products";

import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";

export const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          path: "",
          Component: Products,
        },
        {
          path: "todos",
          Component: TodosApi,
        },
        {
          path: "counter",
          Component: Counter,
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
