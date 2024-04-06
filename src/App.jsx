import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return (
    <div className="app">
      <Header />
      <main className="content pt-16">
        <h1 className="mb-4">App Project</h1>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
