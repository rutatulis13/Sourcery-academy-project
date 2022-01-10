import React, { useState } from "react";
import Button from "components/Button/Button";
import { ReactComponent as SearchIcon } from "assets/search.svg";
import { ReactComponent as ClearIcon } from "assets/circle-x.svg";
import "./ReservationsFilters.scss";
import { useRef } from "react";

const filterOptions = [
  { text: "All" },
  { text: "Favorites", image: "heart" },
  { text: "Available", image: "available" },
];

const ReservationsFilters = () => {
  const [selectedFilterOptionIndex, setSelectedFilterOptionIndex] = useState(0);
  const searchTextInputRef = useRef();

  const onSelectFilter = (filterOptionIndex) => {
    setSelectedFilterOptionIndex(filterOptionIndex);
  };

  const onClearSearchText = () => {
    searchTextInputRef.current.value = "";
  };

  return (
    <section className="reservations-filters">
      <form>
        <h2 className="reservations-filters__title">Search</h2>
        <div className="reservations-filters__filter-options">
          {filterOptions.map((filterOption, filterOptionIndex) => (
            <button
              key={filterOption.text}
              className={`reservations-filters__filter-option${
                selectedFilterOptionIndex === filterOptionIndex
                  ? " reservations-filters__filter-option--selected"
                  : ""
              }`}
              type="button"
              onClick={() => onSelectFilter(filterOptionIndex)}
            >
              {filterOption.text}
            </button>
          ))}
        </div>
        <div className="reservations-filters__search-actions">
          <div className="reservations-filters__search-by-text-wrapper">
            <input
              type="text"
              name=""
              id=""
              className="reservations-filters__search-by-text"
              ref={searchTextInputRef}
            />
            <div className="reservations-filters__search-by-text-icon-wrapper">
              <SearchIcon />
            </div>
            <button
              type="button"
              className="reservations-filters__search-by-text-clear-button"
              onClick={onClearSearchText}
            >
              <ClearIcon />
            </button>
          </div>
          <div className="reservations-filters__search-by-date-wrapper">
            <input
              type="date"
              name=""
              id=""
              className="reservations-filters__search-by-date"
            />
          </div>
          <div className="reservations-filters__search-submit-wrapper">
            <Button>Search</Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ReservationsFilters;
