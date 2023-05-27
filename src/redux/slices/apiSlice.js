import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const rtkApi = createApi({
  reducerPath: "fakeStore",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ROOT,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
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
    getFakeProductById: builder.query({
      query: id => `/products/${id}`,
    }),
  }),
});

//for functional components
export const {
  useGetFakeProductsQuery,
  useGetFakeCatsQuery,
  useGetFakeProductsByCatsQuery,
  useGetFakeProductByIdQuery,
  util: { getRunningQueriesThunk },
} = rtkApi;

// export endpoints for use in SSR
export const {
  getFakeProducts,
  getFakeCats,
  getFakeProductsByCats,
  getFakeProductById,
} = rtkApi.endpoints;
