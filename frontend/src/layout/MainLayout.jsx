import React from "react";
import Sidebar from "./../components/admin/Sidebar";
import TopBar from "./../components/TopBar";
import { useTheme } from "../context/ThemeContext";

function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div 
        className="sidebar-m"
        style={{ width: "250px", maxHeight: "100vh" }}>
        <Sidebar />
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

export default MainLayout;