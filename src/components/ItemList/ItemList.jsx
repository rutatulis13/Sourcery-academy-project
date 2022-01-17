import React from "react";
import PropTypes from "prop-types";
import BookItem from "./Item/BookItem";
import DeviceItem from "./Item/DeviceItem";
import "../../components/ItemList/ItemList.scss";

const ItemList = ({ items = [], isBooks, handleBookedUntil }) => {
  return (
    <ul id="list" className="list-block__list">
      {isBooks &&
        items.length > 0 &&
        items.map((book, index) => (
          <BookItem
            key={book.id}
            number={index}
            handleBookedUntil={handleBookedUntil}
            bookData={book}
          />
        ))}
      {!isBooks &&
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
  isBooks: PropTypes.bool,
};

export default ItemList;
