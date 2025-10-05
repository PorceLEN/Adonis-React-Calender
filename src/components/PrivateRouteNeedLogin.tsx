// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import type { Props } from "../types/Props";

export default function NeedLogin({ children }: Props) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
