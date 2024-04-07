import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/MainRoutes";
import { authRoutes } from "./routes/AuthRoutes";
import { adminRoutes } from "./routes/AdminRoutes";

function App() {
  const router = createBrowserRouter([
    ...mainRoutes,
    ...authRoutes,
    ...adminRoutes,
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
