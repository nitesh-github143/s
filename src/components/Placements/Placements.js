import React from "react";

import topsideImg from "../../assets/1-2.jpg";
import bottomsideImg from "../../assets/career-builder-3.jpg";

const Placements = (prop) => {
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
            <div className="heading">Apply Classroom Knowledge</div>
            <p>
              A placement can be seen as the pinnacle of your
              undergraduate/postgraduate education and give you the chance to
              use the skills you’ve learned with us in a real-world setting.
              It’s a chance to prove the worth of your skills and to show that
              you can perform in the role you’ve been given.
            </p>
            <p>
              We always know that a good placement is never hands-off. From your
              first day, you can feel empowered to make a difference – with the
              support to explore your professional goals.
            </p>
          </div>
          <div className="top-container-img">
            <img src={topsideImg} alt="" />
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container-text">
            <div className="heading">
              We believe in providing a holistic approach to training.
            </div>
            <p>
              Mock interviews are the perfect and right way to remove your fear
              of facing a real interview. We can understand how you will be
              anxious to attend the first interview, and we also know the
              importance of dream job to you.
            </p>
            <p>
              Once you attend the mock interviews with YGTC, you have a chance
              to shine in the competition and get placed in an organization
              referred by us. We help you identify your dream job through our
              extensive industry connect.
            </p>
            <p>
              <b>
                Yodha Global Training Centre’s Distinctive Placement Approach
              </b>
            </p>
            <ul>
              <li>On-demand courses</li>
              <li>Expert Mentors</li>
              <li>Assignments & Projects</li>
              <li>Grooming sessions</li>
              <li>Mock Interviews</li>
              <li>Placement</li>
            </ul>
          </div>

          <div className="bottom-container-img">
            <img className="bottom-img" src={bottomsideImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;
