import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { Link, useLocation } from "react-router";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="bg-gray-500 text-white p-8">
      <li>
        <Link to="/" className={`${pathname == "/" ? "text-red-600" : ""}`}>
          Home
        </Link>
      </li>
      <li>
        <Link to="todos">todos </Link>
      </li>
      <li>
        <Link to="products">products </Link>
      </li>
    </footer>
  );
}
