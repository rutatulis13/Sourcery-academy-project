import React from "react";
import PropTypes from "prop-types";
import "./ReservationsSection.scss";
const ReservationsSection = (props) => {
  return (
    <div className="dashboard__reservations">
      {props.firstElement === true ? (
        <div className="dashboard__title">
          <h2>Reservations</h2>
        </div>
      ) : null}

      <div className={`dashboard__${props.name}`}>
        <div className={`dashboard-text__${props.name}`}>
          <h2 className="dashboard__header">{props.headerMessage}</h2>
          <img
            src={props.imagePath}
            alt={props.name}
            className={`dashboard-image__${props.name}`}
          />
          <div className={`dashboard-text--uppercase`}>
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
