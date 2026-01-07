import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Application from "./App";
import { App } from "./App";

import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <>
    {/* <StrictMode> */}
    {/* <Application /> */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
    {/* context  */}
    {/* redux  */}
    {/* provider  */}
    {/* </StrictMode> */}
  </>
);
