import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";      
import IconInput from "../components/IconInput";
import { useRegister } from "../context/RegisterContext";

const Register2 = () => {

    const {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    error,
    loading,
    clearError,
    resetForm
  } = useRegister();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>

        

        <h2 className="card-title mb-0 text-start fw-bolder text-black">Register</h2>
        <p className="text-start mt-1 mb-4 text-secondary">We’re excited to have you on board.</p>

        {/* STEP INDICATOR */}
        <div className="d-flex justify-content-center align-items-center mb-3">

          {/* Step 1 DONE */}
          <Link to="/register1" className="text-decoration-none">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#dee2e6",
                color: "#6c757d",
                fontSize: "12px",
              }}
            >
              1
            </div>
          </Link>

          {/* Line ACTIVE */}
          <div
            style={{
              height: "2px",
              width: "180px",
              backgroundColor: "#2f5323",
            }}
          ></div>

          {/* Step 2 ACTIVE */}
          <Link to="/register2" className="text-decoration-none">
            <div
              className="rounded-circle d-flex justify-content-center align-items-center fw-bold"
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "#2f5323",
                color: "white",
                fontSize: "12px",
              }}
            >
              2
            </div>
          </Link>

        </div>

        <form onSubmit={handleRegister}>
          <IconInput
            label="Username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              clearError("username"); 
            }}
            iconType="email"
            required
            error={error.username}
            
          />

          <IconInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {       
              setPassword(e.target.value)
              clearError("password");
            }}
            iconType="password"
            required
            error={error.password}
          />

          <IconInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
              clearError("confirmPassword");
            }}
            iconType="password"
            required
            error={error.confirmPassword}
          />

          <Button
            type="submit"
            variant="primary"
            className="button w-100 fw-semibold mt-2"
            style={{
              borderRadius: "30px",
              padding: "12px 0",
              lineHeight: "1.2",
              fontSize: "0.9rem",
            }}
          >
            Register
          </Button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register2;