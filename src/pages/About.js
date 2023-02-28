import React from 'react'
import Banner from '../components/CareerBuilding/Career'
import four from '../assets/4.jpeg'
import { color, margin } from '@mui/system'
import { Button } from '@mui/material'
import TopFooter from '../components/TopFooter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const About = () => {
  return (
    <div>
    <Navbar/>
   <div className="banner career-banner-img margi">
        <div className="banner-title">About Us</div>
        <p className="banner-details">{`Home ${'>'} About Us`}</p>
       
      </div>
      <div className="top-container margi">
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
            <img src={four} alt="" />
          </div>
        </div>
        <div className="top-container black ">
        <div className="top-container-img">
            <img src={four} alt="" />
          </div>
          <div className="top-container-text">
            <div className="heading">OUR PHILOSOPY</div>
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
       
        </div>
        <div className="top-container margi">
          <div className="top-container-text">
            <div className="heading" style={{color:'black',fontFamily:'Jost'}}>Vision And Mission</div>
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
            <img src={four} alt="" />
          </div>
        </div>
        <div className="joinfor margir">
          <h5>Join YGTC Today For Better Tomorrow</h5>
          <p>There are three Kind of people in the World</p>
          <ul>
            <li>People who make it happen,</li>
            <li>People who watch things happen, and</li>
            <li>People who wonder what happened.” ~ Tommy Lasorda</li>
          </ul>
          <p>We at Yodha Global Training Center firmly believe in making things happen. We are a “Budding and dynamic” team bubbling with energy, enthusiasm, and a go-getter attitude to make our student’s dreams come true at any cost. We leave no stone unturned to connect recruitment partners for student career opportunities across the globe.</p>
          <div style={{textAlign:'center'}}>
          <Button
                  variant="contained"
                  sx={{
                    background: "black",
                    padding: "15px 20px",
                    fontFamily: "Jost",
                    width:'20%',
                    color:'white',
                    margin:'20px',
                    
                  }}
                >
             Get expertise with expert
                </Button>
                </div>
        </div>
     <TopFooter/>
     <Footer/>
    </div>
  )
}

export default About