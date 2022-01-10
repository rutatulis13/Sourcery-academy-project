import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";
import LikeButtonCounter from "../LikeButtonCounter/LikeButtonCounter";
import Message from "assets/message-icon.svg";
import moment from "moment";

const VideoCard = ({ storie, comments }) => {
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
        <video controls src={storie.postVideo}>
          <track default kind="captions" />
        </video>
      </div>
      <div className="video-card__action">
        <LikeButtonCounter
          itemDataAccessor="stories"
          itemId={storie.id}
          icon="Heart"
          defaultLikes={storie.likes}
        />
        <button>
          <img src={Message} alt="message-icon" />
        </button>
        <span>{storie.comments.length}</span>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  storie: PropTypes.object,
  comments: PropTypes.object,
};

export default VideoCard;
