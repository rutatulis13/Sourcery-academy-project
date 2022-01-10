import React from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";

const BookReservations = () => {
  return (
    <PageLayout title="Book Reservations">
      <ReservationsSearch />
    </PageLayout>
  );
};

export default BookReservations;
