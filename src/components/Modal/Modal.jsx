import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";

const Modal = (props) => {
  let modalRef = useRef();

  useEffect(() => {
    let handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        props.setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    let handleKeyboardClick = (e) => {
      if (e.keyCode === 27) {
        props.setShowModal(false);
      }
      if (e.keyCode === 13) {
        props.setShowModal(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyboardClick);
    };
  });

  return (
    <>
      <div className="modal"></div>
      <div ref={modalRef} className="modal__body">
        {/* <button onClick={props.updateModalState}>Hide Me</button> */}
        {props.children}
      </div>
    </>
  );
};

Modal.propTypes = {
  updateModalState: PropTypes.any,
  children: PropTypes.node,
  setShowModal: PropTypes.func,
};

export default Modal;
