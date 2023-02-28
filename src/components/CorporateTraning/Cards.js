import React from "react";
import "./Cards.css";
import reloadimg from "../../assets/reload.png";

const Cards = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={reloadimg} alt="" className="reload-icon" />
          <p>
            <b>On-Demand Courses</b>
          </p>
          <p>
            We offer courses such as: Software Development, Web Development,
            Mobile Development, App Development, and QA Testing.
          </p>
        </div>
        <div className="card">
          <img src={reloadimg} alt="" className="reload-icon" />
          <p>
            <b>On-Demand Courses</b>
          </p>
          <p>
            We offer courses such as: Software Development, Web Development,
            Mobile Development, App Development, and QA Testing.
          </p>
        </div>
        <div className="card">
          <img src={reloadimg} alt="" className="reload-icon" />
          <p>
            <b>On-Demand Courses</b>
          </p>
          <p>
            We offer courses such as: Software Development, Web Development,
            Mobile Development, App Development, and QA Testing.
          </p>
        </div>
        <div className="card">
          <img src={reloadimg} alt="" className="reload-icon" />
          <p>
            <b>On-Demand Courses</b>
          </p>
          <p>
            We offer courses such as: Software Development, Web Development,
            Mobile Development, App Development, and QA Testing.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
