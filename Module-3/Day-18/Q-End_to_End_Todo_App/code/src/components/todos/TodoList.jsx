import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  fetchTodos,
  deleteTodo,
  updateTodo,
} from "../../services/todo.service";
import UpdateTodoModal from "./UpdateTodoModal";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  const { user } = useAuth();
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const loadTodos = async () => {
    const data = await fetchTodos(user.uid);
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleToggle = async (todo) => {
    await updateTodo(todo.id, { completed: !todo.completed });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="flex-1 p-6">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex justify-between items-center p-4 border rounded mb-2"
        >
          <span
            className={todo.completed ? "line-through text-gray-500" : ""}
          >
            {todo.title}
          </span>

          <div className="flex gap-2">
            <Button size="sm" onClick={() => handleToggle(todo)}>
              Toggle
            </Button>
            <Button size="sm" onClick={() => setSelectedTodo(todo)}>
              Edit
            </Button>
            <Button size="sm" variant="destructive" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}

      {selectedTodo && (
        <UpdateTodoModal
          todo={selectedTodo}
          onClose={() => setSelectedTodo(null)}
          onUpdated={loadTodos}
        />
      )}
    </div>
  );
};

export default TodoList;
