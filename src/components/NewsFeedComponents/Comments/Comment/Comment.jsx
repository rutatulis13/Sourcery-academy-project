import React from "react";
import PropTypes from "prop-types";
import "./Comment.scss";
import moment from "moment";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="comment__header">
        <div>{props.userName}</div>
        <div className="comment__header__date">
          {moment(props.date).format("L h:mm a")}
        </div>
      </div>
      <div className="comment__content">{props.comment}</div>
    </div>
  );
};

Comment.propTypes = {
  userName: PropTypes.string,
  date: PropTypes.node,
  comment: PropTypes.node,
};

export default Comment;
