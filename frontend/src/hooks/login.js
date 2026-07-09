import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";

export const useLogin = () => {
  const [error, setError] = useState({ username: "", password: "", general: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    setError({  username: "", password: "", general: "" });

    const newError = { username: "", password: "", general: "" };
    let hasError = false;

    if (!username.trim()) {
      newError.username = "Username is required";
      hasError = true;
    }

    if (!password.trim()) {
      newError.password = "Password is required";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      return false;
    }

    setLoading(true);

    try {
      const data = await loginUser(username, password);
      const token = data.token;

      localStorage.setItem("token", token);

      const payload = JSON.parse(atob(token.split(".")[1]));

      // ✅ Store useful user data
      localStorage.setItem("userId", payload.id);
      localStorage.setItem("userFullName", payload.full_name);
      localStorage.setItem("userUsername", payload.username);
      localStorage.setItem("userRole", payload.role);

       // Navigate based on role
      if (payload.role === "admin") {
        navigate("/admin/dashboard");
      } else if (payload.role === "teacher") {
        navigate("/teacher/dashboard");
      } else {
        navigate("/");
      }
      return true;

    } catch (err) {
      const message = err.message || "Login failed";

      if (message.toLowerCase().includes("username")) {
        setError({ ...newError, username: message });
      } else if (message.toLowerCase().includes("password")) {
        setError({ ...newError, password: message });
      } else {
        setError({ ...newError, general: message });
      }

      return false;

    } finally {
      setLoading(false);
    }
  };

  const clearError = (field) => {
    setError((prev) => ({ ...prev, [field]: "" }));
  };

  return { error, loading, handleLogin, clearError };
};