import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import "./LikeButton.scss";
import { UserContext } from "contexts/UserContext/UserContext";
import { ReactComponent as Heart } from "assets/heart.svg";

const LikeButton = ({ itemDataAccessor, itemId }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [isItemLiked, setIsItemLiked] = useState(false);

  useEffect(() => {
    if (
      userData?.liked?.[itemDataAccessor] &&
      Array.isArray(userData.liked[itemDataAccessor])
    ) {
      setIsItemLiked(
        userData.liked[itemDataAccessor].some(({ id }) => id === itemId)
      );
    }
  }, [userData, itemDataAccessor, itemId]);

  const likeItem = () => {
    setUserData((currentUserData) => {
      const nextUserData = { ...currentUserData };
      if (
        currentUserData?.liked?.[itemDataAccessor] &&
        Array.isArray(currentUserData.liked[itemDataAccessor])
      ) {
        nextUserData.liked[itemDataAccessor].push({ id: itemId });
      }
      return nextUserData;
    });
  };

  const unlikeItem = () => {
    setUserData((currentUserData) => {
      const nextUserData = { ...currentUserData };
      if (
        currentUserData?.liked?.[itemDataAccessor] &&
        Array.isArray(currentUserData.liked[itemDataAccessor])
      ) {
        nextUserData.liked[itemDataAccessor] = currentUserData.liked[
          itemDataAccessor
        ].filter(({ id }) => id !== itemId);
      }
      return nextUserData;
    });
  };

  const clickHandler = () => {
    if (itemId) {
      isItemLiked ? unlikeItem() : likeItem();
    }
  };

  const heartIconClasses = classNames("heart__icon", {
    "heart__icon--filled": isItemLiked,
  });
  return (
    userData &&
    Object.keys(userData).length > 0 && (
      <button
        type="button"
        className="heart"
        aria-label={`${isItemLiked ? "Unlike" : "Like"} the item`}
        onClick={clickHandler}
      >
        <Heart className={heartIconClasses} alt="" />
      </button>
    )
  );
};

LikeButton.propTypes = {
  itemDataAccessor: PropTypes.oneOf(["books", "devices", "restaurants"]),
  itemId: PropTypes.string,
};

export default LikeButton;
