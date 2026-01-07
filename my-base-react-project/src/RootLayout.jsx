import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <p>footer</p>
    </>
  );
};

export default RootLayout;
