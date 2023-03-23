import axios from "axios";

const BASE_URL = "http://localhost:4001";

export const getTodos = async () => {
  return axios.get(`${BASE_URL}/todos`)
};

export const createTodo = async (formData) => {
  return axios.post(`${BASE_URL}/todos`, formData)
};

export const deleteTodo = async (todoId) => {
  return axios.delete(`${BASE_URL}/todos/${todoId}`)
};
