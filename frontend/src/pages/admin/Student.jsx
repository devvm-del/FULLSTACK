import React from "react";
import MainLayout from "../../layout/MainLayout";
import AcceptedStudent from "../../components/StudentTable";
import { useTheme } from "../../context/ThemeContext";

function Student() {
   
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <MainLayout>
        <h3 className="mt-4 fw-bold ps-3"
            style={{color: isDark ? "#F5F5F5" : "#3f6b2f"}}>Student
        </h3>
        <div className="p-3"
              style={{backgroundColor: "#F5F5F5",
                      borderRadius: "10px"
              }}>
          <AcceptedStudent/>
        </div>
   
    </MainLayout>
  );
}

export default Student;