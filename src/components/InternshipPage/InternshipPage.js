import React from 'react'
import './InternshipPage.css'

import checkmark from "../../assets/checkmark.svg";
import topsideImg from "../../assets/1-2.jpg";
import bottomsideImg from "../../assets/2-4.jpg";
import couple from '../../assets/1-5.jpg'

const InternshipPage = (prop) => {
    return (
        <div>
            <div className="banner banner-internship-img">
                <div className="banner-title">{prop.info}</div>
                <p className="banner-details">{prop.about}</p>
                <button className="btn">START YOUR JOURNEY HERE</button>
            </div>

            <div className="detail-container">
                <div className="top-container">
                    <div className="top-container-text">
                        <div className="heading">We groom talent and prepare them for best jobs!</div>
                        <p>
                            Aspiring graduates are the future of Information Technology. Yodha Global Training Center believes in providing equal opportunity to everyone, be it a fresher or an experienced one. We recognize the talent and nurtures them through our Internship Program.
                        </p>
                        <p>
                            Yodha Global Training Center Internship Program does not include classroom training practice rather it facilitates the students/jobseekers to get a real-time learning environment. They can get an opportunity to work on updated technology and live projects to enrich their professional capabilities, develop their critical skills and enhance their overall personality.
                        </p>
                        <p className='internship-detail'><i> Our internship program includes:</i></p>
                        <ul className='defaultlist'>
                            <li>Live Sessions</li>
                            <li>Real-Time Projects</li>
                            <li>Industry Mentors</li>
                        </ul>
                    </div>
                    <div className="top-container-img">
                        <img src={topsideImg} alt="" />
                    </div>
                </div>

                <div className='middle-container'>
                    <div className="top-container-text">
                        <div className="heading">Discover a Professional World full of Opportunities!</div>
                        <p>
                            Right skills, right experience, and right opportunities are the three main prerequisites to get on the road of success that ultimately leads to a path of constant learning. Yodha Global Training Center offers an opportunity to jobseekers to learn through its internship program.
                        </p>
                    </div>

                    <div className="top-container-text">
                        <div className="heading">Industry projects</div>
                        <p>
                            Yodha Global Training Center offers various opportunities for students to work directly with company on Live projects. Industry projects give you insights about latest trends in the corporate world and help them become competitive and ready for the real world.
                        </p>
                    </div>

                    <div className="top-container-text">
                        <div className="heading">Ultimate Step towards your Career Goals</div>
                        <p>
                            Internship @Yodha Global Training Center prepares you to the technology demands of the Future.
                        </p>
                        <p>In fact, Internship Program at YGTC are open to everyone. Those with zeal to learn something new and upgrade themselves can ultimately opt in for the Internship Program @ YGTC</p>
                    </div>

                    <div className="top-container-text">
                        <div className="heading">Evaluation and Placement!</div>
                        <p>
                            After the completion of Internship Program, the performance of each candidate will be evaluated and the best performers will get an opportunity to work with the company as a full-time employee.
                        </p>
                    </div>

                </div>

                <div className="bottom-container">
                    <div className="bottom-container-text">
                        <div className="heading">
                            Internship Program Benefits
                        </div>
                        <ul className='defaultlist'>
                            <li>Gain Knowledge with Live Projects</li>
                            <li>Hands-on real-time experience</li>
                            <li>Learn skills under the supervision of industry experts</li>
                            <li>Increases Productivity and job satisfaction </li>
                            <li>Highly-valued Certificates</li>
                            <li>Emphasis on useful practical skills</li>
                        </ul>
                    </div>
                    <div className="bottom-container-img">
                        <img className="bottom-img" src={couple} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default InternshipPage
