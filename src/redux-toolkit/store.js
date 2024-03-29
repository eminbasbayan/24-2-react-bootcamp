import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    themeMode: themeReducer,
    product: productReducer,
  },
});

export default store;
