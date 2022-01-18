import React, { useContext } from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/reservations/crossmark.svg";
import check from "../../../assets/reservations/checkmark.svg";
import LikeButton from "components/LikeButton/LikeButton";
import Button from "components/Button/Button";
import { UserContext } from "contexts/UserContext/UserContext";
import "./Item.scss";

const BookItem = ({ number, handleBookedUntil, bookData }) => {
  const { userData, setUserData } = useContext(UserContext);
  const date = bookData?.bookedUntil?.split("-").reverse().join("/");
  const isBooked = userData.reservations?.books.some(
    (book) => book.id === bookData.id
  );

  const handleReservations = () => {
    if (isBooked) {
      handleBookedUntil(bookData.id);
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
  };

  return (
    <li>
      {bookData !== undefined && userData.reservations?.books !== undefined && (
        <div className="item-card">
          <figure className="image-container">
            <img
              className="image-container__image"
              src={bookData.image}
              alt=""
            />
          </figure>
          <div>
            <div className="item-card__author">{bookData.author}</div>
            <div className="item-card__title">{bookData.title}</div>
            {bookData.bookedUntil !== null ? (
              <div className="flexbox">
                <figure className="item-card__mark--cross">
                  <img className="item-card__mark" src={cross} alt="" />
                </figure>
                {date && (
                  <div className="item-card__availability">
                    booked until {date}
                  </div>
                )}
              </div>
            ) : isBooked ? (
              <div className="flexbox">
                <figure className="item-card__mark--cross">
                  <img className="item-card__mark" src={cross} alt="" />
                </figure>
                <div className="item-card__availability">booked</div>
              </div>
            ) : (
              <div className="flexbox">
                <figure className="item-card__mark--check">
                  <img className="item-card__mark" src={check} alt="" />
                </figure>
                <div className="item-card__availability">available</div>
              </div>
            )}
          </div>
          <div className="item-card__heart">
            <LikeButton itemDataAccessor="books" itemId={bookData.id} />
          </div>
          <div className="corner-buttons">
            <button className="corner-buttons__view-more">view more</button>

            <Button
              size="medium"
              id={`booking-button${number}`}
              onClick={handleReservations}
              disabled={!!bookData.bookedUntil && !isBooked}
            >
              {isBooked ? "return" : "book"}
            </Button>
          </div>
        </div>
      )}
    </li>
  );
};

BookItem.propTypes = {
  handleBookedUntil: PropTypes.func,
  bookData: PropTypes.object,
  number: PropTypes.number,
};

export default BookItem;
