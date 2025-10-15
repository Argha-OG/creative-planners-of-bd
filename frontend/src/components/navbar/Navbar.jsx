import React from "react";
// 🚨 CRITICAL FIX: Ensure this exact import is here!
import { Link } from "react-router";
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
            {/* MOBILE MENU LINKS */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <details open>
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/services/submenu1">Core Services</Link>
                  </li>
                  <li>
                    <Link to="/services/submenu2">Service Package</Link>
                  </li>
                  <li>
                    <Link to="/services/submenu2">Social Media Management</Link>
                  </li>
                  <li>
                    <Link to="/services/submenu2">Website Development</Link>
                  </li>
                  <li>
                    <Link to="/services/submenu2">Graphics Design</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {/* LOGO LINK */}
        <Link
          to="/"
          className="btn btn-ghost text-xl text-red-600 overflow-hidden"
        >
          <img src={Logo} alt="CPB" className="h-auto w-10" />
          Creative Planners Of Bangladesh
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* DESKTOP MENU LINKS */}
          <li className="">
            <Link
              to="/"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
            >
              About Us
            </Link>
          </li>
          <li>
            <details>
              {/* Note: summary uses Link if it is intended to also navigate */}
              <summary className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm">
                Services
              </summary>
              <ul className="p-2">
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
                  >
                    Core Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
                  >
                    Service Package
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
                  >
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
                  >
                    Graphics Design
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/reviews"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <ThemeToggle />
        {/* CTA BUTTON LINK */}
        <Link
          to="/consultant"
          className="btn bg-red-500 hover:bg-red-700 rounded-3xl font-bold text-white"
        >
          Book A Consultant
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
