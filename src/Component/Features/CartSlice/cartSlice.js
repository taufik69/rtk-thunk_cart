import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalQuantity = state.cartItems[itemIndex].cartQuantity;
        state.cartTotalAmount =
          state.cartItems[itemIndex].cartQuantity * action.payload.price;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
