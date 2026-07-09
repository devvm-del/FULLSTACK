import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import IconInput from "../components/IconInput";
import Button from "../components/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await forgotPassword(email); 
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "400px", borderRadius: "15px" }}
      >
        <h2 className="card-title mb-0 text-start fw-bold text-black">
          Forgot Password
        </h2>
        <p className="text-start mt-1 mb-3 text-secondary">
          Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleForgotPassword}>
          <IconInput
            label="Email"
            type="email"
            iconType="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Email"}
          </Button>
        </form>

        <p className="mt-3 text-center">
          Remember your password? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;