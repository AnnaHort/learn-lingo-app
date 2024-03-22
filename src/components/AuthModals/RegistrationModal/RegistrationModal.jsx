import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CloseSvg } from "../../../assets/svg/CloseSvg/CloseSvg";
import { ClosePassSvg } from "../../../assets/svg/ClosePassSvg/ClosePassSvg";

export const RegistrationModal = ({ open, onClose }) => {
  const [viewPass, setViewPass] = useState(false);

  const handleClick = () => {
    setViewPass((prev) => !prev);
  };

  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-background" onClick={handleModalClose}>
      <div className="modal-container">
        <CloseSvg onClick={onClose} />

        <h2 className="modal-title">Registration</h2>
        <p className="modal-text">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <form action="" className="modal-form">
          <input
            type="text"
            className="modal-form-input"
            placeholder="Name"
          />
          <input
            type="text"
            className="modal-form-input"
            placeholder="Email"
          />
          <div className="modal-pass-container">
            <input
              type={viewPass ? "text" : "password"}
              className="modal-form-input modal-form-input__pass"
              placeholder="Password"
            />
            <ClosePassSvg onClick={handleClick} />
          </div>

          <button type="submit" className="modal-form-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};
