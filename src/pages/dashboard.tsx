import { useAuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useAuthContext();
  
  return (
    <div className="global-dashboard">
      <div className="dashboard">
        <div>{user}</div>
      </div>
    </div>
  );
}
