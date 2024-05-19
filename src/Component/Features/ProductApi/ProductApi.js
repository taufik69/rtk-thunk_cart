import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ProductApi = createApi({
  reducerPath: "ProuductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => `productsss`,
    }),
  }),
});

export const { useGetProductQuery } = ProductApi;
