import Home from "./Home";
import "./App.css";
import { Tabs } from "./Tabs";

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
  return (
    <div>
      {/* routing */}
      {/* <Home /> */}
      <Tabs/>
    </div>
  );
};
