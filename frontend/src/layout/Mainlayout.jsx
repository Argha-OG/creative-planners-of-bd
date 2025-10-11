import React from 'react'
import Navbar from '../components/navbar/Navbar'
import App from '../App'
import Footer from '../components/footer/Footer';

function Mainlayout({children}) {
  return (
    <div className="">
        <Navbar />
        <div>{children}</div>
        <Footer/>
    </div>
  );
}

export default Mainlayout
