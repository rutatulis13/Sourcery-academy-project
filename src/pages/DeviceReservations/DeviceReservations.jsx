import React, { useContext, useEffect, useState } from "react";
import PageLayout from "components/PageLayout/PageLayout";
import ItemList from "components/ItemList/ItemList";
import Pagination from "components/ItemList/Pagination/Pagination";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";
import ReservationsFilters from "components/ReservationsFilters/ReservationsFilters";
import { UserContext } from "contexts/UserContext/UserContext";
import "./DeviceReservations.scss";

const DeviceReservations = () => {
  const [filters, setFilters] = useState({});
  const [devicesList, setDevicesList] = useState([]);
  const [filterCategories, setFilterCategories] = useState({});
  const [filteredItemsList, setFilteredItemsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 6;
  const { userData } = useContext(UserContext);

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/devices.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setDevicesList(data.devices.deviceList);
        setFilteredItemsList(data.devices.deviceList);
        setFilterCategories(data.devices.filterCategories);
      });
  }, []);

  useEffect(() => {
    setFilteredItemsList(() =>
      devicesList.filter((listItem) => {
        let isFiltered = true;
        Object.keys(filters).forEach((filterCategory) => {
          if (filters[filterCategory] && filters[filterCategory].length > 0) {
            isFiltered = filters[filterCategory].some(
              (filter) => filter === listItem[filterCategory]
            );
          }
        });
        return isFiltered;
      })
    );
  }, [filters, devicesList]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    if (filteredItemsList.length < indexOfFirstItem) {
      setCurrentPage(1);
    } else {
      setCurrentItems(
        filteredItemsList.slice(indexOfFirstItem, indexOfLastItem)
      );
    }
  }, [filteredItemsList, currentPage]);

  const handleSearch = (filter, text, date) => {
    setFilteredItemsList(() =>
      devicesList.filter((listItem) => {
        let isFiltered = true;
        // filter from buttons:
        if (
          filter === "Favorites" &&
          userData?.liked?.devices &&
          !userData.liked.devices.some(({ id }) => id === listItem.id)
        ) {
          isFiltered = false;
        } else if (filter === "Available" && listItem.bookedUntil != null) {
          isFiltered = false;
        }
        // filter from text input:
        if (text && !listItem.name.toUpperCase().includes(text.toUpperCase())) {
          isFiltered = false;
        }
        // filter from date input:
        if (date && listItem.bookedUntil !== date) {
          isFiltered = false;
        }
        return isFiltered;
      })
    );
  };

  const handleFilter = (categoryName, filter, value) => {
    setFilters((currentFilters) => {
      const nextFilters = { ...currentFilters };
      if (!nextFilters[categoryName]) {
        nextFilters[categoryName] = [];
      }
      if (
        nextFilters[categoryName].some((filterName) => filterName === filter)
      ) {
        if (!value) {
          const filterIndex = nextFilters[categoryName].indexOf(filter);
          nextFilters[categoryName].splice(filterIndex, 1);
        }
      } else if (value) {
        nextFilters[categoryName].push(filter);
      }
      return nextFilters;
    });
  };

  const handleClearFilter = (categoryName) => {
    setFilters((currentFilters) => ({ ...currentFilters, [categoryName]: [] }));
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PageLayout title="Device Reservations">
      <div className="reservations-search-wrapper">
        <ReservationsSearch onSearch={handleSearch} />
      </div>
      <div className="reservations-grid">
        <ReservationsFilters
          onFilter={handleFilter}
          onClearFilter={handleClearFilter}
          filterCategories={filterCategories}
        />
        {currentItems.length >= 0 && (
          <div className="reservation-items-wrapper">
            <ItemList items={currentItems} listType="devices" />
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredItemsList.length}
              currentPage={currentPage}
              handlePageChange={changePage}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default DeviceReservations;
