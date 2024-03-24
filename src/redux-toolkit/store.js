import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    themeMode: themeReducer,
  },
});

export default store;
