import axios from "axios";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase";

const todosRef = collection(db, "todos");

export const fetchTodos = async (userId) => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((todo) => todo.userId === userId);
};

export const createTodo = async (todo) => {
  return addDoc(todosRef, todo);
};

export const updateTodo = async (id, data) => {
  const todoDoc = doc(db, "todos", id);
  return updateDoc(todoDoc, data);
};

export const deleteTodo = async (id) => {
  const todoDoc = doc(db, "todos", id);
  return deleteDoc(todoDoc);
};
