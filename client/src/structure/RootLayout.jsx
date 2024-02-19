import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const RootLayout = () => {
  return (
    <div id="root-layout">
    <SnackbarProvider>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </SnackbarProvider>
    </div>
  );
};

export default RootLayout;
