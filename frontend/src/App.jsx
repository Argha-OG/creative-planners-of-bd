import React from 'react'
import Themecontroller from './components/Buttons/Theme-controller'
import Navbar from './components/navbar/Navbar'
import Mainlayout from './layout/mainlayout'
import HomePage from './pages/homepage/HomePage'
import "./index.css";

const App = () => {
  return (
    <Mainlayout>
      <HomePage/>
    </Mainlayout>
  );
}

export default App
