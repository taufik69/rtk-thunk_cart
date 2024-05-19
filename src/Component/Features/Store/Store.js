import { configureStore } from "@reduxjs/toolkit";

import { ProductApi } from "../ProductApi/ProductApi.js";
export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
