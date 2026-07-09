import { API_URL } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userStatus = async () => {
  const token = await AsyncStorage.getItem("token");

  const response = await fetch(`${API_URL}/user/checkStatus`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};