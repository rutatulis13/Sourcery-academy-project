import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ReservationCard.scss";
import { UserContext } from "../../UserContext/UserContext.jsx";

const ReservationCard = ({ reservationItem }) => {
  const { name, headerMessage, imagePath } = reservationItem;
  const context = useContext(UserContext);

  const getReservedNumber = () => {
    if (!context.loading && context.userData) {
      return context.userData.reservations[name]
        ? context.userData.reservations[name].length
        : 0;
    }
  };

  return (
    <a href="/#" className="reservation-card">
      <h2 className="reservation-card__header">{headerMessage}</h2>
      <div className="reservation-card--uppercase">{`${getReservedNumber()} Reserved`}</div>
      <img src={imagePath} alt={name} className="reservation-card__image" />
    </a>
  );
};

ReservationCard.propTypes = {
  reservationItem: PropTypes.object.isRequired,
};

export default ReservationCard;
