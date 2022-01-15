import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";
import Message from "assets/message-icon.svg";
import Video from "./Video/Video";
import moment from "moment";
import Comments from "../Comments/Comments";
import LikeButton from "components/LikeButton/LikeButton";

const VideoCard = ({
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
      likes: storie.likes + 1,
    });
  };

  const onDislike = () => {
    onDisliked({
      ...storie,
      likes: storie.likes - 1,
    });
  };

  return (
    <div className="video-card">
      <div className="video-card__header">
        <img src={storie.userImage} alt="avatar" />
        <div className="video-card__header__name">{storie.userName}</div>
        <div className="video-card__header__time">
          <span>{storie.postLocation}</span>
          {moment(storie.postDate).startOf("hour").fromNow()}
        </div>
      </div>
      <div className="video-card__post-video">
        <Video src={storie.postVideo} />
      </div>
      <div className="video-card__action">
        <LikeButton
          itemDataAccessor="stories"
          itemId={storie.id}
          icon="Heart"
          onLike={onLike}
          onDislike={onDislike}
        />
        <span>{storie.likes}</span>
        <button
          onClick={() => {
            toggleModal(storie);
          }}
        >
          <img src={Message} alt="message-icon" />
        </button>
        <span>{storie.comments.length}</span>
      </div>
      <div className="video-card__comments">
        {modalCard && (
          <Comments comments={storie.comments} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  storie: PropTypes.object,
  onStorieChange: PropTypes.func,
  toggleModal: PropTypes.func,
  modalCard: PropTypes.bool,
  onLiked: PropTypes.func,
  onDisliked: PropTypes.func,
};

export default VideoCard;
