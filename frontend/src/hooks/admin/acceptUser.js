import { useState } from "react";
import { acceptUser } from "../../api/user";

export default function useAcceptUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAccept = async (id) => {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const response = await acceptUser(id);

      setSuccess(true);

      // Close modal automatically after 2 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 1500);

      return response;
    } catch (err) {
      console.error(err);
      setError(err.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleAccept,
    loading,
    error,
    success,
  };
}