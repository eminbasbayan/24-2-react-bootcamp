import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      <Header cartItems={cartItems} />
      <main className="content pt-16">
        <h1 className="mb-4">App Project</h1>
        <Products setCartItems={setCartItems} />
      </main>
    </div>
  );
}

export default App;
