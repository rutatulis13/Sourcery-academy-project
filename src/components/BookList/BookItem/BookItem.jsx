import React, { useContext } from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/reservations/crossmark.svg";
import check from "../../../assets/reservations/checkmark.svg";
import LikeButton from "components/LikeButton/LikeButton";
import Button from "components/Button/Button";
import { UserContext } from "contexts/UserContext/UserContext";
import "./BookItem.scss";

const BookItem = ({ number, handleBookedUntil, bookData }) => {
  const { userData, setUserData } = useContext(UserContext);
  let isBooked = false;

  const handleReservations = () => {
    let index = userData.reservations.books.findIndex(
      (e) => e.id === bookData.id
    );
    if (index >= 0) {
      handleBookedUntil(bookData.id);
      isBooked = true;
    }

    setUserData((currentUserData) => {
      const nextUserData = { ...currentUserData };
      if (!isBooked) {
        nextUserData.reservations.books.push({ id: bookData.id });
      } else {
        nextUserData.reservations.books = currentUserData.reservations.books.filter(
          (item) => item.id !== bookData.id
        );
      }
      return nextUserData;
    });

    isBooked = !isBooked;
  };

  return (
    <>
      {bookData !== undefined && userData.reservations?.books !== undefined && (
        <div className="book-card">
          <figure className="book-card__image-container">
            <img
              className="book-card__image-container__image"
              src={bookData.image}
              alt=""
            />
          </figure>
          <div>
            <div className="book-card__author">{bookData.author}</div>
            <div className="book-card__title">{bookData.title}</div>
            {bookData.bookedUntil !== null ? (
              <div className="flexbox">
                <figure className="book-card__mark book-card__mark__icon__cross">
                  <img className="book-card__mark__icon" src={cross} alt="" />
                </figure>
                <div className="book-card__availability">
                  booked until {bookData.bookedUntil}
                </div>
              </div>
            ) : isBooked ||
              userData.reservations?.books.findIndex(
                (e) => e.id === bookData.id
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
            <LikeButton itemDataAccessor="books" itemId={bookData.id} />
          </div>
          <div className="book-card__corner-buttons">
            <button className="book-card__corner-buttons__view-more">
              view more
            </button>

            {userData.reservations?.books.findIndex(
              (e) => e.id === bookData.id
            ) !== -1 ? (
              <Button
                size="medium"
                id={`booking-button${number}`}
                onClick={handleReservations}
              >
                return
              </Button>
            ) : (
              <Button
                size="medium"
                id={`booking-button${number}`}
                onClick={handleReservations}
                disabled={!!bookData.bookedUntil}
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
  handleBookedUntil: PropTypes.func,
  bookData: PropTypes.object,
  number: PropTypes.number,
};

export default BookItem;
