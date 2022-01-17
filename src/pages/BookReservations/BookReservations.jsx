import React, { useState } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";
import ReservationsFilters from "components/ReservationsFilters/ReservationsFilters";
import "./BookReservations.scss";
import { useEffect } from "react";

const BookReservations = () => {
  const [filters, setFilters] = useState({});

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(filters); // TODO: use this array for filtering
  }, [filters]);

  const handleSearch = (filter, text, date) => {
    // eslint-disable-next-line no-console
    console.log(filter, text, date); // TODO: use these values for filtering
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
    </PageLayout>
  );
};

export default BookReservations;
