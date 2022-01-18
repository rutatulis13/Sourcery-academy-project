import React from "react";
import { useState, useEffect } from "react";
import Pagination from "components/ItemList/Pagination/Pagination";
import PageLayout from "components/PageLayout/PageLayout";
import ItemList from "components/ItemList/ItemList";
import ReservationsSearch from "components/ReservationsSearch/ReservationsSearch";

const DeviceReservations = () => {
  const [devicesList, setDevicesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = devicesList.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = (filter, text, date) => {
    // eslint-disable-next-line no-console
    //console.log(filter, text, date); // TODO: use these values for filtering
  };

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
      });
  }, []);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PageLayout title="Device Reservations">
      <div className="reservations-search-wrapper">
        <ReservationsSearch onSearch={handleSearch} />
      </div>
      {currentItems.length >= 0 && (
        <div className="list-block">
          <ItemList items={currentItems} listType="devices" />
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={devicesList.length}
            currentPage={currentPage}
            handlePageChange={changePage}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DeviceReservations;
