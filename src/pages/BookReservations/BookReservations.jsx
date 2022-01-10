import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsFilters from "components/ReservationsFilters/ReservationsFilters";

const BookReservations = () => {
  return (
    <PageLayout title="Book Reservations">
      <ReservationsFilters />
    </PageLayout>
  );
};

export default BookReservations;
