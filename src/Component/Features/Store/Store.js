import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../AllSlice/ProductSlice/ProductSlice.js";
import { ProductApi } from "../ProductApi/ProductApi.js";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
