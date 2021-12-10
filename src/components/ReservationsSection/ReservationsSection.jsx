import React from "react";
import "./ReservationsSection.scss";
import ReservationCard from "./ReservationCard/ReservationCard";
import DoorImage from "../../assets/ReservationsSection/Door.svg";
import BookImage from "../../assets/ReservationsSection/Book.svg";
import DeviceImage from "../../assets/ReservationsSection/Device.svg";
import Grid from "components/Grid/Grid";

const ReservationsSection = () => {
  const reservationItems = [
    {
      name: "rooms",
      imagePath: DoorImage,
      headerMessage: "Meeting rooms",
      linkPath: "reservations/meeting-rooms",
    },
    {
      name: "books",
      imagePath: BookImage,
      headerMessage: "Books",
      linkPath: "reservations/books",
    },
    {
      name: "devices",
      imagePath: DeviceImage,
      headerMessage: "Devices",
      linkPath: "reservations/devices",
    },
  ];

  return (
    <section>
      <h2 className="reservations__title">Reservations</h2>
      <Grid breakpointCols={[1, 1, 2, 3, 3]}>
        {reservationItems.map((reservationItem) => {
          return (
            <ReservationCard
              reservationItem={reservationItem}
              key={reservationItem.name}
            />
          );
        })}
      </Grid>
    </section>
  );
};

export default ReservationsSection;
