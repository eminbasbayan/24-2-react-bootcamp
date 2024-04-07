import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/Header";
import AdminSidebar from "../components/Admin/Sidebar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <AdminSidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
