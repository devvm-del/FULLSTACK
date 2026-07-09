import { useState, useEffect } from "react";

export const useAdminName = () => {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setAdminName(payload.full_name || "");
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }, []);

  return { adminName };
};