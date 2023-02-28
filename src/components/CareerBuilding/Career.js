import React from "react";
import "./Career.css";

import topsideImg from "../../assets/1-2.jpg";
import bottomsideImg from "../../assets/career-builder-3.jpg";

const Banner = (prop) => {
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
        <div className="bottom-container">
          <div className="bottom-container-text">
            <div className="heading">
              YGTC’s Career Program help you pinpoint your career, plan your
              career and enjoy your career!
            </div>
            <p>
              Career Building Program is designed for students, who are looking
              for a dream job. Students receive expert training and adequate
              exposure to industry trends so that they transition into real-time
              with ease. Students are provided with the opportunity to work with
              our experienced technical staff and gain hands-on experience on
              the real-time projects.
            </p>
            <ul>
              <li>
                We build an evolving environment, where the students can learn
                technical aspects to excel in a real-time environment.
              </li>
              <li>
                We boost the student’s confidence through placement assistance.
                Our system is very effective.
              </li>
            </ul>
            <p>
              Yodha Global Training Center provides placement assistance for the
              following career opportunities:
            </p>
            <ul>
              <li>Software Development</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>App Development, and</li>
              <li>QA Testing</li>
            </ul>
            <div className="note">
              Every part of the classroom has been specially designed to enhance
              your studies and help you reach your dream goals.
            </div>
          </div>

          <div className="bottom-container-img">
            <img className="bottom-img" src={bottomsideImg} alt="" />
          </div>
        </div>
        <div className="career-bottom">
          <div className="red-quote">
            <em>
              Our Career Building Program is focused on building great leaders –
              from Leading Self, to Leading Teams, to Leading Leaders.
            </em>
          </div>

          <div className="black-quote">
            Ready to advance your career, learn something new, or expand your
            existing skillset?
          </div>
          <button className="btn">Know more information</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
