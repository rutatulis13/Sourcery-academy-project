import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import "./LikeButton.scss";
import "./GiftButton.scss";
import { UserContext } from "contexts/UserContext/UserContext";
import { ReactComponent as Heart } from "assets/heart.svg";
import { ReactComponent as Gift } from "assets/gift.svg";

const LikeButton = ({ itemDataAccessor, itemId, icon, onLike, onDislike }) => {
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
      let nextUserData = { ...currentUserData };
      if (
        currentUserData?.liked?.[itemDataAccessor] &&
        Array.isArray(currentUserData.liked[itemDataAccessor])
      ) {
        nextUserData.liked[itemDataAccessor].push({ id: itemId });
      }
      return nextUserData;
    });
    if (onLike !== null && onLike !== undefined) onLike();
  };

  const unlikeItem = () => {
    setUserData((currentUserData) => {
      let nextUserData = { ...currentUserData };
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
    if (onDislike !== null && onDislike !== undefined) onDislike();
  };

  const clickHandler = () => {
    if (itemId) {
      isItemLiked ? unlikeItem() : likeItem();
    }
  };

  const heartIconClasses = classNames("heart__icon", {
    "heart__icon--filled": isItemLiked,
  });

  const giftIconClasses = classNames("gift__icon", {
    "gift__icon--filled": isItemLiked,
  });

  const Image = (props) => {
    switch (props.icon) {
      case "Heart":
        return <Heart className={heartIconClasses} alt="" />;
      case "Gift":
        return <Gift className={giftIconClasses} alt="" />;
      default:
        return "";
    }
  };

  return (
    userData &&
    Object.keys(userData).length > 0 && (
      <button
        type="button"
        className="heart"
        aria-label={`${isItemLiked ? "Unlike" : "Like"} the item`}
        onClick={clickHandler}
      >
        <Image icon={icon} />
      </button>
    )
  );
};

export const LikeButtonPropTypes = {
  itemDataAccessor: PropTypes.oneOf([
    "books",
    "devices",
    "restaurants",
    "stories",
  ]),
  itemId: PropTypes.string,
  icon: PropTypes.string,
  onLike: PropTypes.func,
  onDislike: PropTypes.func,
};

LikeButton.propTypes = LikeButtonPropTypes;

export default LikeButton;
