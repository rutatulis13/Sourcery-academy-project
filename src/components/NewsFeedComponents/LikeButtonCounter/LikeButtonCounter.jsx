import React, { useState } from "react";
import PropTypes from "prop-types";
import { LikeButtonPropTypes } from "components/LikeButton/LikeButton";
import LikeButton from "components/LikeButton/LikeButton";

const LikeButtonCounter = ({ defaultLikes, ...props }) => {
  const [likes, setLikes] = useState(defaultLikes);

  const onLiked = () => {
    setLikes(likes + 1);
  };

  const onDisliked = () => {
    setLikes(likes - 1);
  };

  return (
    <>
      <LikeButton {...props} onLike={onLiked} onDislike={onDisliked} />
      <span>{likes}</span>
    </>
  );
};

LikeButtonCounter.propTypes = {
  ...LikeButtonPropTypes,
  defaultLikes: PropTypes.number,
};
export default LikeButtonCounter;
