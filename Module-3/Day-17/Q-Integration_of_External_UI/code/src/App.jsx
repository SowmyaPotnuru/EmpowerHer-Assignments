import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// =============================
// 1. Feedback Form App
// =============================
function FeedbackFormApp() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
    setForm({ name: "", email: "", feedback: "" });
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            placeholder="Your feedback..."
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Submitted Data:</h3>
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// =============================
// 2. Image Slideshow App
// =============================
function ImageSlideshowApp() {
  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full rounded-lg"
        />

        <div className="flex justify-between">
          <Button variant="outline" onClick={prevImage}>Previous</Button>
          <Button onClick={nextImage}>Next</Button>
        </div>

        {/* Optional Tabs View */}
        <Tabs defaultValue="1" value={(index + 1).toString()}>
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="1" onClick={() => setIndex(0)}>1</TabsTrigger>
            <TabsTrigger value="2" onClick={() => setIndex(1)}>2</TabsTrigger>
            <TabsTrigger value="3" onClick={() => setIndex(2)}>3</TabsTrigger>
          </TabsList>
          <TabsContent value="1" />
          <TabsContent value="2" />
          <TabsContent value="3" />
        </Tabs>
      </CardContent>
    </Card>
  );
}

// =============================
// 3. Todo List App
// =============================
function TodoListApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-2">
          {todos.map((t, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 border rounded-lg"
            >
              <Checkbox
                checked={t.completed}
                onCheckedChange={() => toggleTodo(index)}
              />
              <span className={t.completed ? "line-through text-gray-500" : ""}>
                {t.text}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// =============================
// Main Page
// =============================
export default function ShadcnPracticeApps() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-10">
      <FeedbackFormApp />
      <ImageSlideshowApp />
      <TodoListApp />
    </div>
  );
}
