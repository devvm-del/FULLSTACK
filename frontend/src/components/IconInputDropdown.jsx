import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaKey,
  FaCheckCircle,
  FaChevronDown
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";

const DropdownInput = ({
  label,
  value,
  onChange,
  options = [],
  required,
  error,
  iconType,
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
        {/* Left Icon */}
        {icon && (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#6c757d",
              zIndex: 2,
            }}
          >
            {icon}
          </span>
        )}

        {/* Dropdown Arrow */}
        <span
          style={{
            position: "absolute",
            top: "50%",
            right: "12px",
            transform: "translateY(-50%)",
            color: "#6c757d",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <FaChevronDown />
        </span>

        <select
          className="form-select"
          value={value}
          onChange={onChange}
          required={required}
          style={{
            borderRadius: "10px",
            height: "40px",
            fontFamily: "'Inter', sans-serif",
            borderColor: error ? "red" : "#ced4da",
            paddingLeft: icon ? " 50px" : "12px",
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
          }}
        >
          <option value="">Select {label}</option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <small className="text-danger d-block mt-1">
          {error}
        </small>
      )}
    </div>
  );
};

export default DropdownInput;