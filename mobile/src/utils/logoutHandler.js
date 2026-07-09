import AsyncStorage from "@react-native-async-storage/async-storage";

export const handleLogout = async (navigation) => {
  try {
    // remove stored auth data
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");

    // reset navigation stack so user can't go back
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  } catch (error) {
    console.log("Logout error:", error);
  }
};