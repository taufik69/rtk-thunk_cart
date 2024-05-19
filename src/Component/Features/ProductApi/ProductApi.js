import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductApi = createApi({
  reducerPath: "ProuductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `https://dummyjson.com/products/${1}`,
    }),
  }),
});

export const { useGetProductQuery } = ProductApi;
