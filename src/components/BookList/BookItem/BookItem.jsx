import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/reservations/crossmark.svg";
import check from "../../../assets/reservations/checkmark.svg";
import LikeButton from "components/LikeButton/LikeButton";
import Button from "components/Button/Button";
import { UserContext } from "contexts/UserContext/UserContext";
import "./BookItem.scss";

const BookItem = ({ number, handleBookedUntil, props }) => {
  const [bookingStatus, setBookingStatus] = useState(false);
  const book = props;
  const { userData } = useContext(UserContext);
  const no = number;

  const handleReservations = () => {
    let btn = document.getElementById(`booking-button${no}`);

    if (btn.innerHTML.toLowerCase() === "book") {
      setBookingStatus(true);
      userData.reservations.books.push({ id: book.id });
      btn.innerHTML = "return";
    } else if (btn.innerHTML.toLowerCase() === "return") {
      setBookingStatus(false);
      let index = userData.reservations.books.findIndex(
        (e) => e.id === book.id
      );
      if (index >= 0) {
        handleBookedUntil(book.id);
        let tempList = userData.reservations.books.filter((item) => {
          return item !== userData.reservations.books[index];
        });
        userData.reservations.books = tempList;
        btn.innerHTML = "book";
      }
    }
  };
  //TODO: apply check-in button for booking
  //TODO: RestaurantRating only works with restaurant, not books
  return (
    <>
      {book !== undefined && userData.reservations?.books !== undefined && (
        <div className="book-card">
          <figure className="book-card__image-container">
            <img
              className="book-card__image-container__image"
              src={book.image}
              alt=""
            />
          </figure>
          <div>
            <div className="book-card__author">{book.author}</div>
            <div className="book-card__title">{book.title}</div>
            {book.bookedUntil !== null ? (
              <div className="flexbox">
                <figure className="book-card__mark book-card__mark__icon__cross">
                  <img className="book-card__mark__icon" src={cross} alt="" />
                </figure>
                <div className="book-card__availability">
                  booked until {book.bookedUntil}
                </div>
              </div>
            ) : bookingStatus ||
              userData.reservations?.books.findIndex(
                (e) => e.id === book.id
              ) !== -1 ? (
              <div className="flexbox">
                <figure className="book-card__mark book-card__mark__icon__cross">
                  <img className="book-card__mark__icon" src={cross} alt="" />
                </figure>
                <div className="book-card__availability">booked</div>
              </div>
            ) : (
              <div className="flexbox">
                <figure className="book-card__mark book-card__mark__icon__check">
                  <img className="book-card__mark__icon" src={check} alt="" />
                </figure>
                <div className="book-card__availability">available</div>
              </div>
            )}
          </div>
          <div className="book-card__heart">
            <LikeButton itemDataAccessor="books" itemId={book.id} />
          </div>
          <div className="book-card__corner-buttons">
            <button className="book-card__corner-buttons__view-more">
              view more
            </button>

            {userData.reservations?.books.findIndex((e) => e.id === book.id) !==
            -1 ? (
              <Button
                size="medium"
                id={`booking-button${no}`}
                onClick={handleReservations}
              >
                return
              </Button>
            ) : book.bookedUntil !== null ? (
              <Button size="medium" id={`booking-button${no}`} disabled>
                book
              </Button>
            ) : (
              <Button
                size="medium"
                id={`booking-button${no}`}
                onClick={handleReservations}
              >
                book
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

BookItem.propTypes = {
  number: PropTypes.number,
  props: PropTypes.object,
  handleBookedUntil: PropTypes.func,
};

export default BookItem;
