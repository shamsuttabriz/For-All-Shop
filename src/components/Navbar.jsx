import React from "react";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";
import { NavLink } from "react-router";

function Navbar() {
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="text-xl font-semibold">ForAllShop</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "font-bold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "font-bold"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "font-bold"
              }
            >
              <MdShoppingCart className="text-xl" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-indigo-500 font-bold" : "font-bold"
              }
            >
              <MdBookmarkAdd className="text-xl" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
