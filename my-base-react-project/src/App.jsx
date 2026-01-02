import Home from "./Home";
import "./App.css";
import { Tabs } from "./Tabs";
import Counter from "./Counter";
import { Todo } from "./Todo";
import { Theme } from "./Theme";
import Header from "./Header";
import { useContext, useState } from "react";
import { TodosApi } from "./TodosApi";
// export default function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// };

// export default App;

export const App = () => {
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
    // <div className="app bg-amber-950  text-white min-h-screen">
    <div
      className={`app min-h-screen ${
        theme == "dark" ? "bg-amber-950 text-white" : ""
      } `}
    >
      {/* routing */}
      {/* <Home /> */}
      {/* <Tabs/>
       */}
      {/* <Todo /> */}
      {/* <Counter /> */}

      {/* <Theme theme={theme} changeTheme={changeTheme} /> */}
      <div className="m-8">
        <TodosApi />
      </div>
    </div>
  );
};
