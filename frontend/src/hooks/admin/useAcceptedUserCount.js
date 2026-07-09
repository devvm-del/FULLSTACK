import { useEffect, useState } from "react";
import { acceptedUserCount } from "../../api/user";

export default function useAcceptedUserCount() {
  const [countAccepted, setCount] = useState(0);

  const [loadingAccepted, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setLoading(true);

        const response = await acceptedUserCount();

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
    countAccepted,
    loadingAccepted,
    error,
  };
}








