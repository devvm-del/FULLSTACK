import AsyncStorage from "@react-native-async-storage/async-storage";
import { userStatus } from "../services/userService";

export const checkUserStatus = async (navigation) => {
  try {
    await userStatus();
  } catch (error) {
    if (
      error.message ===
      "Your account has been disabled. Please contact the administrator."
    ) {

      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");

      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Login",
            params: {
              modalMessage: error.message,
            },
          },
        ],
      });
    }
  }
};