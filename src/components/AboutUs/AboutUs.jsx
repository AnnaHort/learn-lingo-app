import React from "react";
import "./aboutUs.scss";

export const AboutUs = () => {
  return (
    <section className="about-us-section container">
      <ul className="about-us-list">
        <li className="about-us-list-el">
          <h3 className="about-us-text-number">32,000 +</h3>
          <p className="about-us-text">Experienced tutors</p>
        </li>
        <li className="about-us-list-el">
          <h3 className="about-us-text-number">300,000 +</h3>
          <p className="about-us-text">5-star tutor reviews</p>
        </li>
        <li className="about-us-list-el">
          <h3 className="about-us-text-number">120 +</h3>
          <p className="about-us-text">Subjects taught</p>
        </li>
        <li className="about-us-list-el">
          <h3 className="about-us-text-number">200 +</h3>
          <p className="about-us-text">Tutor nationalitie</p>
        </li>
      </ul>
    </section>
  );
};
