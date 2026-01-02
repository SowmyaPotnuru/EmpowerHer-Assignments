import axiosInstance from "./AxiosInstance";

// GET all todos
export const getTodos = () => {
  return axiosInstance.get("/todos");
};

// GET todo by ID
export const getTodoById = (id) => {
  return axiosInstance.get(`/todos/${id}`);
};
