import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <div className="app">
      <Header cartItems={cartItems} />
      <h1 className="mb-4">App Project</h1>
      <Products setCartItems={setCartItems} />
    </div>
  );
}

export default App;
