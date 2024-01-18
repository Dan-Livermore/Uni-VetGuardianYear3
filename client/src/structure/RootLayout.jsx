import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div id="root-layout">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;
