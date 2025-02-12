import axios from "axios";

// Base API URL
const API = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust if your backend is running on a different port
});

// Automatically add token to requests if user is logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
