import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/MainRoutes";
import { authRoutes } from "./routes/AuthRoutes";
import { adminRoutes } from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import { useAuthChecker } from "./hooks/AuthChecker";

function App() {
  useAuthChecker();
  
  const router = createBrowserRouter([
    ...mainRoutes,
    ...authRoutes,
    ...adminRoutes,
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
