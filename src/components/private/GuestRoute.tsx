import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { Outlet } from "react-router";

export default function GuestRoute() {
  const { user } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user]);

  return <Outlet />;
}

// Créer la route et renvoyez un composant qui wrap. Encapsuler navigate dans un useEffect !
