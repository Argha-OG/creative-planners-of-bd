import React from "react";
// 🚨 CRITICAL FIX: Ensure this exact import is here!
import { Link } from "react-router";
import Logo from "./../../assets/cpb.jpg";
import ThemeToggle from "../Buttons/Theme-controller";
import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar bg-transparent backdrop-blur-xl shadow-sm sm:px-0 lg:px-16 sm:w-full shadow-red-400 top-0 sticky z-50 ">
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
              <Link to="/services">Serivces</Link>
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
          <div className="hidden sm:block">
          Creative Planners Of Bangladesh</div>
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
          <li className="">
            <Link
              to="/services"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-black text-sm"
            >
              Services
            </Link>
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
          to="https://wa.me/601121404200?text=Hello%20CPB,%20I%20saw%20your%20website%20and%20I%20would%20like%20a%20free%20consultation%20on%20your%20services.%0A%0AClient%20Name:%0AInterested%20In:"
          className="btn bg-red-500 hover:bg-red-700 rounded-3xl font-bold text-white"
          target="_blank"
        >
          Book A Consultant
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
