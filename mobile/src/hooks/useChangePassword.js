import { useState } from "react";
import { changePasswordUser } from "../services/changePasswordService";

export default function useChangePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changePassword = async (
    currentPassword,
    newPassword,
    confirmPassword
  ) => {
    try {
      setLoading(true);
      setError("");

      return await changePasswordUser(
        currentPassword,
        newPassword,
        confirmPassword
      );
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    changePassword,
    loading,
    error,
  };
}