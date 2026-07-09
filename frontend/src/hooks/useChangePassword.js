import { useState } from "react";
import { updatePassword } from "../api/changePassword";

export const useChangePassword = () => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    general: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    setError((prev) => ({
      ...prev,
      [field]: "",
      general: "",
    }));
  };

  const validate = () => {
    const newError = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      general: "",
    };

    let hasError = false;

    if (!form.currentPassword.trim()) {
      newError.currentPassword = "Current password is required";
      hasError = true;
    }

    if (!form.newPassword.trim()) {
      newError.newPassword = "New password is required";
      hasError = true;
    }

    if (!form.confirmPassword.trim()) {
      newError.confirmPassword = "Confirm password is required";
      hasError = true;
    }

    if (form.newPassword !== form.confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
      hasError = true;
    }

    if (/\s/.test(form.newPassword)) {
      newError.newPassword = "Password must not contain spaces";
      hasError = true;
    }

    setError(newError);
    return !hasError;
  };

  const handleSubmit = async () => {
    if (!validate()) return false;

    setLoading(true);

    try {
      const res = await updatePassword(form);
      return { success: true, message: res.message };

    } catch (err) {
      setError((prev) => ({
        ...prev,
        currentPassword: err.message,
      }));

      return { success: false };

    } finally {
      setLoading(false);
    }
  };


  const resetForm = () => {
  setForm({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
};
  return {
    form,
    error,
    loading,
    handleChange,
    handleSubmit,
    resetForm,
  };
};