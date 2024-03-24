import Counter from "./components/Counter";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <main className="content pt-16">
        <Counter />
        <h1 className="mb-4">App Project</h1>
        {/* <Products /> */}
      </main>
    </div>
  );
}

export default App;
