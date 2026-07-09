import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register1 from "../pages/Register1";
import Register2 from "../pages/Register2";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/admin/Dashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import Student from "../pages/admin/Student";
import Teacher from "../pages/admin/Teacher";
import ChangePassword from "../pages/admin/ChangePassword";
import TeacherChangePassword from "../pages/teacher/TeacherChangePassword";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register1" element={<Register1 />} />
      <Route path="/register2" element={<Register2 />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users/student" element={<Student />} />
      <Route path="/admin/users/teacher" element={<Teacher />} />
      <Route path="/admin/setting/changePassword" element={<ChangePassword />} />

      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher/setting/changePassword" element={<TeacherChangePassword />} />
    </Routes>
  );
};

export default AppRoutes;
