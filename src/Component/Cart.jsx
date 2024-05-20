import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "./Features/CartSlice/cartSlice";
const Cart = () => {
  const Dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // HandleRemoveCartItem
  const HandleRemoveCartItem = (id) => {
    Dispatch(removeCart(id));
  };
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

        <div className="wholeCartCheckoutWrapper">
          <div className="productWrapper">
            {cartItems?.map((item) => (
              <div class="cart-item" key={item.id}>
                <div class="product">
                  <div className="imgHolder">
                    <img src={item.thumbnail} alt="iPhone 12" />
                  </div>
                  <div class="product-info">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button
                      class="remove"
                      onClick={() => HandleRemoveCartItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div class="price">${item.price}</div>
                <div class="quantity">
                  <button class="minus">-</button>
                  <input type="text" value={item.cartQuantity} />
                  <button class="plus">+</button>
                </div>
                <div class="total">${item.price * item.cartQuantity}</div>
              </div>
            ))}
          </div>
          <div className="subtotalWrapper">
            <button className="clearBtn">Clear Cart</button>

            <div className="subTotalbox">
              <div className="subTotal">
                <p>Subtotal</p>
                <p>$0</p>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="checkout">CheckOut</button>
              <button className="backToShopping">
                <span>&#x2190; </span>
                <p>continue shopping</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
