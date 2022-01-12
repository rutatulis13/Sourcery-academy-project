import React, { useState } from "react";
import "./ReservationsSection.scss";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import DoorImage from "../../assets/ReservationsSection/Door.svg";
import BookImage from "../../assets/ReservationsSection/Book.svg";
import DeviceImage from "../../assets/ReservationsSection/Device.svg";
import Grid from "components/Grid/Grid";

const ReservationsSection = () => {
  const [reservationItems] = useState([
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
  ]);
  return (
    <section className="reservations-section">
      <h2 className="reservations-section__title">Reservations</h2>
      <Grid breakpointCols={[1, 1, 3, 3, 3]}>
        {reservationItems.map(
          ({ name, headerMessage, imagePath, linkPath }) => {
            return (
              <ReservationCard
                key={name}
                name={name}
                headerMessage={headerMessage}
                imagePath={imagePath}
                linkPath={linkPath}
              />
            );
          }
        )}
      </Grid>
    </section>
  );
};

export default ReservationsSection;
