import axios from 'axios';

const API_URL = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:3000';

export const register = (data: any) => axios.post(`${API_URL}/auth/register`, data);
export const login = (data: any) => axios.post(`${API_URL}/auth/login`, data);

export const getProfile = async (token: string) => {
  const response = await axios.get(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};