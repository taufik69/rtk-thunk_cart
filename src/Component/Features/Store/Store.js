import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "../ProductApi/ProductApi.js";
import CartRedecer from "../CartSlice/cartSlice.js";
import { getTotal } from "../CartSlice/cartSlice.js";
export const store = configureStore({
  reducer: {
    cart: CartRedecer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});

// store.dispatch(getTotal());
