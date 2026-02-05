import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Link,
  NavLink,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router";
import type { RootState } from "../redux/store";

function Navbar() {
  const user = useSelector((root: RootState) => root.user.value.data);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // useSearchParams
  // const params = useParams()
  // const params = useSearchParams
  // console.log(params);

  const location = useLocation();
  console.log(location);

  return (
    <div className="container items-center gap-4 py-[14px] md:flex md:justify-between md:py-[16px] lg:py-[19px]">
      <div className="flex justify-between">
        <Link
          to="/"
          className={`text-primary-dark text-[1.15rem] font-semibold sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.65rem] xl:text-[1.85rem] 2xl:text-[2.1rem]`}
        >
          Hekto
        </Link>

        <div className="md:hidden">
          {isMenuOpen ? (
            <X
              size={42}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          ) : (
            <Menu
              size={42}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={`flex flex-col items-center gap-4 overflow-hidden md:grow md:flex-row md:justify-between ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-4 md:flex-row">
          {/* <li>
            <Link
              to="/"
              className={`hover:text-secondary ${location.pathname == "/" ? "text-secondary" : ""}`}
            >
              Home
            </Link>
          </li> */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-secondary"
            }
          >
            Home
          </NavLink>
          <li>
            <Link to="/products">Products</Link>
          </li>

          {user?.isSeller && (
            <>
              <li>
                <Link to="/seller/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/seller/products">My Products</Link>
              </li>
            </>
          )}
        </ul>
        <form>
          <div className="flex">
            <input className="border px-4 py-2" />
            <div className="bg-secondary p-2 text-white">
              <Search />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
