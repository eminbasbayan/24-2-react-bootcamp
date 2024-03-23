import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import CartProvider from "./context/cart/CartProvider.jsx";
// import ThemeProvider from "./context/theme/ThemeProvider.jsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
