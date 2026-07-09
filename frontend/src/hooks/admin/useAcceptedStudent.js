import { useEffect, useState } from "react";
import { acceptedStudent} from "../../api/user";

export default function useAcceptedStudent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval;

    const fetchStudents = async () => {
      try {
        const response = await acceptedStudent();
        setUsers(response.data);
        setError("");
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();

   
    interval = setInterval(() => {
      fetchStudents();
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