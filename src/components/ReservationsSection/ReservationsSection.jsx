import React from "react";
import PropTypes from "prop-types";
import "./ReservationsSection.scss";
const ReservationsSection = (props) => {
  return (
    <div className="dashboard__reservations">
      {props.firstElement === true ? (
        <div className="dashboard__reservations__header">
          <h2>Reservations</h2>
        </div>
      ) : null}

      <div className={`dashboard__reservations__${props.name}`}>
        <div className={`dashboard__reservations__${props.name}__text`}>
          <h2>{props.headerMessage}</h2>
          <img
            src={props.imagePath}
            alt={props.name}
            className={`dashboard__reservations__${props.name}__image-${props.name}`}
          />
          <div
            className={`dashboard__reservations__${props.name}__text-reserved`}
          >
            {props.reservedItems} Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

ReservationsSection.propTypes = {
  firstElement: PropTypes.bool,
  sectionHeader: PropTypes.string,
  name: PropTypes.string,
  headerMessage: PropTypes.string,
  reservedItems: PropTypes.number,
  imagePath: PropTypes.string.isRequired,
};

ReservationsSection.defaultProps = {
  firstElement: false,
  reservedItems: 0,
};
export default ReservationsSection;
