import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totals: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload.item);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
