import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = true; // change later with auth

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;