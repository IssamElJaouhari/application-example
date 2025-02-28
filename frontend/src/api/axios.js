import axios from "axios";

// Base API URL
const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Task API functions
export const createTask = (taskData) => API.post("/tasks", taskData);
export const getTasks = () => API.get("/tasks");
export const updateTask = (taskId, taskData) => API.put(`/tasks/${taskId}`, taskData);
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);

export default API;
