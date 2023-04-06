import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;

  // return user ? <Outlet /> : <Navigate to="login" />;
};
export default ProtectedRoute;
