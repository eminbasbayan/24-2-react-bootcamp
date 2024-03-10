import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartProvider from "./context/cart/CartProvider.jsx";
import ThemeProvider from "./context/theme/ThemeProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);
