import React from "react";
import { useState, useEffect } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import BookList from "components/BookList/BookList";
import Pagination from "components/BookList/Pagination/Pagination";
import "../../components/BookList/BookList.scss";

const BookReservations = () => {
  //const [bookData, setBookData] = useState({});
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/books.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        //setBookData(data.books);
        setBooksList(data.books.bookList);
      });
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booksList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <PageLayout title="Book Reservations">
      {currentItems.length >= 0 && (
        <div className="list-block">
          <BookList props={currentItems} />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={booksList.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default BookReservations;
