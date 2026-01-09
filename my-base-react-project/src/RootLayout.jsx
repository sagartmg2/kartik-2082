import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-164 mx-8">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
