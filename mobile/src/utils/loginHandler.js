import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogin = async ({
  username,
  password,
  login,
  setUsernameError,
  setPasswordError,
  setModalVisible,
  setModalMessage,
  navigation,
}) => {
  try {
    setUsernameError("");
    setPasswordError("");

    let hasError = false;

    if (!username.trim()) {
      setUsernameError("Username is required");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) return;

    const data = await login(username, password);

    
    const user = data?.user;
    const role = user?.role;

    // save user + token
    await AsyncStorage.setItem("user", JSON.stringify(user));
    await AsyncStorage.setItem("token", data.token);

    if ( role === "student") {
      navigation.replace("HomeStudent");
    } else if ( role === "teacher") {
      navigation.replace("HomeTeacher");
    }

  } catch (error) {

    const modalErrors = [
      "Account not approved yet",
      "Your account has been rejected. Please contact the administrator.",
      "Account is inactive.",
      "Access denied. Only students and teachers can use the mobile app.",
      "Your account has been disabled. Please contact the administrator.",
      "Too many login attempts. Please try again after 15 minutes."
      
    ];

    if (error.message === "Invalid username") {
      setUsernameError(error.message);
    } else if (error.message === "Invalid password") {
      setPasswordError(error.message);
    } else if (modalErrors.includes(error.message)) {
      setModalMessage(error.message);
      setModalVisible(true);
    } else {
      Alert.alert("Login Failed", error.message);
    }
  }
};