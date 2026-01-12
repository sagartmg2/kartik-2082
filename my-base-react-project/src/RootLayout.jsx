import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="min-h-164 mx-8">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
