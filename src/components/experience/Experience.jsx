/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer{" "}
            </h3>
          </div>

          <div>
            <span className="exp__comp">HCL Tech Canada</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Software Developer <br /> Sep'22 - Currently Working🧑🏻‍💻
              </h3>
              <p className="exp__modal-description">hcl description</p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Web Page Development.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">I create UI Interfaces.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    I create UX Element Interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="exp__content">
          <div>
            <i className="uil uil-arrow exp__icon"></i>
            <h3 className="exp__title">
              Web <br /> Developer
            </h3>
          </div>

          <div>
            <span className="exp__comp">M & T Printing Group Ltd </span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>

              <h3 className="exp__modal-title">
                Web Developer <br /> March'21 - Aug'22
              </h3>
              <p className="exp__modal-description">
                m t description
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    I developed the User Interfaces.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">Web Page Development.</p>
                </li>

                <li className="exp__modal-experience">
                  <li className="uil uil-check-circle exp__modal-icon"></li>
                  <p className="exp__modal-info">
                    Part of the OTP (Operational Transfer Pricing) Team.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
