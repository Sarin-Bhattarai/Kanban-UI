import { Navigate } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { useAuth } from "../../features/auth/context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Spinner />;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
