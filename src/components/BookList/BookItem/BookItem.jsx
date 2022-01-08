import React from "react";
import PropTypes from "prop-types";
import cross from "../../../assets/reservations/crossmark.svg";
import check from "../../../assets/reservations/checkmark.svg";
import LikeButton from "components/LikeButton/LikeButton";
import Button from "components/Button/Button";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";
import "./BookItem.scss";

const BookItem = ({ number, props }) => {
  const book = props;
  const no = number;
  const id = `book-button${no}`;

  //TODO: apply check-in button for booking
  //TODO: RestaurantRating only works with restaurant, not books
  return (
    <>
      {book !== undefined && (
        <div className="item-container">
          <div className="image-container">
            <img className="image-container__image" src={book.image} alt="" />
          </div>

          <div>
            <div className="author">{book.author}</div>

            <div className="book-title">{book.title}</div>

            {book.bookedUntil !== null ? (
              <div className="flexbox">
                <figure className="mark mark__icon__cross">
                  <img className="mark__icon" src={cross} alt="" />
                </figure>

                <div className="availability">
                  booked until {book.bookedUntil}
                </div>
              </div>
            ) : (
              <div className="flexbox">
                <figure className="mark mark__icon__check">
                  <img className="mark__icon" src={check} alt="" />
                </figure>
                <div className="availability">available</div>
              </div>
            )}
          </div>

          <div className="rating">
            <RestaurantRating restaurantId={book.id} />
          </div>

          <div className="heart">
            <LikeButton itemDataAccessor="books" itemId={book.id} />
          </div>

          <div className="buttons-in-corner">
            <button className="view-more">view more</button>

            {id && book.bookedUntil === null ? (
              <Button
                onClick={() => {
                  let date = new Date();
                  book.bookedUntil = date.setMonth(date.getMonth + 1);
                }}
              >
                Book
              </Button>
            ) : (
              <Button disabled>Book</Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

BookItem.propTypes = {
  number: PropTypes.number,
  props: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.shape({
      score: PropTypes.number,
      userCount: PropTypes.number,
    }),
    bookedUntil: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default BookItem;
