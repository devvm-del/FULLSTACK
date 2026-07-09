import { useEffect, useState } from "react";
import { pendingUserCount } from "../../api/user";

export default function usePendingUserCount() {
  const [countPending, setCount] = useState(0);

  const [loadingPending, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);

        const response = await pendingUserCount();

        setCount(response.count);
      } catch (err) {
        console.error(err);

        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    
    fetchCount();


    const interval = setInterval(fetchCount, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    countPending,
    loadingPending,
    error,
  };
}


