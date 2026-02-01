import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="container py-[14px] md:py-[16px] lg:py-[19px]">
      <p className="text-primary-dark text-[1.15rem] font-semibold sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-[2.1rem]">
        Hekto
      </p>
      <ul>
        <li>
          <Link to="/" className="hover:text-secondary">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
      </ul>
      <form>
        <input />
        <div className="bg-secondary text-white">
          <Search />
        </div>
      </form>
    </div>
  );
}

export default Navbar;
