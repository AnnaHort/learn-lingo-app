import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.scss";
import { LogoSvg } from "../../assets/svg/logoSvg/LogoSvg";
import { LoginSvg } from "../../assets/svg/loginSvg/LoginSvg";
import { LoginModal } from "../AuthModals/LoginModal/LoginModal";
import { RegistrationModal } from "../AuthModals/RegistrationModal/RegistrationModal";

export const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const handleClick = () => {
    setOpenLoginModal(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenLoginModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header>
        <section className="header-section container">
          <div className="header-logo-container">
            <LogoSvg />
            <h2 className="header-logo">LearnLingo</h2>
          </div>

          <nav className="header-navigation">
            <NavLink to="/" className="header-navigation-page">
              Home
            </NavLink>
            <NavLink to="/teachers" className="header-navigation-page">
              Teachers
            </NavLink>
          </nav>

          <div className="header-registration-container">
            <button
              className="header-login-btn"
              type="button"
              onClick={handleClick}
            >
              <LoginSvg />
              <span>Log in</span>
            </button>

            <button
              className="header-registration-btn"
              type="button"
              onClick={handleClick}
            >
              Registration
            </button>
          </div>
        </section>
      </header>

      <LoginModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      />
      <RegistrationModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      />

      <Outlet />
    </>
  );
};
