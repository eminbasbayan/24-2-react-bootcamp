import MainLayout from "../layouts/MainLayout";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: async () => {
          const res = await fetch("https://fakestoreapi.com/products");
          const data = await res.json();

          if (!res.ok) {
            throw new Error("Something went wrong!");
          }

          return data;
        },
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
];
