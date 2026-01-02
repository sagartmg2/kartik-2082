import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export default function Header({ theme,changeTheme }) {
  return (
    <header className={`flex items-center mb-12 p-12 `}>
      {/* <ul className="nav-links" style="backgroun-color:red"> */}
      {/* <ul className="nav-links" style={{backgroundColor:'red'}}> */}
      <ul className="flex justify-center capitalize gap-4  grow">
        <li>
          <a className="text-red-500">home</a>
        </li>
        <li>
          <a>about </a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <button className="flex items-center gap-2"  onClick={changeTheme}>
        change theme
        {theme == "light" ? <FaMoon /> : <LuSun />}
      </button>
    </header>
  );
}
