import React from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav>
      <div className="pagination-block">
        {currentPage > 1 && (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(currentPage - 1)}
          >
            {"<"}
          </a>
        )}
        {currentPage === 1 ? (
          <a
            className="pagination-block__page-button pagination-block__page-button--current"
            href="#list"
            onClick={() => paginate(1)}
          >
            1
          </a>
        ) : (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(1)}
          >
            1
          </a>
        )}
        {currentPage !== 2 && currentPage !== 1 && (
          <button className="pagination-block__page-button">{"..."}</button>
        )}
        {currentPage === totalPages && (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(currentPage - 1)}
          >
            {currentPage - 1}
          </a>
        )}
        {currentPage !== 1 ? (
          <a
            className="pagination-block__page-button pagination-block__page-button--current"
            href="#list"
            onClick={() => paginate(currentPage)}
          >
            {currentPage}
          </a>
        ) : (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(currentPage + 1)}
          >
            {currentPage + 1}
          </a>
        )}
        {currentPage !== totalPages - 1 && currentPage !== totalPages && (
          <button className="pagination-block__page-button">{"..."}</button>
        )}
        {currentPage !== totalPages && (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(totalPages)}
          >
            {totalPages}
          </a>
        )}
        {currentPage < totalPages && (
          <a
            className="pagination-block__page-button"
            href="#list"
            onClick={() => paginate(currentPage + 1)}
          >
            {">"}
          </a>
        )}
      </div>
    </nav>
  );
};
Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};
export default Pagination;
