import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

export default rootReducer;
