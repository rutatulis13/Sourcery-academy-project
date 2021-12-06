import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ReservationCard.scss";

const ReservationCard = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/userData.json"
    )
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setReservations([
            {
              name: "rooms",
              reservated: data.userData[0].reservations.rooms.length,
            },
            {
              name: "books",
              reservated: data.userData[0].reservations.books.length,
            },
            {
              name: "devices",
              reservated: data.userData[0].reservations.devices.length,
            },
          ]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return props.reservationItems.map((reservationItem, index) => {
      return (
        <a key={index} href="/#" className="reservation-card">
          <div className={`reservation-card__${reservationItem.name}`}>
            <h2 className="reservation-card__header">
              {reservationItem.headerMessage}
            </h2>
            <div className={`reservation-card--uppercase`}>
              {reservations.length && !error && isLoaded
                ? reservations.find(
                    (reservation) => reservation.name === reservationItem.name
                  ).reservated
                : null}
              {error ? 0 : null}
              &nbsp; Reserved
            </div>
            <img
              src={reservationItem.imagePath}
              alt={reservationItem.name}
              className={`reservation-card__image`}
            />
          </div>
        </a>
      );
    });
  }
};

ReservationCard.propTypes = {
  reservationItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReservationCard;
