import { useState, useEffect } from "react";

export const useTeacherName = () => {
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setTeacherName(payload.full_name || "");
    } catch (err) {
      console.error("Invalid token:", err);
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
  }, []);

  return { teacherName };
};


