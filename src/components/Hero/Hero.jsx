import React from "react";
import heroImg1x from "../../assets/img/Hero/hero-img-girl-1x.png";
import heroImg2x from "../../assets/img/Hero/hero-img-girl-2x.png";
import { HeroSvg } from "../../assets/svg/HeroSvg/HeroSvg";
import "./hero.scss";

export const Hero = () => {
  return (
    <section className="hero-section container">
      <div className="hero-title-container">
        <h1 className="hero-title">
          Unlock your potential with the best<span className="hero-title-accent"> language </span>tutors
        </h1>
        <p className="hero-text">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button className="hero-btn">Get started</button>
      </div>

      <div className="hero-img-container">
        <picture>
          <source srcSet={`${heroImg1x} 1x, ${heroImg2x} 2x`} />
          <img src={`${heroImg1x}`} alt="girl" className="hero-img-girl" />
          <HeroSvg />
        </picture>
      </div>
    </section>
  );
};
