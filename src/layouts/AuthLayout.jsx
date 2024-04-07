import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
        <Header layout="auth" />
        <Outlet />
    </div>
  )
}

export default AuthLayout