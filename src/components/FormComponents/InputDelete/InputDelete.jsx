import React from "react";
import PropTypes from "prop-types";
import "./InputDelete.scss";
import Delete from "../../../assets/Delete.svg";

const InputDelete = (props) => {
  return (
    <button className="input-delete" {...props}>
      <img src={Delete} alt="" />
    </button>
  );
};

InputDelete.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default InputDelete;
