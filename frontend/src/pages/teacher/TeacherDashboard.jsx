import React from "react";
import TeacherLayout from "./../../layout/TeacherLayout";
import { useTeacherName } from "../../hooks/teacher/teacher";
import { useTheme } from "../../context/ThemeContext";
import DashbboardCard from "../../components/DashboardCard";
import { FaUsers } from "react-icons/fa";


function TeacherDashboard() {
  const { teacherName } = useTeacherName();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <TeacherLayout>
      <div
        className="welcome-card mt-4 pt-2 ps-3"
        style={{
          backgroundColor: isDark ? "#1e1e1e" : "#F5F5F5",

          borderRadius: "10px",
          height: "120px",
          transition: "all 0.3s ease",
        }}
      >
        <p
          id="welcome-message"
          className="welcome-message fw-bold d-flex justify-content-start page-title"
          style={{
            color: isDark ? "#F5F5F5" : "#3f6b2f",
            fontSize: "28px",
          }}
        >
          Welcome back, {teacherName ? teacherName: "Loading..."}
        </p>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard icon={<FaUsers />} total={1} name="User"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard icon={<FaUsers />} total={43} name="Rejected"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard />
          </div>
        </div>
        

    </TeacherLayout>
  );
}

export default TeacherDashboard;
