import { useState, useMemo, useEffect } from "react";

function useSearchPagination(data = [], itemsPerPage = 8, department = "") {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
  return data.filter((user) => {
    const matchesSearch =
      [user.full_name, user.role, user.department, user.address]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      department === "" || user.department === department;

    return matchesSearch && matchesDepartment;
  });
}, [data, searchTerm, department]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    searchTerm,
    setSearchTerm,
    currentPage,
    totalPages,
    paginatedData,
    filteredData,
    nextPage,
    prevPage,
    goToPage,
  };
}

export default useSearchPagination;