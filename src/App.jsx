import { useState } from "react";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  const [users, setUsers] = useState([]);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }
  
  return (
    <div className="app">
      <Header />
      <main className="content pt-16">
        <Button onClick={fetchData}>Fetch Data!</Button>
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
