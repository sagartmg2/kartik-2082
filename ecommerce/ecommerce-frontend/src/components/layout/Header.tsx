import { LogOut, Mail, Phone, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { logout } from "../../redux/slice/userSlice";

function Header() {
  const user = useSelector((root: RootState) => root.user.value.data);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-[#7E33E0] py-3.25">
        <div className="container flex flex-col justify-between text-white md:flex-row">
          <div className="flex justify-between gap-2">
            <div className="flex">
              <Mail className="hidden" />
              <span>mhhasanul@gmail.com</span>
            </div>

            <div className="flex">
              <Phone />
              <span>(12345)67890</span>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            {user?.firstName && (
              <span>{user?.firstName + " " + user?.lastName}</span>
            )}
            {user ? (
              <div
                className="flex gap-1"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                <LogOut />
                <span>Logout</span>
              </div>
            ) : (
              <Link to="/login" className="flex">
                <User />
                <span>Login</span>
              </Link>
            )}

            <Link to={"/cart"} className="flex">
              <ShoppingCart />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
