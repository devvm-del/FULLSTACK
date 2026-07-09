import React from "react";
import MainLayout from "../../layout/MainLayout";
import { useTheme } from "../../context/ThemeContext";
import AcceptedTeacher from "../../components/TeacherTable";

function Teacher() {
   
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <MainLayout>
        <h3 className="mt-4 fw-bold ps-3"
            style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>Teacher
        </h3>
        <div className="p-3" 
              style={{backgroundColor: "#F5F5F5",
                      borderRadius: "10px"
              }}>
        <AcceptedTeacher />
        </div>
    </MainLayout>
  );
}

export default Teacher;