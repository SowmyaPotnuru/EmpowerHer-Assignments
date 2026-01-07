import { useEffect, useState } from "react";
import { fetchTodos } from "../../services/todo.service";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ onSelect }) => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user) {
      fetchTodos(user.uid).then(setTodos);
    }
  }, [user]);

  return (
    <div className="w-64 border-r p-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-2 cursor-pointer hover:bg-gray-100 rounded"
          onClick={() => onSelect(todo)}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
