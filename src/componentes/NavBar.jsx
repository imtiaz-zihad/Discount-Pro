import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider"
import './NavBar.css'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:min-h-20 bg-[#7BD3EA] text-white flex flex-col lg:flex-row lg:justify-between items-center">
      {/* Logo and Hamburger */}
      <div className="flex items-center justify-between w-full lg:w-auto px-4 lg:px-10 py-4 lg:py-0">
        {/* Logo */}
        <Link className="text-2xl font-bold">Discount Pro</Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:items-center lg:space-x-8 w-full lg:w-auto px-4 lg:px-0`}
      >
        <NavLink to="/" className="block  py-2 lg:py-0">
          Home
        </NavLink>
        <NavLink to="/brands" className="block py-2 lg:py-0">
          Brands
        </NavLink>
        <NavLink to="/profile" className="block py-2 lg:py-0">
          My-Profile
        </NavLink>
        <NavLink to="/about" className="block py-2 lg:py-0">
          About-Dev
        </NavLink>

        {/* Login Button */}
        <div className="block lg:hidden mt-4">
          {user && user?.email ? (
            <div className="flex flex-col items-center gap-2">
              <img
                className="rounded-full w-10 h-10"
                src={user?.photoURL}
                alt="Profile"
              />
              <p>{user.email}</p>
              
              <button
                onClick={logOut}
                className="btn btn-neutral rounded-none text-sm mt-2"
              >
                LogOut
              </button>
            </div>
          ) : (
            <Link to="auth/login" className="btn btn-neutral rounded-none text-sm mt-2">
              Login
            </Link>
          )}
        </div>
      </div>

      
      <div className="hidden lg:flex lg:px-10 py-4 lg:py-0">
        {user && user?.email ? (
          <div className="flex items-center gap-2">
            <img
              className="rounded-full w-10 h-10"
              src={user?.photoURL}
              alt="Profile"
            />
            <p>{user.email}</p>
            <button
              onClick={logOut}
              className="btn btn-neutral rounded-none text-sm"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="auth/login" className="btn btn-neutral rounded-none text-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
