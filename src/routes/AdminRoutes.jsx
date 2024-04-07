import AdminLayout from "../layouts/AdminLayout";
import ErrorPage from "../pages/ErrorPage";
import AdminPage from "../pages/admin/AdminPage";

export const adminRoutes = [
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
];
