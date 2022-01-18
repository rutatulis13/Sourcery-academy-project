import React from "react";
import PropTypes from "prop-types";
import BookItem from "./Item/BookItem";
import DeviceItem from "./Item/DeviceItem";
import "../../components/ItemList/ItemList.scss";

const ItemList = ({ items = [], listType, handleBookedUntil }) => {
  return (
    <ul id="list" className="list-block__list">
      {listType === "books" &&
        items.length > 0 &&
        items.map((book, index) => (
          <BookItem
            key={book.id}
            number={index}
            handleBookedUntil={handleBookedUntil}
            bookData={book}
          />
        ))}
      {listType === "devices" &&
        items.length > 0 &&
        items.map((device, index) => (
          <DeviceItem key={device.id} number={index} deviceData={device} />
        ))}
    </ul>
  );
};

ItemList.propTypes = {
  handleBookedUntil: PropTypes.func,
  items: PropTypes.array,
  listType: PropTypes.oneOf(["books", "devices"]),
};

export default ItemList;
