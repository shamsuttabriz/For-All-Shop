import React, { useContext } from "react";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { CartContext } from "../providers/Contexts";

function Navbar() {
  const { carts } = useContext(CartContext);
  console.log(carts);
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-bold text-lg" : "font-bold text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-bold text-lg" : "font-bold text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li className="relative ">
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-bold text-lg" : "font-bold text-lg"
          }
        >
          <MdShoppingCart className="text-xl" />
        </NavLink>
        <p className="absolute -top-1.5 left-5.5 md:-top-3 md:-right-3 font-bold">{carts.length}</p>
      </li>
      <li>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "text-indigo-500 font-bold text-lg" : "font-bold text-lg"
          }
        >
          <MdBookmarkAdd className="text-xl" />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-112 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-2 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <Link to="/" className="text-xl font-semibold">
          ForAllShop
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-4 md:items-center">
          {list}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
