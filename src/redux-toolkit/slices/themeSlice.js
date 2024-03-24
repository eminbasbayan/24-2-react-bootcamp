import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: true,
  },
  reducers: {
    themeChange: (state) => {
     state.theme = !state.theme
    },
  },
});

export const { themeChange } = themeSlice.actions;

export default themeSlice.reducer;
