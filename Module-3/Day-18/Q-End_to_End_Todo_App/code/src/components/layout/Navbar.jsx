import { Button } from "@/components/ui/button";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Todos App</h1>

      <div className="flex gap-4 items-center">
        <Button variant="outline">All</Button>
        <Button variant="outline">Completed</Button>
        <Button variant="outline">Pending</Button>

        {user && <Button onClick={logout}>Logout</Button>}
      </div>
    </div>
  );
};

export default Navbar;
