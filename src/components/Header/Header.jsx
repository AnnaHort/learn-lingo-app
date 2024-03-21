import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.scss";
import { LogoSvg } from "../../assets/svg/logoSvg/LogoSvg";
import { LoginSvg } from "../../assets/svg/loginSvg/LoginSvg";

export const Header = () => {
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
            <button className="header-login-btn" type="button">
              <LoginSvg />
              <span>Log in</span>
            </button>

            <button className="header-registration-btn" type="button">
              Registration
            </button>
          </div>
        </section>
      </header>
      <Outlet />
    </>
  );
};
