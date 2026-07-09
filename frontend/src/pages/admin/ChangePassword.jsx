import React from "react";
import MainLayout from "../../layout/MainLayout";
import ChangePasswordCard from "../../components/ChangePasswordCard";
import { useTheme } from "../../context/ThemeContext";

function ChangePassword() {
   
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <MainLayout>
    <h3 className="mt-4 fw-bold ps-3"
        style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>Change Password</h3>
      <ChangePasswordCard />
    </MainLayout>
  );
}

export default ChangePassword;