import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="min-h-164 mx-8">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
