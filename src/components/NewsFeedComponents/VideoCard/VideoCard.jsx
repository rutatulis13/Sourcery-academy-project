import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";
import Message from "assets/message-icon.svg";
import Video from "./Video/Video";
import moment from "moment";
import Comments from "../Comments/Comments";
import LikeButton from "components/LikeButton/LikeButton";

const VideoCard = ({ handleStoryChange, toggleModal, cardData, modalCard }) => {
  const onSubmit = (comment) => {
    handleStoryChange({
      ...cardData,
      comments: [...cardData.comments, comment],
    });
  };

  const onLike = () => {
    handleStoryChange({
      ...cardData,
      likes: cardData.likes + 1,
    });
  };

  const onUnlike = () => {
    handleStoryChange({
      ...cardData,
      likes: cardData.likes - 1,
    });
  };

  return (
    <div className="video-card">
      <div className="video-card__header">
        <img src={cardData.userImage} alt="avatar" />
        <div className="video-card__header__name">{cardData.userName}</div>
        <div className="video-card__header__time">
          <span>{cardData.postLocation}</span>
          {moment(cardData.postDate).startOf("hour").fromNow()}
        </div>
      </div>
      <div className="video-card__post-video">
        <Video src={cardData.postVideo} />
      </div>
      <div className="video-card__action">
        <LikeButton
          itemDataAccessor="stories"
          itemId={cardData.id}
          icon="Heart"
          onLike={onLike}
          onUnlike={onUnlike}
        />
        <span>{cardData.likes}</span>
        <button
          onClick={() => {
            toggleModal(cardData);
          }}
        >
          <img src={Message} alt="message-icon" />
        </button>
        <span>{cardData.comments.length}</span>
      </div>
      <div className="video-card__comments">
        {modalCard && (
          <Comments comments={cardData.comments} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  cardData: PropTypes.object,
  handleStoryChange: PropTypes.func,
  toggleModal: PropTypes.func,
  modalCard: PropTypes.bool,
};

export default VideoCard;
