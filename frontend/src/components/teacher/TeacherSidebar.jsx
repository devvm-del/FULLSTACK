import React, { useState } from "react";
import "../../styles/global.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTeacherName } from "../../hooks/teacher/teacher";
import { signOut } from "../../api/auth";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaKey,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import adminImg from "../../assets/admin.svg";
import adminImg1 from "../../assets/admin1.svg";

function TeacherSidebar() {
  const [openMenu, setOpenMenu] = useState(() => {
    const saved = localStorage.getItem("openMenu");
    return saved ? JSON.parse(saved) : [];
  });

  const location = useLocation();
  const navigate = useNavigate();
  const { teacherName } = useTeacherName();
  const { theme } = useTheme();

  const menuItems = [
    { name: "Dashboard", path: "/teacher/dashboard", icon: <FaTachometerAlt /> },


    {
      name: "Settings",
      icon: <FaCog />,
      submenu: [
        {
          name: "Change Password",
          path: "/teacher/setting/changePassword",
          icon: <FaKey />,
        },
      ],
    },
  ];

  const handleClick = (item) => {
    if (item.path) navigate(item.path);
  };

  const handleSignOut = () => {
    signOut();
    localStorage.setItem("theme", "light");
    navigate("/login");
  };

  const isDark = theme === "dark";

  return (
    <div
      className="sidebar text-white d-flex flex-column"
      style={{
        backgroundColor: isDark ? "#1e1e1e" : "#3f6b2f",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <h5 className="mb-4 sidebar-text d-flex align-items-center justify-content-center">
        <span className="icon-container me-2 d-flex align-items-center justify-content-center"
              style={{backgroundColor: isDark ? "#121212" :"#2f5323"}}>
          <FaUsers />
        </span>
        <span className="sidebar-title">PHINMA UPANG</span>
      </h5>

      {/* Profile */}
      <span className="profile-img d-flex align-items-center justify-content-center fs-1">
        <img
          src={isDark ? adminImg : adminImg1}
          style={{ height: "120px" }}
          alt="admin"
        />
      </span>
      <p className="mb-4 sidebar-text fw-bold">{teacherName}</p>

      {/* Menu */}
      <div className="d-flex flex-column flex-grow-1">
        {menuItems.map((item, index) => (
          <div key={item.name}>
            {/* Main Item */}
            <div
              onClick={() => {
                if (item.submenu) {
                  let newValue;

                  if (openMenu.includes(index)) {
                    newValue = openMenu.filter((i) => i !== index);
                  } else {
                    newValue = [...openMenu, index];
                  }
                  setOpenMenu(newValue);
                  localStorage.setItem("openMenu", JSON.stringify(newValue));
                } else {
                  handleClick(item);
                }
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = isDark
                    ? "#2a2a2a"
                    : "#4c7c3a";
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
              className={`mb-2 p-2 rounded d-flex align-items-center justify-content-between ${
                location.pathname === item.path ? "active-item" : ""
              }`}
              style={{
                cursor: "pointer",
                color: "#fff",
                backgroundColor:
                  location.pathname === item.path
                    ? isDark
                      ? "#121212"
                      : "#2f5323"
                    : "transparent",
              }}
            >
              <div className="d-flex align-items-center">
                <span className="me-2 pb-1">{item.icon}</span>
                <span className="sidebar-text fw-semibold">{item.name}</span>
              </div>

              {/* Arrow */}
              {item.submenu && (
                <FaChevronDown
                  size={12}
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      openMenu.includes(index) ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            </div>

            {/* Submenu */}
            {item.submenu && openMenu.includes(index) && (
              <div
                className="submenu-container"
                style={{ paddingLeft: "25px" }}
              >              
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.name}
                    onClick={() => handleClick(subItem)}
                    onMouseEnter={(e) => {
                    if (location.pathname !== subItem.path) {
                      e.currentTarget.style.backgroundColor = isDark
                        ? "#2a2a2a"
                        : "#4c7c3a";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== subItem.path) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                    className={`mb-1 p-2 rounded d-flex align-items-center ${
                      location.pathname === subItem.path ? "active-item" : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      color: "#fff",
                      backgroundColor:
                        location.pathname === subItem.path
                          ? isDark
                            ? "#121212"
                            : "#2f5323"
                          : "transparent",
                    }}
                  >
                    <span className="me-2">{subItem.icon}</span>
                    <span className="me-2 sidebar-text">{subItem.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Sign Out */}
        <div className="mt-auto">
          <div
            onClick={handleSignOut}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? "#333" : "#355e3b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? "#121212" : "#2F5323";
            }}
            className="p-2 rounded d-flex align-items-center fw-semibold"
            style={{
              cursor: "pointer",
              backgroundColor: isDark ? "#121212" : "#2F5323",
              color: "#fff",
              transition: "all 0.3s ease",
            }}
          >
            <span className="me-2">
              <FaSignOutAlt />
            </span>
            <span className="sidebar-text">Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherSidebar;
