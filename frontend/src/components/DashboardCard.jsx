import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useTheme } from "../context/ThemeContext";

function DashbboardCard({ icon, total, name, bgColor }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="card shadow-sm border-0 position-relative h-100"
      style={{
        backgroundColor: isDark ? "#1e1e1e" : "#F5F5F5",
        borderRadius: "12px",
      }}
    >
      <div className="card-body">
        <h6 className="fw-bold" 
            style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>
            {name}
        </h6>
        <h3 className="total fw-bold"
            style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>
            {total}
        </h3>

        <div
          className="position-absolute top-50 end-0 translate-middle-y me-3 d-flex align-items-center justify-content-center"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: isDark ? "#121212" : "#3f6b2f",
            borderRadius: "25px",
          }}
        >
          <div style={{ fontSize: "36px", color: "white" }}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbboardCard;