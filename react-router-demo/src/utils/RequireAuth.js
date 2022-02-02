import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  // children을 리턴 해줘야 하위 컴포넌트의 내용이 나온다.
  return children;
}

export default RequireAuth;
