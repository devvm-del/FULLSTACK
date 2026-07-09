import { useEffect, useState } from "react";
import { rejectedUserCount } from "../../api/user";

export default function useRejectedUserCount() {
  const [countRejected, setCount] = useState(0);

  const [loadingRejected, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);

        const response = await rejectedUserCount();

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
    countRejected,
    loadingRejected,
    error,
  };
}


