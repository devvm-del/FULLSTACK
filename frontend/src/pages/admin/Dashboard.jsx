import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useAdminName } from "../../hooks/admin/admin";
import { useTheme } from "../../context/ThemeContext";
import DashbboardCard from "../../components/DashboardCard";
import UserTable from "../../components/PendingTable";
import { FaUsers } from "react-icons/fa";
import useAcceptedUserCount from "../../hooks/admin/useAcceptedUserCount";
import usePendingUserCount from "../../hooks/admin/usePendingUserCount";
import useRejectedUserCount from "../../hooks/admin/useRejectedUserCount";


function Dashboard() {
  const { adminName } = useAdminName();
  const { theme } = useTheme();

  const { countAccepted, loadingAccepted } = useAcceptedUserCount();
  const { countPending, loadingPending } = usePendingUserCount();
  const { countRejected, loadingRejected } = useRejectedUserCount();

  const isDark = theme === "dark";

  return (
    <MainLayout>
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
          Welcome back, {adminName ? adminName : "Loading..."}
        </p>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard icon={<FaUsers />} total={countAccepted} name="User"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard icon={<FaUsers />} total={countPending} name="Pending"/>
          </div> 
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard icon={<FaUsers />} total={countRejected} name="Rejected"/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DashbboardCard />
          </div>
        </div>
        
        <UserTable />
          
      
    </MainLayout>
  );
}

export default Dashboard;
