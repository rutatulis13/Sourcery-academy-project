import React from "react";
import PropTypes from "prop-types";
import "./DeleteButton.scss";
import Delete from "../../assets/Delete.svg";

const DeleteButton = (props) => {
  return (
    <button className="delete-button" {...props}>
      <img src={Delete} alt="" />
    </button>
  );
};

DeleteButton.propTypes = {
  className: PropTypes.any,
  type: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default DeleteButton;
