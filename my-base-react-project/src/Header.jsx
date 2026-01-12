import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router";

export default function Header({
  isLoggedIn,
  theme,
  changeTheme,
  setIsLoggedIn,
}) {
  // const location  = useLocation();
  // pathname = location.pathname

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className={`flex items-center mb-12 p-12 `}>
      {/* <ul className="nav-links" style="backgroun-color:red"> */}
      {/* <ul className="nav-links" style={{backgroundColor:'red'}}> */}
      <ul className="flex justify-center capitalize gap-4  grow">
        {isLoggedIn && (
          <li>
            <Link
              to="/dashboard"
              className={`${pathname == "/dashboard" ? "text-red-500" : ""}`}
            >
              dashbaord
            </Link>
          </li>
        )}

        <li>
          <Link to="/" className={`${pathname == "/" ? "text-red-500" : ""}`}>
            home
          </Link>
        </li>
        <li>
          <Link to="/todos">todos</Link>
        </li>
        <li>
          <Link to="counter">counter</Link>
        </li>
        <li>
          <Link to="products">products</Link>
        </li>
      </ul>
      <button className="flex items-center gap-2" onClick={changeTheme}>
        change theme
        {theme == "light" ? <FaMoon /> : <LuSun />}
      </button>
      &nbsp; &nbsp; &nbsp;
      {isLoggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            navigate("/login");
            setIsLoggedIn(false);
          }}
        >
          logout
        </button>
      ) : (
        <Link to="/login" className="hover:text-red-500">
          login
        </Link>
      )}
    </header>
  );
}
