import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import useAcceptedTeachers from "../hooks/admin/useAcceptedTeacher";
import useSearchPagination from "../hooks/admin/useSearchPagination";

function AcceptedTeacher() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { users, loading, error } = useAcceptedTeachers();
  const [department, setDepartment] = useState("");

  const {
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
  } = useSearchPagination(users, 7, department);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <>
      <div className="ps-3 pb-3 d-flex">
        <input
          type="search"
          placeholder="Search teacher..."
          className="form-control w-25"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Button className="ms-2">Search</Button>

         <select
          name="department"
          className="form-select w-auto"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="CITE">CITE</option>
          <option value="CAS">CAS</option>
          <option value="CAHS">CAHS</option>
          <option value="CEA">CEA</option>
          <option value="CMA">CMA</option>
          <option value="CCJE">CCJE</option>
          <option value="CHTM">CHTM</option>
        </select>
      </div>

      <table
        className={`table table-hover ${
          isDark ? "table-dark" : ""
        }`}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Address</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((user, index) => (
              <tr key={user._id}>
                <td>
                  {(currentPage - 1) * 7 + index + 1}
                </td>

                <td className="fw-bold">
                  {user.full_name}
                </td>

                <td>{user.role}</td>

                <td>{user.department}</td>

                <td>{user.address}</td>

                <td className="text-center align-middle">
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      className="btn border-0 pt-2 pb-2 fw-bold"
                      style={{
                        backgroundColor: isDark
                          ? "#121212"
                          : "#3f6b2f",
                      }}
                    >
                      Reject
                    </Button>

                    <Button
                      className="btn pt-2 pb-2 fw-bold border border-light"
                      style={{
                        backgroundColor: isDark
                          ? "#121212"
                          : "#3f6b2f",
                      }}
                    >
                      Accept
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No teachers found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="btn-sm border border-light"
          style={{
            backgroundColor: isDark
              ? "#121212"
              : "#3f6b2f",
          }}
        >
          <i className="bi bi-chevron-left fw-bold"></i>
        </Button>

        {Array.from(
          { length: totalPages || 1 },
          (_, index) => (
            <Button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`fw-bold  ${
                currentPage === index + 1
                  ? "btn-sm btn-success border border-success"
                  : "btn-sm btn-light border border-success"
              }`}
            >
              {index + 1}
            </Button>
          )
        )}

        <Button
          onClick={nextPage}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          className="btn-sm border border-light"
          style={{
            backgroundColor: isDark
              ? "#121212"
              : "#3f6b2f",
          }}
        >
          <i className="bi bi-chevron-right fw-bold"></i>
        </Button>
      </div>
    </>
  );
}

export default AcceptedTeacher;