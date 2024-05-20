import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  console.log(cart);
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div class="shopping-cart">
        <div class="header">
          <div class="header-item1">PRODUCT</div>
          <div class="header-item">PRICE</div>
          <div class="header-item">QUANTITY</div>
          <div class="header-item">TOTAL</div>
        </div>

        <div class="cart-item">
          <div class="product">
            <img
              src="https://images.unsplash.com/photo-1712785021787-72b6d6c837e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="iPhone 12"
            />
            <div class="product-info">
              <h2>iPhone 12</h2>
              <p>5.4-inch mini display</p>
              <button class="remove">Remove</button>
            </div>
          </div>
          <div class="price">$699</div>
          <div class="quantity">
            <button class="minus">-</button>
            <input type="text" value="2" />
            <button class="plus">+</button>
          </div>
          <div class="total">$1398</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
