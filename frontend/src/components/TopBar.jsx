import React from "react";
import { FaEnvelope, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./../context/ThemeContext";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const hasNotifications = true;
  const isDark = theme === "dark";

  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-light shadow-sm px-3"
        style={{
          borderRadius: "10px",
          backgroundColor: "#3f6b2f",
        }}
      >
        <div className="ms-auto d-flex align-items-center">
          {/* Message Button */}
          <button
            className="btn position-relative me-2 py-2 px-2"
            style={{
              backgroundColor: isDark ? "#121212" : "#2f5323",
              color: "#fff",
            }}
            data-bs-toggle="offcanvas"
            data-bs-target="#messageOffcanvas"
            aria-controls="messageOffcanvas"
          >
            <FaEnvelope size={15} />

            {hasNotifications && (
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            )}
          </button>

          {/* Dark Mode Toggle */}
          <button
            className="btn px-2 py-2"
            style={{
              backgroundColor: isDark ? "#121212" : "#2f5323",
              color: "#fff",
            }}
            onClick={toggleTheme}
          >
            {isDark ? (
              <FaSun size={15} className="text-warning" />
            ) : (
              <FaMoon size={15} />
            )}
          </button>
        </div>
      </div>

      {/* Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="messageOffcanvas"
        aria-labelledby="messageOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="messageOffcanvasLabel">
            Messages
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <p>You have new messages.</p>

          <div className="list-group">
            <div className="list-group-item">Welcome to the dashboard!</div>

            <div className="list-group-item">
              Your profile has been updated.
            </div>

            <div className="list-group-item">
              You have 3 unread notifications.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
