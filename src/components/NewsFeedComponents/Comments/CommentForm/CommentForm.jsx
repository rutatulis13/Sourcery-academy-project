import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentForm.scss";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (comment.length >= 1) {
          props.onSubmit(comment);
          setComment("");
        }
      }}
      className="comment-form"
    >
      <div className="comment-form__input">
        <img src={props.userImage} alt="avatar" />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          // style={{
          //   backgroundImage: `url(${props.userImage})`,
          //   backgroundPosition: "left center",
          //   backgroundSize: "24px 24px",
          //   backgroundRepeat: "no-repeat",
          // }}
        />
      </div>
      <button>POST</button>
    </form>
  );
};

CommentForm.propTypes = {
  userImage: PropTypes.node,
  onSubmit: PropTypes.func,
};

export default CommentForm;
