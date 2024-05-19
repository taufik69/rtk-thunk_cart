import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">Taufik</div>
          <div className="icon">
            <span>
              <IoCartOutline />
            </span>
          </div>
        </div>
        <Outlet />
        <div className="footer">Footer</div>
      </div>
    </nav>
  );
};

export default Navbar;
