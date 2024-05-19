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
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temporary);
        state.cartTotalQuantity = temporary.cartQuantity;
        state.cartTotalAmount = temporary.cartQuantity * action.payload.price;
      }

      //   using the help of filter method
      //   let findItem = state.cartItems.filter(
      //     (item) => item.id === action.payload.id
      //   );

      //   if (findItem.length >= 1) {
      //     state.cartItems[0].cartQuantity += 1;
      //     state.cartTotalQuantity = state.cartItems[0].cartQuantity;
      //     state.cartTotalAmount =
      //       state.cartItems[0].cartQuantity * action.payload.price;
      //   } else {
      //     const temporary = { ...action.payload, cartQuantity: 1 };
      //     state.cartItems.push(temporary);
      //     state.cartTotalQuantity = temporary.cartQuantity;
      //     state.cartTotalAmount = temporary.cartQuantity * action.payload.price;
      //   }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
