import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation()
  // console.log(location);
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {noHeaderFooter || <Navbar/>}
        <Outlet />
        {noHeaderFooter || <Footer/>}
        
      </div>
    </div>
  );
};

export default MainLayout;
