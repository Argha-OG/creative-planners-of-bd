import React from "react";
// Import the components you need for routing
import { BrowserRouter, Routes, Route } from "react-router";

// Import layout and pages
import { MainLayout } from "./layout/Mainlayout";
import HomePage from "./pages/homepage/HomePage";


import "./index.css";

const App = () => {
  return (
    // MainLayout now wraps the Routes, keeping the header/footer constant
    <MainLayout>
      <Routes>
        {/*
          Define all your routes here. 
          Only the component in the 'element' prop will swap out.
        */}
        <Route path="/" element={<HomePage />} />

        {/* Optional: Add a 404/Not Found route */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </MainLayout>
  );
};

export default App;
