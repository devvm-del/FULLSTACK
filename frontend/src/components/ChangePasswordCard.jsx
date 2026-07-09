import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IconInput from "./IconInput";
import Button from "./Button";
import { useChangePassword } from "../hooks/useChangePassword";
import { useTheme } from "../context/ThemeContext";
import SuccessModal from "./SuccessModal";

function ChangePasswordCard() {
  const [open, setOpen] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { theme } = useTheme();

  const { form, error, loading, handleChange, handleSubmit, resetForm } =
    useChangePassword();

  async function onSubmit(e) {
    e.preventDefault();

    const result = await handleSubmit();

    if (result?.success) {
      setSuccessMessage(result.message);
      setShowSuccess(true);
      resetForm();
      setTimeout(() => {
        setShowSuccess(false);
        setOpen(false);
      }, 2000);
    }
  }

  const isDark = theme === "dark";

  return (
    <>
        <div
          className="d-flex justify-content-center align-items-center mt-4"
          style={{ minHeight: "70vh" }}
        >
          <div
            className=" p-4 rounded shadow w-100"
            style={{
              maxWidth: "450px",
              backgroundColor: isDark ? "#1e1e1e" : "white",
              color: isDark ? "" : "#000000",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h4
              className="mb-3 fw-bold"
              style={{ color: isDark ? "#F5F5F5" : "#1e1e1e" }}
            >
              Change Password
            </h4>

            <form onSubmit={onSubmit} className="d-flex flex-column gap-3">
              <IconInput
                label="Current Password"
                type="password"
                iconType="currentPassword"
                value={form.currentPassword}
                onChange={handleChange("currentPassword")}
                error={error.currentPassword}
              />

              <IconInput
                label="New Password"
                type="password"
                iconType="newPassword"
                value={form.newPassword}
                onChange={handleChange("newPassword")}
                error={error.newPassword}
              />

              <IconInput
                label="Confirm Password"
                type="password"
                iconType="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                error={error.confirmPassword}
              />

              {error.general && (
                <small className="text-danger">{error.general}</small>
              )}

              <div className="d-flex justify-content-end gap-2">

                <Button
                  type="submit"
                  className="btn border-0 pt-2 pb-2 fw-bold"
                  style={{ 
                    borderRadius: "10px",
                    backgroundColor: isDark ? "#121212" : "#3f6b2f",
                    width: "100%",

                  }}
                  hoverStyle={{
                    backgroundColor: isDark ? "#333" : "#355e3b",
                  }}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </div>
        </div>
  
      <SuccessModal
        show={showSuccess}
        message={successMessage}
        onClose={() => {
          setShowSuccess(false);
          setOpen(false);
        }}
      />
    </>
  );
}

export default ChangePasswordCard;
