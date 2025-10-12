import React from "react";
import Logo from "./../../assets/cpb.jpg";
import ThemeToggle from "../Buttons/Theme-controller";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent backdrop-blur-xl shadow-sm px-16 shadow-red-400 top-0 sticky z-50 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            <li>
              <a className="">Item 1</a>
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
        <a className="btn btn-ghost text-xl text-red-600 overflow-hidden">
          <img src={Logo} alt="CPB" className="h-auto w-10" />
          Creative Planners Of Bangladesh
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
              Home
            </a>
          </li>
          <li className="">
            <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
              About Us
            </a>
          </li>
          <li>
            <details>
              
              <summary className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
                Services
              </summary>
              <ul className="p-2">
                <li>
                  <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
                    Submenu 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
                    Submenu 2
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
              Reviews
            </a>
          </li>
          <li>
            <a className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <ThemeToggle />
        <a className="btn bg-red-500 hover:bg-red-700 rounded-3xl font-bold text-white">
          Book A Consultant
        </a>
      </div>
    </div>
  );
};

export default Navbar;
