import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 border rounded-lg ${
            currentPage === i + 1 ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
