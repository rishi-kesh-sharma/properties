import axios from "axios";
import { baseUrl } from "./constants";
export const getProfile = async () => {
  const response = await axios.get(`${baseUrl}/user/profile`);
  return response;
};
export const updateProfile = async () => {
  const response = await axios.get(`${baseUrl}/user/profile`);
  return response;
};
