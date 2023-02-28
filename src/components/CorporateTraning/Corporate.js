import React from "react";
import "./Corporate.css";
import Cards from "./Cards";

import topsideImg from "../../assets/1-2.jpg";

const Corporate = (prop) => {
  return (
    <>
      <div className="banner banner banner-img-3">
        <div className="banner-title">{prop.info}</div>
        <p className="banner-details">
          <i>{prop.about}</i>{" "}
        </p>
        <button className="btn">Contact us Today</button>
      </div>

      <div className="detail-container">
        <div className="top-container">
          <div className="top-container-text">
            <div className="heading">LEARN FROM THE EXPERT</div>
            <p>
              Do you benefit from learning in a traditional classroom training
              environment? Our experienced staff will guide you through your
              course and help you sky-rocket your career.
            </p>
            <p>
              One of YGTC’s greatest strengths is our trainers, who consistently
              deliver a best-practice learning experience, sharing their
              knowledge gained from many years working on real-time projects.
            </p>
          </div>
          <div className="top-container-img">
            <img src={topsideImg} alt="" />
          </div>
        </div>
        <div className="cards-container">
          <div>
            <div className="heading">OUR PRIMARY USP</div>
            <p className="text-grey">
              Every course is designed, developed, monitored and managed by our
              expert team, comprising of industry stalwarts, thought leaders and
              corporate honchos.
            </p>
            <p className="text-grey">
              So, train your team members on certifications that are globally
              recognized or upskill them on new age, most sought after
              technology concepts.
            </p>
          </div>
        </div>

        <Cards />

        <div className="career-bottom">
          <div className="red-quote">
            <em>
              “People bring their whole self to work and they take their whole
              self-home every day."
            </em>
          </div>

          <div className="black-quote">– Jennifer Yi Boyer, ACT</div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
