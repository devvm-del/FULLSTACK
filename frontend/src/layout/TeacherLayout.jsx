import React from "react";
import TeacherSidebar from "../components/teacher/TeacherSidebar";
import TopBar from "./../components/TopBar";
import { useTheme } from "../context/ThemeContext";

function TeacherLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div 
        className="sidebar-m"
        style={{ width: "250px", maxHeight: "100vh" }}>
        <TeacherSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4"
            style={{backgroundColor: isDark ? "#121212" : "white"}}>
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default TeacherLayout;