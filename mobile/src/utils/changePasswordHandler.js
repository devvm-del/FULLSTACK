import { Alert } from "react-native";

export const handleChangePassword = async ({
  currentPassword,
  newPassword,
  confirmPassword,
  changePassword,
  setCurrentPassword,
  setNewPassword,
  setConfirmPassword,
  setCurrentPasswordError,
  setNewPasswordError,
  setConfirmPasswordError,

  setModalVisible,
  setModalMessage,
}) => {
  try {
    setCurrentPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    let hasError = false;

    if (!currentPassword.trim()) {
      setCurrentPasswordError("Current password is required");
      hasError = true;
    }

    if (!newPassword.trim()) {
      setNewPasswordError("New password is required");
      hasError = true;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm password is required");
      hasError = true;
    }

    if (hasError) return;

    const data = await changePassword(
      currentPassword,
      newPassword,
      confirmPassword
    );

    

    setModalMessage(data.message);
    setModalVisible(true);

    // Clear input fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    // Clear error messages
    setCurrentPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    


  } catch (error) {
    if (error.message === "Incorrect current password") {
      setCurrentPasswordError(error.message);
    } else if (error.message === "Passwords do not match") {
      setConfirmPasswordError(error.message);
    } else if (error.message === "Password must not contain spaces") {
      setNewPasswordError(error.message);
    } else {
      Alert.alert("Error", error.message);
    }
  }
};