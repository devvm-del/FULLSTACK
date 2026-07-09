import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";
import usePendingUsers from "../hooks/admin/usePendingUsers";
import useAcceptUser from "../hooks/admin/acceptUser";
import useRejectUser from "../hooks/admin/rejectUser";
import SuccessModal from "./SuccessModal";
import useSearchPagination from "../hooks/admin/useSearchPagination";
import { useState } from "react";

function UserTable() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { handleAccept, success, loading: acceptLoading } = useAcceptUser();
  const { handleReject,  loading: rejectLoading } = useRejectUser();

  const { users, loading, error } = usePendingUsers();

  const [department, setDepartment] = useState("");

  const {
    searchTerm,
    setSearchTerm,
    paginatedData,
  
    
  } = useSearchPagination(users, 10, department);

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
      <div className="table-responsive">
        <table className={`table table-hover ${isDark ? "table-dark" : ""}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.full_name}</td>
                  <td>{user.role}</td>
                  <td>{user.department}</td>

                  <td className="text-center align-middle">
                    <div className="d-flex justify-content-center gap-2">
                      <Button onClick={() => handleReject(user.id)} disabled={rejectLoading}
                              className="btn btn-danger fw-bold">
                        Reject
                      </Button>

                      <Button onClick={() => handleAccept(user.id)} disabled={acceptLoading}
                              className="btn btn-success fw-bold">
                        Accept
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No pending teachers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <SuccessModal
      show={success}
      message="User accepted successfully"
      onClose={() => {
          setShowSuccess(false);
          setOpen(false);
        }}
      />
    </>
  );
}

export default UserTable;