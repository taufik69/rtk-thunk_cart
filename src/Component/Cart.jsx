import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <h1>Shopping Cart</h1>
    </div>
  );
};

export default Cart;
