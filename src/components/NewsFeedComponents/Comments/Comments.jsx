import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Comments.scss";
import Comment from "./Comment/Comment";
import CommentForm from "./CommentForm/CommentForm";
import moment from "moment";
import { UserContext } from "contexts/UserContext/UserContext";
import Divider from "../Divider/Divider";

const Comments = ({ comments, ...props }) => {
  const { userData } = useContext(UserContext);

  const onSubmit = (comment) => {
    props.onSubmit({
      userName: userData.userName,
      comment: comment,
      date: moment().toISOString(),
    });
  };

  return (
    <div className="comments">
      <Divider />
      <div className="comments__body">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            userName={comment.userName}
            date={comment.date}
            comment={comment.comment}
          />
        ))}
      </div>
      <Divider />
      <CommentForm onSubmit={onSubmit} userImage={userData.userImage} />
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  onSubmit: PropTypes.func,
};

export default Comments;
