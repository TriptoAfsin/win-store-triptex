import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "./redux/slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

setupListeners(store.dispatch);
