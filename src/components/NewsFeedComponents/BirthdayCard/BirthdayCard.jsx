import React from "react";
import PropTypes from "prop-types";
import "./BirthdayCard.scss";
import { ReactComponent as Message } from "assets/message-icon.svg";
import Divider from "../Divider/Divider";
import moment from "moment";
import Comments from "../Comments/Comments";
import LikeButton from "components/LikeButton/LikeButton";

const BirthdayCard = ({
  onStorieChange,
  toggleModal,
  storie,
  modalCard,
  onLiked,
  onDisliked,
}) => {
  const onSubmit = (comment) => {
    onStorieChange({
      ...storie,
      comments: [...storie.comments, comment],
    });
  };

  const onLike = () => {
    onLiked({
      ...storie,
      wishes: storie.wishes + 1,
    });
  };

  const onDislike = () => {
    onDisliked({
      ...storie,
      wishes: storie.wishes - 1,
    });
  };

  return (
    <div className="birthday-card">
      <div className="birthday-card__image">
        <img src={storie.userImage} alt="avatar" />
      </div>
      <div className="birthday-card__content">
        <div className="birthday-card__content__body">
          {storie.userName}
          <div className="birthday-card__content__body__date">
            Celebrated a birthday on{" "}
            <span style={{ fontWeight: "500" }}>
              {moment(storie.birthdayDate).format("MMM Do")}
            </span>
          </div>
          <div className="birthday-card__content__body__wish">Send a wish!</div>
        </div>
        <Divider />
        <div className="birthday-card__content__action">
          <LikeButton
            itemDataAccessor="stories"
            itemId={storie.id}
            icon="Gift"
            onLike={onLike}
            onDislike={onDislike}
          />
          <span>{storie.wishes}</span>
          <button
            onClick={() => {
              toggleModal(storie);
            }}
          >
            <Message />
          </button>
          <span>{storie.comments.length}</span>
        </div>
        <div className="birthday-card__content__comments">
          {modalCard && (
            <Comments comments={storie.comments} onSubmit={onSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

BirthdayCard.propTypes = {
  storie: PropTypes.object,
  onStorieChange: PropTypes.func,
  toggleModal: PropTypes.func,
  modalCard: PropTypes.bool,
  onLiked: PropTypes.func,
  onDisliked: PropTypes.func,
};

export default BirthdayCard;
