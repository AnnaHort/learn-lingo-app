import React, { useState } from "react";
import "./authModal.scss";
import { CloseSvg } from "../../../assets/svg/CloseSvg/CloseSvg";
import ReactDOM from "react-dom";
import { ClosePassSvg } from "../../../assets/svg/ClosePassSvg/ClosePassSvg";

export const LoginModal = ({ open, onClose }) => {
  const [viewPass, setViewPass] = useState(false);

  const handleClick = () => {
    setViewPass((prev) => !prev);
  };

  const handleModalClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal-background" onClick={handleModalClose}>
      <div className="modal-container">
  
          <CloseSvg onClick={onClose}/>
   
        <h2 className="modal-title">Log In</h2>
        <p className="modal-text">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form action="" className="modal-form">
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
            Log In
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};
