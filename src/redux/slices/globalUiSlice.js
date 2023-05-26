import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartLength: 0,
  cartItems: [],
  products: [],
  cats: [],
};

const globalUiSlice = createSlice({
  name: "globalUiSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartLength++;
    },
    removeCartItem: (state, action) => {
      state.cartItems.splice(
        state.cartItems.indexOf(state.cartItems[action.payload]),
        1
      );
      if (state.cartLength > 0) {
        state.cartLength--;
      }
    },
    clearCart: state => {
      state.cartItems = [];
      state.products = [];
      state.cats = [];
    },
  },
});

export const { addCartItem, removeCartItem, clearCart } = globalUiSlice.actions;
export default globalUiSlice.reducer;
