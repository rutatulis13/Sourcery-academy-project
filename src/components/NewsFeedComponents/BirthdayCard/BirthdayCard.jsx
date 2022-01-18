import React from "react";
import PropTypes from "prop-types";
import "./BirthdayCard.scss";
import { ReactComponent as Message } from "assets/message-icon.svg";
import Divider from "../Divider/Divider";
import moment from "moment";
import Comments from "../Comments/Comments";
import LikeButton from "components/LikeButton/LikeButton";

const BirthdayCard = ({
  handleStoryChange,
  handleModalOpen,
  cardData,
  showComments,
}) => {
  const onSubmit = (comment) => {
    handleStoryChange(cardData.id, {
      ...cardData,
      comments: [...cardData.comments, comment],
    });
  };

  const onLike = () => {
    handleStoryChange(cardData.id, {
      ...cardData,
      wishes: cardData.wishes + 1,
    });
  };

  const onUnlike = () => {
    handleStoryChange(cardData.id, {
      ...cardData,
      wishes: cardData.wishes - 1,
    });
  };

  return (
    <div className="birthday-card">
      <div className="birthday-card__image">
        <img src={cardData.userImage} alt="avatar" />
      </div>
      <div className="birthday-card__content">
        <div className="birthday-card__content__body">
          {cardData.userName}
          <div className="birthday-card__content__body__date">
            Celebrated a birthday on{" "}
            <span style={{ fontWeight: "500" }}>
              {moment(cardData.birthdayDate).format("MMM Do")}
            </span>
          </div>
          <div className="birthday-card__content__body__wish">Send a wish!</div>
        </div>
        <Divider />
        <div className="birthday-card__content__action">
          <LikeButton
            itemDataAccessor="stories"
            itemId={cardData.id}
            icon="Gift"
            onLike={onLike}
            onUnlike={onUnlike}
          />
          <span>{cardData.wishes}</span>
          <button
            onClick={() => {
              handleModalOpen(cardData.id);
            }}
          >
            <Message />
          </button>
          <span>{cardData.comments.length}</span>
        </div>
        <div className="birthday-card__content__comments">
          {showComments && (
            <Comments comments={cardData.comments} onSubmit={onSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

BirthdayCard.propTypes = {
  cardData: PropTypes.object,
  handleStoryChange: PropTypes.func,
  handleModalOpen: PropTypes.func,
  showComments: PropTypes.bool,
};

export default BirthdayCard;
