import React from "react";
import PropTypes from "prop-types";
import "./BirthdayCard.scss";
import LikeButtonCounter from "../LikeButtonCounter/LikeButtonCounter";
import { ReactComponent as Message } from "assets/message-icon.svg";
import Divider from "../Divider/Divider";
import moment from "moment";

const BirthdayCard = ({ onStorieChange, toggleModal, storie, ...props }) => {
  // const onSubmit = (comment) => {
  //   onStorieChange({
  //     ...storie,
  //     comments: [...storie.comments, comment],
  //   });
  // };

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
            <span>{moment(storie.birthdayDate).format("MMM Do")}</span>
          </div>
          <div className="birthday-card__content__body__wish">Send a wish!</div>
        </div>
        <Divider />
        {/* <Comments comments={storie.comments} onSubmit={onSubmit} /> */}
        <div className="birthday-card__content__action">
          <LikeButtonCounter
            itemDataAccessor="stories"
            itemId={storie.id}
            icon="Gift"
            defaultLikes={storie.wishes}
          />
          <button
            onClick={() => {
              toggleModal(storie);
            }}
          >
            <Message />
          </button>
          {/* {showModal ? (
            <Modal setShowModal={setShowModal}>
              <Comments comments={storie.comments} onSubmit={onSubmit} />
            </Modal>
          ) : null} */}
          <span>{storie.comments.length}</span>
        </div>
        {props.children}
      </div>
    </div>
  );
};

BirthdayCard.propTypes = {
  storie: PropTypes.object,
  onStorieChange: PropTypes.func,
  toggleModal: PropTypes.func,
  children: PropTypes.any,
};

export default BirthdayCard;
