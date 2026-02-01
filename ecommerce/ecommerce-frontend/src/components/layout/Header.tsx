import { Mail, Phone, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../Navbar";

function Header() {
  return (
    <>
      <div className="bg-[#7E33E0] py-3.25">
        <div className="track container flex flex-col justify-between text-white md:flex-row">
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
            <Link to="/login" className="flex">
              <User />
              <span>Login</span>
            </Link>

            <div className="flex">
              <ShoppingCart />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
