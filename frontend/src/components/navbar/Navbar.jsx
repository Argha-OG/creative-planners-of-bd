import React, { useState } from "react";
import { Link } from "react-router";
import { User } from "lucide-react";
import Logo from "./../../assets/cpb.jpg";
import ThemeToggle from "../Buttons/Theme-controller";
import "./nav.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`navbar fixed top-0 z-50 transition-all duration-200 ${isScrolled
        ? "bg-base-100/80 backdrop-blur-md shadow-md shadow-red-500 py-2"
        : "bg-transparent py-4"
        } sm:px-0 lg:px-16 sm:w-full`}
    >
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
              <Link to="/about">About Us</Link>
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
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        {/* LOGO LINK */}
        <Link
          to="/"
          className="btn btn-ghost text-xl text-red-600 overflow-hidden"
        >
          <img src={Logo} alt="CPB" className="h-auto w-10" />
          <div className="hidden sm:block">Creative Planners Of Bangladesh</div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* DESKTOP MENU LINKS */}
          <li className="">
            <Link
              to="/"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              to="/services"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/reviews"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:bg-red-500 hover:text-white btn btn-soft btn-error bg-transparent border-0 text-base-content text-sm transition-colors duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">

        <ThemeToggle />
        {/* NEW LOGIN BUTTON (User Access) */}
        <Link
          to="/user/login"
          className="btn btn-ghost btn-circle border-2 border-red-500 hover:border-red-600 text-base-content hover:bg-base-100 transition duration-150"
          title="User Login"
        >
          <User className="w-6 h-6" />
        </Link>


        {/* CTA BUTTON LINK */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="https://wa.me/601121404200?text=Hello%20CPB,%20I%20saw%20your%20website%20and%20I%20would%20like%20a%20free%20consultation%20on%20your%20services.%0A%0AClient%20Name:%0AInterested%20In:"
            className="btn bg-red-500 hover:bg-red-700 rounded-3xl font-bold text-white border-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Consultant
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
