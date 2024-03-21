import React, { useState } from "react";
import "./loginModal.scss";
import { CloseSvg } from "../../assets/svg/CloseSvg/CloseSvg";
import ReactDOM from "react-dom";
import { ClosePassSvg } from "../../assets/svg/ClosePassSvg/ClosePassSvg";

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
    <div className="login-modal-background" onClick={handleModalClose}>
      <div className="login-modal-container">
  
          <CloseSvg onClick={onClose}/>
   
        <h2 className="login-modal-title">Log In</h2>
        <p className="login-modal-text">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form action="" className="login-modal-form">
          <input
            type="text"
            className="login-modal-form-input"
            placeholder="Email"
          />
          <div className="login-modal-pass-container">
            <input
              type={viewPass ? "text" : "password"}
              className="login-modal-form-input login-modal-form-input__pass"
              placeholder="Password"
            />
            <ClosePassSvg onClick={handleClick} />
          </div>

          <button type="submit" className="login-modal-form-btn">
            Log In
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-portal")
  );
};
