import React from "react";
// Import the components you need for routing
import { BrowserRouter, Routes, Route, Router } from "react-router";

// Import layout and pages
import { MainLayout } from "./Layout/MainLayout.jsx";
import HomePage from "./pages/homepage/HomePage";
import About from "./pages/aboutpage/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Review from "./pages/reviews/Review.jsx";
import Services from "./pages/services/Services.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import BlogPost from "./pages/blog/BlogPost.jsx";


import "./index.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import UserLogin from "./pages/Login/UserLogin.jsx";
import UserRegister from "./pages/Login/UserRegister.jsx";

const App = () => {
  return (
    // MainLayout now wraps the Routes, keeping the header/footer constant
    <MainLayout>
      <ScrollToTop />
      <Routes>
        {/*
          Define all your routes here. 
          Only the component in the 'element' prop will swap out.
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />

        {/*  ADMIN/LOGIN ROUTE (The entry point to the dashboard) */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />

        {/* Optional: Add a 404/Not Found route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
