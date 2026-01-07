import { useState } from "react";
import { updateTodo } from "../../services/todo.service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpdateTodoModal = ({ todo, onClose, onUpdated }) => {
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = async () => {
    await updateTodo(todo.id, { title });
    onUpdated();
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input value={title} onChange={(e) => setTitle(e.target.value)} />

        <Button onClick={handleUpdate} className="mt-4">
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
