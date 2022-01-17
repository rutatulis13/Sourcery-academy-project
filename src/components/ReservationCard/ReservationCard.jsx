import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ReservationCard.scss";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { Link } from "react-router-dom";

const ReservationCard = ({ name, headerMessage, imagePath, linkPath }) => {
  const context = useContext(UserContext);

  const getReservedNumber = () => {
    if (!context.loading && context.userData) {
      return context.userData.reservations?.[name]?.length ?? 0;
    }
  };

  return (
    <Link to={linkPath} className="reservation-card">
      <div className="reservation-card__content-wrapper">
        <h2 className="reservation-card__header">{headerMessage}</h2>
        <div className="reservation-card__reservation-count">{`${getReservedNumber()} Reserved`}</div>
      </div>
      <div className="reservation-card__image-wrapper">
        <img src={imagePath} alt={name} className="reservation-card__image" />
      </div>
    </Link>
  );
};

ReservationCard.propTypes = {
  name: PropTypes.string,
  headerMessage: PropTypes.string,
  imagePath: PropTypes.string,
  linkPath: PropTypes.string,
};

export default ReservationCard;
