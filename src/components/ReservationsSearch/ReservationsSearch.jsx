import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "components/Button/Button";
import { ReactComponent as FavoritesIcon } from "assets/heart.svg";
import { ReactComponent as AvailableIcon } from "assets/circle-check.svg";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { ReactComponent as ClearIcon } from "assets/circle-x.svg";
import { ReactComponent as CalendarIcon } from "assets/calendar.svg";
import "./ReservationsSearch.scss";

const filterOptions = [
  { text: "All" },
  { text: "Favorites", image: FavoritesIcon },
  { text: "Available", image: AvailableIcon },
];

const ReservationsSearch = ({ onSearch }) => {
  const [selectedFilterOptionIndex, setSelectedFilterOptionIndex] = useState(0);
  const searchTextInputRef = useRef();
  const searchDateInputRef = useRef();

  const onSelectFilter = (filterOptionIndex) => {
    setSelectedFilterOptionIndex(filterOptionIndex);
  };

  const onClearSearchText = () => {
    searchTextInputRef.current.value = "";
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(
      filterOptions[selectedFilterOptionIndex].text,
      searchTextInputRef.current.value,
      searchDateInputRef.current.value
    );
  };

  return (
    <section className="reservations-search">
      <form onSubmit={onSubmit}>
        <h2 className="reservations-search__title">Search</h2>
        <div className="reservations-search__filter-options">
          {filterOptions.map((filterOption, filterOptionIndex) => (
            <button
              key={filterOption.text}
              className={classNames("reservations-search__filter-option", {
                "reservations-search__filter-option--selected":
                  selectedFilterOptionIndex === filterOptionIndex,
              })}
              type="button"
              onClick={() => onSelectFilter(filterOptionIndex)}
            >
              {filterOption.image && (
                <filterOption.image
                  className={classNames(
                    "reservations-search__filter-option-image",
                    {
                      "reservations-search__filter-option-image--selected":
                        selectedFilterOptionIndex === filterOptionIndex,
                    }
                  )}
                />
              )}
              {filterOption.text}
            </button>
          ))}
        </div>
        <div className="reservations-search__search-actions">
          <div className="reservations-search__text-wrapper">
            <input
              type="text"
              className="reservations-search__text"
              placeholder="Search reservations..."
              ref={searchTextInputRef}
            />
            <div className="reservations-search__text-icon-wrapper">
              <SearchIcon />
            </div>
            <button
              type="button"
              className="reservations-search__text-clear-button"
              onClick={onClearSearchText}
            >
              <ClearIcon />
            </button>
          </div>
          <div className="reservations-search__date-wrapper">
            <label
              htmlFor="search-reservation-date"
              className="reservations-search__date-label"
            >
              Reservation date
            </label>
            <input
              type="date"
              id="search-reservation-date"
              className="reservations-search__date"
              ref={searchDateInputRef}
            />
            <div className="reservations-search__date-icon-wrapper">
              <CalendarIcon />
            </div>
          </div>
          <div className="reservations-search__submit-wrapper">
            <Button>
              <SearchIcon className="reservations-search__submit-icon" />
              Search
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

ReservationsSearch.propTypes = {
  onSearch: PropTypes.func,
};

export default ReservationsSearch;
