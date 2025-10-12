import React from 'react'
import Themecontroller from './components/Buttons/Theme-controller'
import Navbar from './components/navbar/Navbar'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/homepage/HomePage'
import "./index.css";

const App = () => {
  return (
    <MainLayout>
      <HomePage/>
    </MainLayout>
  );
}

export default App
