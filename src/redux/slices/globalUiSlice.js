import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartLength: 0,
  cartItems: [],
  products: [],
  cats: [],
  wishListItems: [],
};

const globalUiSlice = createSlice({
  name: "globalUiSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartLength++;
    },
    addWishlistItem: (state, action) => {
      state.wishListItems.push(action.payload);
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
    removeWishlistItem: (state, action) => {
      state.wishListItems.splice(
        state.wishListItems.indexOf(state.wishListItems[action.payload]),
        1
      );
    },
    clearCart: state => {
      state.cartItems = [];
      state.products = [];
      state.cats = [];
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  clearCart,
  addWishlistItem,
  removeWishlistItem,
} = globalUiSlice.actions;
export default globalUiSlice.reducer;
