import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "./redux/slices/apiSlice";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { createWrapper } from "next-redux-wrapper";
import globalUiSlice from './redux/slices/globalUiSlice'

export const store = () => configureStore({
  reducer: {
    globalUiSlice: globalUiSlice,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

// setupListeners(store.dispatch);


export const wrapper = createWrapper(store);