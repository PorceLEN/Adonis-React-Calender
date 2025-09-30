// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/userContext";
import type { Props } from "../types/Props";

export default function IfIsLogin({ children }: Props) {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
