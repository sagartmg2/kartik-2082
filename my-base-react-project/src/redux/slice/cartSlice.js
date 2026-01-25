import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartItemsCount: (state) => {
      console.log("here...");
      state.cartItemsCount++;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementCartItemsCount } = cartSlice.actions;

export default cartSlice.reducer;
