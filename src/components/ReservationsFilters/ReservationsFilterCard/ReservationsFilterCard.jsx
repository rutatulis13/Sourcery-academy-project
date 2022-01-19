import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as ClearIcon } from "../../../assets/x.svg";
import "./ReservationsFilterCard.scss";
import { useState } from "react";

const categoryNameTexts = {
  deviceType: "Device type",
};

const ReservationsFilterCard = ({
  categoryName,
  filtersList,
  onFilter,
  onClearFilter,
}) => {
  const [checkedFilters, setCheckedFilters] = useState({});

  const handleChange = (event, filter) => {
    setCheckedFilters((currentCheckedFilters) => ({
      ...currentCheckedFilters,
      [filter]: event.target.checked,
    }));
    onFilter(categoryName, filter, event.target.checked);
  };

  const handleClear = () => {
    setCheckedFilters(filtersList.map((filter) => ({ [filter]: false })));
    onClearFilter(categoryName);
  };

  return (
    <div className="reservations-filter-card">
      <div className="reservations-filter-card__header">
        <span className="reservations-filter-card__category-name">
          {categoryNameTexts[categoryName] || categoryName}
        </span>
        <button
          className="reservations-filter-card__clear-button"
          onClick={handleClear}
          aria-label={`Clear all ${
            categoryNameTexts[categoryName] || categoryName
          } filters`}
        >
          <span aria-hidden="true">Clear all</span>
          <ClearIcon />
        </button>
      </div>
      <ul className="reservations-filters-list">
        {filtersList.map((filter) => (
          <li key={filter} className="reservations-filters-list__item">
            <input
              type="checkbox"
              name={categoryName}
              id={`${categoryName}_${filter}`}
              className="reservations-filters-list__item-checkbox"
              checked={checkedFilters[filter] || false}
              onChange={(event) => {
                handleChange(event, filter);
              }}
            />
            <label
              htmlFor={`${categoryName}_${filter}`}
              className="reservations-filters-list__item-label"
            >
              {filter}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReservationsFilterCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  filtersList: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onClearFilter: PropTypes.func.isRequired,
};

export default ReservationsFilterCard;
