import { useState } from "react";
import { rejectUser } from "../../api/user";

export default function useRejectUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleReject = async (id) => {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      const response = await rejectUser(id);

      setSuccess(true);
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
    handleReject,
    loading,
    error,
    success,
  };
}