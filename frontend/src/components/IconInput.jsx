import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaKey,
  FaCheckCircle,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";

const IconInput = ({
  label,
  type,
  value,
  onChange,
  required,
  iconType,
  error,
  style,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  let icon;
  switch (iconType) {
    case "email":
      icon = <FaEnvelope />;
      break;
    case "password":
      icon = <FaLock />;
      break;
    case "user":
      icon = <FaUser />;
      break;
    case "currentPassword":
      icon = <FaLock />;
      break;
    case "newPassword":
      icon = <FaKey />;
      break;
    case "confirmPassword":
      icon = <FaCheckCircle />;
      break;
    default:
      icon = null;
  }

  return (
    <div className="mb-2">
      <label
        className="form-label fw-semibold"
        style={{ color: isDark ? "#F5F5F5" : "#1e1e1e" }}
      >
        {label}
      </label>
      <div className="position-relative">
        {icon && (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#6c757d",
            }}
          >
            {icon}
          </span>
        )}
        <input
          type={type}
          className="form-control ps-5"
          value={value}
          onChange={onChange}
          required={required}
          placeholder={`Enter your ${label.toLowerCase()}`}
          style={{
            borderRadius: "10px",
            height: "40px",
            fontFamily: "'Inter', sans-serif",
            borderColor: error ? "red" : "#ced4da",
          }}
        />
      </div>
      {error && <small className="text-danger d-block mt-1">{error}</small>}
    </div>
  );
};

export default IconInput;
