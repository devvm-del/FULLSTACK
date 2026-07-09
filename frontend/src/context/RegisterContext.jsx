import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import SuccessModal from "../components/SuccessModal";

const RegisterContext = createContext();

export function RegisterProvider({ children }) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Step 1
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");

  // Step 2
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    fullname: "",
    address: "",
    department: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = (e) => {
    e.preventDefault();

    const newError = {
      fullname: "",
      address: "",
      department: "",
    };

    // Full name validation
    if (/[^a-zA-Z\s.'-]/.test(fullName)) {
      newError.fullname = "Name must not contain special characters";

      setError((prev) => ({
        ...prev,
        ...newError,
      }));

      return;
    }

    if (
      newError.fullname ||
      newError.address ||
      newError.department
    ) {
      setError((prev) => ({
        ...prev,
        ...newError,
      }));

      return;
    }

    navigate("/register2");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const newError = {
      username: "",
      password: "",
      confirmPassword: "",
    };

    const schoolIdRegex = /^03-01-\d{4}-\d{6}$/;

    if (!schoolIdRegex.test(username)) {
      newError.username = "Invalid school id format";
      setError((prev) => ({
        ...prev,
        ...newError,
      }));
      return;
    }

    if (/\s/.test(password)) {
      newError.password = "Password must not contain spaces";
      setError((prev) => ({
        ...prev,
        ...newError,
      }));
      return;
    }

    if (password !== confirmPassword) {
      newError.confirmPassword = "Passwords do not match";
      setError((prev) => ({
        ...prev,
        ...newError,
      }));
      return;
    }

    try {
      setLoading(true);

      await registerUser(
        username,
        password,
        fullName,
        department,
        address,
        "teacher"
      );

      resetForm();

      // Show success modal
      setSuccessMessage("Account created successfully!");
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);

        setTimeout(() => {
          navigate("/login");
        }, 200);
      }, 1000);
    } catch (err) {
      setError({
        fullname: "",
        address: "",
        department: "",
        username: err.message || "Registration failed",
        password: "",
        confirmPassword: "",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearError = (field) => {
    setError((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const resetForm = () => {
  // Step 1
  setFullName("");
  setAddress("");
  setDepartment("");

  // Step 2
  setUsername("");
  setPassword("");
  setConfirmPassword("");

  // Errors
  setError({
    fullname: "",
    address: "",
    department: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
};

  return (
    <RegisterContext.Provider
      value={{
        // Step 1
        fullName,
        setFullName,
        address,
        setAddress,
        department,
        setDepartment,

        // Step 2
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,

        // Actions
        nextStep,
        handleRegister,
        resetForm,

        // UI
        loading,
        error,
        clearError,
      }}
    >
      {children}

    

      <SuccessModal
        show={showSuccess}
        message={successMessage}
      />
    </RegisterContext.Provider>
  );
}

export const useRegister = () => useContext(RegisterContext);