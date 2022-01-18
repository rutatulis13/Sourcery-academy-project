import React, { useEffect, useState } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ItemList from "components/ItemList/ItemList";
import Pagination from "components/ItemList/Pagination/Pagination";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";
import ReservationsFilters from "components/ReservationsFilters/ReservationsFilters";
import "./BookReservations.scss";

const BookReservations = () => {
  const [filters, setFilters] = useState({});
  const [booksList, setBooksList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = booksList.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(filters); // TODO: use this array for filtering
  }, [filters]);

  const handleSearch = (filter, text, date) => {
    // eslint-disable-next-line no-console
    //console.log(filter, text, date); // TODO: use these values for filtering
  };

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
        setBooksList(data.books.bookList);
      });
  }, []);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeBookedUntil = (id) => {
    let index = booksList.findIndex((e) => e.id === id);
    let newList = [...booksList];
    newList[index].bookedUntil = null;
    setBooksList(newList);
  };

  const handleFilter = (categoryName, filter, value) => {
    setFilters((currentFilters) => {
      const nextFilters = { ...currentFilters };
      if (!nextFilters[categoryName]) {
        nextFilters[categoryName] = [];
      }
      if (
        nextFilters[categoryName].some((filterName) => filterName === filter)
      ) {
        if (!value) {
          const filterIndex = nextFilters[categoryName].indexOf(filter);
          nextFilters[categoryName].splice(filterIndex, 1);
        }
      } else if (value) {
        nextFilters[categoryName].push(filter);
      }
      return nextFilters;
    });
  };

  const handleClearFilter = (categoryName) => {
    setFilters((currentFilters) => ({ ...currentFilters, [categoryName]: [] }));
  };

  return (
    <PageLayout title="Book Reservations">
      <div className="reservations-search-wrapper">
        <ReservationsSearch onSearch={handleSearch} />
      </div>
      <ReservationsFilters
        onFilter={handleFilter}
        onClearFilter={handleClearFilter}
      />
      {currentItems.length >= 0 && (
        <div className="list-block">
          <ItemList
            handleBookedUntil={changeBookedUntil}
            items={currentItems}
            listType="books"
          />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={booksList.length}
            currentPage={currentPage}
            handlePageChange={changePage}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default BookReservations;
