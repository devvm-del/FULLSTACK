import { useEffect, useState } from "react";
import { acceptedTeacher } from "../../api/user";

export default function useAcceptedTeachers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    const fetchTeachers = async () => {
      try {
        const response = await acceptedTeacher();
        setUsers(response.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();

   
    interval = setInterval(() => {
      fetchTeachers();
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