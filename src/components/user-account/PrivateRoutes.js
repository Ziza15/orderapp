import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";

const PrivateRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
