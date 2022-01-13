import React from "react";
import PropTypes from "prop-types";
import BookItem from "components/BookList/BookItem/BookItem";

const BookList = ({ books = [] }) => {
  return (
    <ul id="list" className="list">
      {books.length > 0 &&
        books.map((book, index) => (
          <li key={book.id}>
            <BookItem number={index} props={book} />
          </li>
        ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};

export default BookList;
