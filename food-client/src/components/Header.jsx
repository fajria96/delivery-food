import foodLogo from "../assets/images/yukari-logo.png";
import cartIcon from "../assets/icons/shop-cart-2.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav
      id="header"
      className="bg-white shadow-xl fixed top-0 w-full z-10 transition-all"
    >
      <div className="max-w-7x1 container bg-white max-w-[1240px] mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="logo-wrapper pl-4 flex items-center ">
          <Link
            id="RouterNavlink"
            to="/"
            className="nav-link toggleColor text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl "
          >
            <img
              src={foodLogo}
              alt="logo"
              className="h-16 w-auto object-cover"
            />
          </Link>
        </div>
        <div className="nav-menu-wrapper flex items-center justify-between space-x-12">
          <Link
            id="RouterNavlink"
            to="/"
            className="nav-link text-lg font-medium text-gray-600 hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            id="RouterNavlink"
            to="#about"
            className="nav-link text-lg font-medium text-gray-600 hover:text-gray-400"
          >
            About
          </Link>
        </div>
        <div className="flex items-center justify-center text-lg space-x-4 mr-6">
          <Link id="RouterNavlink" to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
          <Link
            id="RouterNavlink"
            to="/login"
            className="nav-link login text-sm"
          >
            <button className="bg-red-600 text-white font-bold rounded-3xl hover:bg-orange-500 py-3 px-10">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
