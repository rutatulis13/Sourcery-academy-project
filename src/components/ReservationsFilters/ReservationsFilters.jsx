import React from "react";
import PropTypes from "prop-types";
import ReservationsFilterCard from "./ReservationsFilterCard/ReservationsFilterCard";
import "./ReservationsFilters.scss";

const ReservationsFilters = ({ filterCategories, onFilter, onClearFilter }) => {
  return (
    <section className="reservations-filters">
      {Object.keys(filterCategories).map((category) => (
        <ReservationsFilterCard
          key={category}
          categoryName={category}
          filtersList={filterCategories[category]}
          onFilter={onFilter}
          onClearFilter={onClearFilter}
        />
      ))}
    </section>
  );
};

ReservationsFilters.propTypes = {
  filterCategories: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default ReservationsFilters;
