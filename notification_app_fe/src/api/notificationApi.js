import axios from "axios";

const API_URL = import.meta.env.VITE_NOTIFICATION_API;

export const fetchNotifications = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};