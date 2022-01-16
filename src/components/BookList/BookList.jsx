import React from "react";
import PropTypes from "prop-types";
import BookItem from "components/BookList/BookItem/BookItem";
import "../../components/BookList/BookList.scss";

const BookList = ({ books = [], handleBookedUntil }) => {
  return (
    <ul id="list" className="list-block__list">
      {books.length > 0 &&
        books.map((book, index) => (
          <li key={book.id}>
            <BookItem
              number={index}
              handleBookedUntil={handleBookedUntil}
              bookData={book}
            />
          </li>
        ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
  handleBookedUntil: PropTypes.func,
};

export default BookList;
