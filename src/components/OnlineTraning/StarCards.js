import React from "react";
import "./StarCards.css";
import star from "../../assets/star.png";

const StarCards = () => {
  return (
    <div className="box">
      <div className="heading">Why Choose Our Online Training?</div>
      <br />
      <div className="star-container">
        <div className="star-card">
          <img src={star} alt="" className="reload-icon" />
          <p>
            <b>Interact </b>
          </p>
          <p>
            Our Online training give you the opportunity to interact in
            real-time with our expert trainers, other delegates or even your own
            team members – regardless of location. This mainly helps to ensure
            that your learning experience is consistent and efficient.{" "}
          </p>
        </div>
        <div className="star-card">
          <img src={star} alt="" className="reload-icon" />
          <p>
            <b>Learn </b>
          </p>
          <p>
            Our trainers are specialized to deliver courses virtually and use a
            wide range of expert techniques to help you make the most of your
            learning experience. They can share their real-time and expert
            knowledge, engaging you throughout with group activities and
            insightful discussions.
          </p>
        </div>
        <div className="star-card">
          <img src={star} alt="" className="reload-icon" />
          <p>
            <b>Grow </b>
          </p>
          <p>
            All our online courses are designed to help you reach the next level
            in your career. When you complete your course, you’ll receive a
            recognized digital certificate from YGTC, which highlights your
            course achievement.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarCards;
