import { Alert } from "react-native";

export const handleRegister = async ({
  username,
  password,
  confirmPassword,
  fullName,
  department,
  address,
  register,
  setUsernameError,
  setPasswordError,
  setConfirmPasswordError,
  setFullNameError,
  setDepartmentError,
  setAddressError,
}) => {
  try {
    
    // Clear previous errors
    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setFullNameError("");
    setDepartmentError("");
    setAddressError("");

    let hasError = false;

    const studentIdFormat = /^03-01-\d{4}-\d{6}$/;

    if (!username.trim()) {
      setUsernameError("Username is required");
      hasError = true;
    } else if (!studentIdFormat.test(username)) {
      setUsernameError("Invalid Student ID format");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (/\s/.test(password)) {
      setPasswordError("Password cannot contain spaces");
      hasError = true;
    }

    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm Password is required");
      hasError = true;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    }

    if (!fullName.trim()) {
      setFullNameError("Full Name is required");
      hasError = true;
    } else if (/\d/.test(fullName)){
      setFullNameError("Name cannot contain numbers")
      hasError = true;
    } else if (/[^A-Za-z\s]/.test(fullName)) {
      setFullNameError("Name cannot contain special characters")
      hasError = true;
    }

    if (!department.trim()) {
      setDepartmentError("Department is required");
      hasError = true;
    }

    if (!address.trim()) {
      setAddressError("Address is required");
      hasError = true;
    }

    if (hasError) return;

    const data = await register({
      username,
      password,
      full_name: fullName,
      department,
      address,
    });

    return {
     success: true,
     message: data.message || "Registration successful!",
    };


  } catch (error) {
    if (error.message === "Student ID already exists") {
      setUsernameError(error.message);
    } else {
      Alert.alert("Register Failed", error.message);
    }
  }
};