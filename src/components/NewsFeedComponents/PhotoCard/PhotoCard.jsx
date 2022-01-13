import React from "react";
import PropTypes from "prop-types";
import "./PhotoCard.scss";
import LikeButtonCounter from "../LikeButtonCounter/LikeButtonCounter";
import Message from "assets/message-icon.svg";
import moment from "moment";

const BirthdayCard = ({ storie, comments, toggleModal }) => {
  return (
    <div className="photo-card">
      <div className="photo-card__header">
        <img src={storie.userImage} alt="avatar" />
        <div className="photo-card__header__name">{storie.userName}</div>
        <div className="photo-card__header__time">
          <span>{storie.postLocation}</span>
          {moment(storie.postDate).startOf("hour").fromNow()}
        </div>
      </div>
      <div className="photo-card__post-image">
        <img src={storie.postImage} alt="post" />
      </div>
      <div className="photo-card__action">
        <LikeButtonCounter
          itemDataAccessor="stories"
          itemId={storie.id}
          icon="Heart"
          defaultLikes={storie.likes}
        />
        <button
          onClick={() => {
            toggleModal(storie);
          }}
        >
          <img src={Message} alt="message-icon" />
        </button>
        <span>{storie.comments.length}</span>
      </div>
    </div>
  );
};

BirthdayCard.propTypes = {
  storie: PropTypes.object,
  comments: PropTypes.object,
  toggleModal: PropTypes.func,
};

export default BirthdayCard;
