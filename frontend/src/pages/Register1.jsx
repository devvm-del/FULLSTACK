import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";      
import IconInput from "../components/IconInput";
import DropdownInput from "../components/IconInputDropdown";
import { useRegister } from "../context/RegisterContext";

const Register1 = () => {

    const {
    fullName,
    setFullName,
    address,
    setAddress,
    department,
    setDepartment,
    handleRegister,
    nextStep,
    error,
    clearError,
    resetForm
    
    
  } = useRegister();


  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>

       

        <h2 className="card-title mb-0 text-start fw-bolder text-black">Register</h2>
        <p className="text-start mt-1 mb-4 text-secondary">We’re excited to have you on board.</p>

         {/* STEP INDICATOR */}
        <div className="d-flex justify-content-center align-items-center mb-3">

          {/* Step 1 ACTIVE */}
          <Link to="/register1" className="text-decoration-none">
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
              1
            </div>
          </Link>

          {/* Line */}
          <div
            style={{
              height: "2px",
              width: "180px",
              backgroundColor: "#2f5323",
            }}
          ></div>

          {/* Step 2 INACTIVE */}
          <Link to="/register2" className="text-decoration-none">
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
              2
            </div>
          </Link>

        </div>


        <form onSubmit={nextStep}>
          <IconInput
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              clearError("fullname");
            }}
            iconType="user"
            required
            error={error.fullname}
          />

          <IconInput
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            iconType="email"
            required
          />

          <DropdownInput
            label="Department"
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            iconType="email"
            options={[
              "CITE",
              "CMA",
              "CAS",
              "CAHS",
              "CCJE",
              "CHTM",
              "CEA"
            ]}
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
          >
            Next
          </Button>
        </form>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register1;