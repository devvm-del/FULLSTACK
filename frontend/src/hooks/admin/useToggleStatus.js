import { useState } from "react";
import {
  enableUser,
  disableUser,
} from "../../api/user";

function useToggleUserStatus(onSuccess) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleUserStatus = async (user) => {
    try {
      setLoading(true);
      setError(null);

      if (user.is_enabled === false) {
        await enableUser(user.id);
      } else {
        await disableUser(user.id);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    toggleUserStatus,
    loading,
    error,
  };
}

export default useToggleUserStatus;