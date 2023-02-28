import React from "react";
import "./Sales.css";

import checkmark from "../../assets/checkmark.svg";
import topsideImg from "../../assets/1-2.jpg";
import bottomsideImg from "../../assets/2-4.jpg";

const Banner = (prop) => {
  return (
    <>
      <div className="banner banner-img">
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
            <div className="note">
              Every part of the classroom has been specially designed to enhance
              your studies and help you reach your dream goals.
            </div>
          </div>
          <div className="top-container-img">
            <img src={topsideImg} alt="" />
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container-text">
            <div className="heading">
              Enhance your skills and accelerate your career
            </div>
            <p>
              You’ll follow a set timetable and attend convenient weekday,
              weekend or evening sessions to progress your course and help you
              get prepared for your interviews/career.
            </p>
            <p>
              For a practical approach to learning, you can try our unrivalled
              portfolio of classroom training courses. Delivered by subject
              experts, our courses cover a wide range of topics including
              Software Development, Web Development, Mobile Development, App
              Development, and QA Testing.
            </p>
          </div>
          <div className="bottom-container-img">
            <img className="bottom-img" src={bottomsideImg} alt="" />
          </div>
        </div>
      </div>

      <div className="benefits-container">
        <h2 className="benefits-heading">
          The benefits of attending our classroom training
        </h2>
        <div className="benefits-inner-container">
          <div className="check-icon">
            <img className="checkmark" src={checkmark} alt="" />
          </div>
          <div className="benefits-details">
            <h3>Group Interaction Enhances Learning</h3>
            <p>
              Our classroom training sessions provide the opportunity for
              face-to-face interaction both with the trainer and with other
              attendees, and benefit those who learn best in a more social
              atmosphere.{" "}
            </p>
          </div>
        </div>
        <div className="benefits-inner-container">
          <div className="check-icon">
            <img className="checkmark" src={checkmark} alt="" />
          </div>
          <div className="benefits-details">
            <h3>Interact with fellow students </h3>
            <p>
              Studying in a class room means you can network with fellow
              like-minded professionals, exchange advice, and expand your
              network.{" "}
            </p>
          </div>
        </div>
        <div className="benefits-inner-container">
          <div className="check-icon">
            <img className="checkmark" src={checkmark} alt="" />
          </div>
          <div className="benefits-details">
            <h3>Focused study </h3>
            <p>
              Our classroom-based courses allow you to study in a dedicated
              training center, free from workplace distractions.{" "}
            </p>
          </div>
        </div>
        <div className="benefits-inner-container">
          <div className="check-icon">
            <img className="checkmark" src={checkmark} alt="" />
          </div>
          <div className="benefits-details">
            <h3>First-class facilities </h3>
            <p>
              Our class room training venue have parking, Wi-Fi, and good
              transportation facilities.{" "}
            </p>
          </div>
        </div>
        <div className="benefits-inner-container">
          <div className="check-icon">
            <img className="checkmark" src={checkmark} alt="" />
          </div>
          <div className="benefits-details">
            <h3>Face-to-face support from experienced tutors </h3>
            <p>
              Our expert trainers are on-hand to answer any questions you have.
              They will help you to interpret and understand the course content
              and prepare you for the interviews.{" "}
            </p>
          </div>
        </div>
        <div className="note-2">Learn to learn efficiently</div>

        <div className="benefits-details teaching">
          <h2 className=" benefits-heading">Our Teaching Methodology!</h2>
          <p>
            We take pride in our unique centric teaching methodology and lay
            special emphasis on the practical implementation of the
            instructional classroom training given to the students through.
          </p>
          <p>
            At Yodha Global Training Center Classroom Training, we provide best
            practices using a mix of discussion, presentations, and hands-on
            labs.
          </p>
          <div className="note">
            Learn with expert instructors who teach you in-demand skills and
            best practices.
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
