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
  const [filteredItemsList, setFilteredItemsList] = useState([]);
  const [filterCategories, setFilterCategories] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(filters); // TODO: use this array for filtering
    setFilteredItemsList(() =>
      booksList.filter((listItem) => {
        let isFiltered = true;
        Object.keys(filters).forEach((filterCategory) => {
          if (filters[filterCategory] && filters[filterCategory].length > 0) {
            isFiltered = filters[filterCategory].some(
              (filter) => filter === listItem[filterCategory]
            );
          }
        });
        return isFiltered;
      })
    );
  }, [filters, booksList]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    if (filteredItemsList.length < indexOfFirstItem) {
      setCurrentPage(1);
    } else {
      setCurrentItems(
        filteredItemsList.slice(indexOfFirstItem, indexOfLastItem)
      );
    }
  }, [filteredItemsList, currentPage]);

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
        setFilteredItemsList(data.books.bookList);
        setFilterCategories(data.books.filterCategories);
      });
  }, []);

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

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeBookedUntil = (id) => {
    let index = booksList.findIndex((e) => e.id === id);
    let newList = [...booksList];
    newList[index].bookedUntil = null;
    setBooksList(newList);
  };

  return (
    <PageLayout title="Book Reservations">
      <div className="reservations-search-wrapper">
        <ReservationsSearch onSearch={handleSearch} />
      </div>
      <div className="reservations-grid">
        <ReservationsFilters
          onFilter={handleFilter}
          onClearFilter={handleClearFilter}
          filterCategories={filterCategories}
        />
        {currentItems.length >= 0 && (
          <div className="reservation-items-wrapper">
            <ItemList
              handleBookedUntil={changeBookedUntil}
              items={currentItems}
              listType="books"
            />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItemsList.length}
              currentPage={currentPage}
              handlePageChange={changePage}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BookReservations;
