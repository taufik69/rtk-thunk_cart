import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [],
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
        localStorage.setItem("Cart", JSON.stringify(state.cartItems));
        toast(
          ` Added ${state.cartItems[itemIndex].cartQuantity} times  ${action.payload.title}`,
          {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temporary);
        state.cartTotalQuantity = temporary.cartQuantity;
        state.cartTotalAmount = temporary.cartQuantity * action.payload.price;
        localStorage.setItem("Cart", JSON.stringify(state.cartItems));
        toast(`${action.payload.title} added in cart`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      //   console.log(JSON.parse(localStorage.getItem("Cart")));

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
    removeCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      toast.error(`${action.payload.title} is removed`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      localStorage.setItem("Cart", JSON.stringify(state.cartItems));
    },
    incrementCart: (state, action) => {
      const indexItem = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (indexItem >= 0) {
        state.cartItems[indexItem].cartQuantity += 1;
        toast.info(`${action.payload.title} is Added`, {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        localStorage.setItem("Cart", JSON.stringify(state.cartItems));
      }
    },
    decrementCart: (state, action) => {
      const findIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartItems[findIndex].cartQuantity >= 1) {
        state.cartItems[findIndex].cartQuantity -= 1;
      } else if (state.cartItems[findIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems[findIndex];
      }

      toast.error(`${action.payload.title} is Decreced`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      localStorage.setItem("Cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeCart, incrementCart, decrementCart } =
  cartSlice.actions;
export default cartSlice.reducer;
