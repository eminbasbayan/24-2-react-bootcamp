import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <h1>App Project</h1>
      <Button success>Satın Al!</Button>
      <Button danger>Sil</Button>
      <Products />
    </div>
  );
}

export default App;
