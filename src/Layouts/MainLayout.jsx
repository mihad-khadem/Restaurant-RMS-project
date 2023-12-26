import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
