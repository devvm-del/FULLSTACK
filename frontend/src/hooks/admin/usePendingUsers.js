import { useEffect, useState } from "react";
import { pendingUsers } from "../../api/user";

export default function usePendingUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    const fetchUsers = async () => {
      try {
        const response = await pendingUsers();
        setUsers(response.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();

    interval = setInterval(() => {
      fetchUsers();
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return {
    users,
    loading,
    error,
  };
}