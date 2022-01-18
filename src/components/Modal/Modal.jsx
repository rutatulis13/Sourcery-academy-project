import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = (props) => {
  let modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        props.handleModalClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    const handleKeyboardClick = (e) => {
      if (e.keyCode === 27) {
        props.handleModalClose();
      }
    };
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyboardClick);
    };
  });

  return (
    <div className="modal">
      <div ref={modalRef} className="modal__body">
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleModalClose: PropTypes.func,
};

export default Modal;
