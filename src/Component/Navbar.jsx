import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems, cartTotalQuantity, cartTotalAmount } = cart;

  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">Taufik</div>
          <div className="icon">
            <span quantity={cartTotalQuantity}>
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
