import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";
import "./BookReservations.scss";

const BookReservations = () => {
  const handleSearch = (filter, text, date) => {
    // eslint-disable-next-line no-console
    console.log(filter, text, date); // TODO: use these values for filtering
  };

  return (
    <PageLayout title="Book Reservations">
      <div className="reservations-search-wrapper">
        <ReservationsSearch onSearch={handleSearch} />
      </div>
    </PageLayout>
  );
};

export default BookReservations;
