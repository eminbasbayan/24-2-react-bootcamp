import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    arttir: (state) => {
      state.count += 1;
    },
    azalt: (state) => {
      if (state.count === 0) {
        return state;
      }
      state.count -= 1;
    },
  },
});

export const { arttir, azalt } = counterSlice.actions;

export default counterSlice.reducer;
