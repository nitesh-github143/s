import React from "react";
import "./OnlineTraning.css";
import StarCards from "./StarCards";

import topsideImg from "../../assets/1-2.jpg";
import bottomsideImg from "../../assets/career-builder-3.jpg";

const OnlineTraning = (prop) => {
  return (
    <>
      <div className="banner career-banner-img">
        <div className="banner-title">{prop.info}</div>
        <p className="banner-details">{prop.about}</p>
        <button className="btn">Contact us Today</button>
      </div>

      <div className="detail-container">
        <div className="top-container">
          <div className="top-container-text">
            <div className="heading">
              We aim to empower our students through knowledge.
            </div>
            <p>
              From finding and booking your course through to attending and
              completing it, our entire online Classroom experience has been
              designed to be as efficient, engaging and effective as a
              traditional face-to-face option. Together with our expert staff,
              we’ve rebuilt our most popular courses, optimizing them for a live
              and connected environment.
            </p>
            <p>
              Our Online training option also offers significantly more
              flexibility – allowing you to complete your training at a time and
              place that is most convenient for you. This eliminates unnecessary
              travel time and costs. All you need is a device (Mobile or laptop)
              and an internet connection. Hold on! Another most important thing
              you need is CURIOSITY & INTRESET TO LEARN.
            </p>
          </div>

          <div className="top-container-img">
            <img src={topsideImg} alt="" />
          </div>
        </div>
        <div>
          <br />
          <StarCards />
          <br />
        </div>
        <div className="bottom-container">
          <div className="bottom-container-text">
            <div className="heading">
              Yodha Global Training Center Unique Approach for Online Training
            </div>
            <p>
              Our online training enables you to build your knowledge and skills
              at a time and place convenient for you. Each session uses
              interactive exercises, video, and quizzes to ensure you have an
              engaging experience that is memorable.
            </p>
            <p>
              You just need to choose how you would like to attend, session to
              session Whether in person or live online, your experiences can be
              the same with our online training.
            </p>
            <p>
              Learn through the same expert trainer, alongside the same
              classmates, and grow with the same content experience regardless
              of your location
            </p>
          </div>

          <div className="bottom-container-img">
            <img className="bottom-img" src={bottomsideImg} alt="" />
          </div>
        </div>
        <div className="career-bottom">
          <div className="red-quote">
            <em>
              “People bring their whole self to work and they take their whole
              self-home every day."
            </em>
          </div>

          <div className="black-quote" style={{ fontSize: "20px" }}>
            – Jennifer Yi Boyer, ACT
          </div>
          <button className="btn">Know more information</button>
        </div>
      </div>
    </>
  );
};

export default OnlineTraning;
