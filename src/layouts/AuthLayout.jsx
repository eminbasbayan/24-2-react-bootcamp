import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const AuthLayout = () => {
  return (
    <div>
        <Header layout="auth" />
        <Outlet />
    </div>
  )
}

export default AuthLayout