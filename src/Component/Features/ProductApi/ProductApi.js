import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductApi = createApi({
  reducerPath: "ProuductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ["Product", "ProductList"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `products`,
    }),
    getEachProduct: builder.query({
      query: (id) => {
        return `products/${id}`;
      },
    }),
  }),
});

export const { useGetProductQuery, useGetEachProductQuery } = ProductApi;
