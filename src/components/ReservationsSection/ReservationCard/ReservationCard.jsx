import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./ReservationCard.scss";
import { UserContext } from "../../UserContext/UserContext.jsx";

const ReservationCard = (props) => {
  const userContext = useContext(UserContext);

  const getReservedNumber = () => {
    if (userContext.loading === false && userContext.userData) {
      for (const [key, value] of Object.entries(
        userContext.userData.reservations
      )) {
        if (key === props.reservationItem.name) {
          return value.length;
        }
      }
    } else {
      return null;
    }
  };
  return (
    <a href="/#" className="reservation-card">
      <div className={`reservation-card__${props.reservationItem.name}`}>
        <h2 className="reservation-card__header">
          {props.reservationItem.headerMessage}
        </h2>
        <div
          className={`reservation-card--uppercase`}
        >{`${getReservedNumber()} Reserved`}</div>
        <img
          src={props.reservationItem.imagePath}
          alt={props.reservationItem.name}
          className={`reservation-card__image`}
        />
      </div>
    </a>
  );
};

ReservationCard.propTypes = {
  reservationItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReservationCard;
