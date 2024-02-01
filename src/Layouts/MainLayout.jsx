import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  const location = useLocation()
  // console.log(location);
  const isLogin = location.pathname.includes('login') || location.pathname.includes('register');
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {isLogin || <Navbar/>}
        <Outlet />
        {isLogin || <Footer/>}
        
      </div>
    </div>
  );
};

export default MainLayout;
