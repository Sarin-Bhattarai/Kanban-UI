import axios from "axios";
import { baseUrl } from "./config";

//Api for registering a user
export const registerUser = async (userData) => {
  const { data } = await axios.post(`${baseUrl}/auth/register`, userData);
  return data;
};

//Api for login a user
export const loginUser = async (credentials) => {
  const { data } = await axios.post(`${baseUrl}/auth/login`, credentials);
  return data;
};

//Api for fetching current user
export const fetchUser = async (token) => {
  const { data } = await axios.get(`${baseUrl}/auth/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
