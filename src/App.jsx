import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    setUsers([]);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("istek tamamlandı!");
      setIsLoading(false);
    }
  }

  return (
    <div className="app">
      <Header />
      <main className="content pt-16">
        <Button onClick={fetchData}>Fetch Data!</Button>
        {isLoading && (
          <div className="animate-spin h-5 w-5 mr-3 bg-white rounded-md my-4"></div>
        )}
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
        <h1 className="mb-4">App Project</h1>
        <Products />
      </main>
    </div>
  );
}

export default App;
