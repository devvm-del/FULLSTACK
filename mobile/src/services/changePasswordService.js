import { API_URL } from "../config/api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const changePasswordUser = async (currentPassword, newPassword, confirmPassword) => {
  const token = await AsyncStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/mobile/changePasswordMobile`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        currentPassword,
        newPassword,
        confirmPassword
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
}; 