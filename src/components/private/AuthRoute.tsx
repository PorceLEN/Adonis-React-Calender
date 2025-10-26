import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AuthRoute() {
  const navigation = useNavigate();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      navigation("/login");
    }
  }, [user]);

  return <Outlet />;
}
