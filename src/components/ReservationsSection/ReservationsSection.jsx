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
    },
    {
      name: "books",
      imagePath: BookImage,
      headerMessage: "Books",
    },
    {
      name: "devices",
      imagePath: DeviceImage,
      headerMessage: "Devices",
    },
  ];

  return (
    <section>
      <h2 className="reservations__title">Reservations</h2>
      <Grid breakpointCols={[1, 1, 2, 3, 3, 3]}>
        {reservationItems.map((reservationItem, index) => {
          return (
            <ReservationCard reservationItem={reservationItem} key={index} />
          );
        })}
      </Grid>
    </section>
  );
};

export default ReservationsSection;
