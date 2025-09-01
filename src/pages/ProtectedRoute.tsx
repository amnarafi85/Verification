import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAdminLoggedIn = !!localStorage.getItem("adminToken"); // example auth check

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
