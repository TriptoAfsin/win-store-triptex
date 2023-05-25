import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "fakeStore",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ROOT,
  }),
  tagTypes: ["products", "categories"],
  endpoints: builder => ({
    getFakeProducts: builder.query({
      query: () => `/products`,
    }),
    getFakeCats: builder.query({
      query: () => `/products/categories`,
    }),
    getFakeProductsByCats: builder.query({
      query: cat => `/products/category/${cat}`,
    }),
  }),
});

export const {
  useGetFakeProductsQuery,
  useGetFakeCatsQuery,
  useGetFakeProductsByCatsQuery,
} = rtkApi;
