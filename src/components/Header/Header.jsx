import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.scss";
import { LogoSvg } from "../../assets/svg/logoSvg/LogoSvg";
import { LoginSvg } from "../../assets/svg/loginSvg/LoginSvg";

export const Header = () => {
  return (
    <section className="header-section">
      <div className="header-logo-container">
        <LogoSvg />
        <h2>LearnLingo</h2>
      </div>

      <nav className="header-navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teachers">Teachers</NavLink>
      </nav>

      <div className="header-registration-container">
        <LoginSvg />
        <button className="header-login-btn" type="button">
          Log in
        </button>
        <button className="header-registration-btn" type="button">
          Registration
        </button>
      </div>

      <Outlet />
    </section>
  );
};
