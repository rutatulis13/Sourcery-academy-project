import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ReservationCard.scss";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { Link } from "react-router-dom";

const ReservationCard = ({ reservationItem }) => {
  const { name, headerMessage, imagePath, linkPath } = reservationItem;
  const context = useContext(UserContext);

  const getReservedNumber = () => {
    if (!context.loading && context.userData) {
      return context.userData.reservations[name]?.length ?? 0;
    }
  };

  return (
    <Link to={linkPath} className="reservation-card">
      <div className="reservation-card__left">
        <h2 className="reservation-card__header">{headerMessage}</h2>
        <div className="reservation-card__uppercase">{`${getReservedNumber()} Reserved`}</div>
      </div>
      <div className="reservation-card__right">
        <img src={imagePath} alt={name} className="reservation-card__image" />
      </div>
    </Link>
  );
};

ReservationCard.propTypes = {
  reservationItem: PropTypes.object.isRequired,
};

export default ReservationCard;
