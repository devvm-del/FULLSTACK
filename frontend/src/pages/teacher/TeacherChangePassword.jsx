import React from "react";
import TeacherLayout from "../../layout/TeacherLayout";
import ChangePasswordCard from "../../components/ChangePasswordCard";
import { useTheme } from "../../context/ThemeContext";

function TeacherChangePassword() {
   
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <TeacherLayout>
    <h3 className="mt-4 fw-bold ps-3"
        style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>Change Password</h3>
      <ChangePasswordCard />
    </TeacherLayout>
  );
}

export default TeacherChangePassword;