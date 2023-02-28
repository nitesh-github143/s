import React from 'react'
import twnetytwo from '../assets/22.png'
import logo from '../assets/logos.jpg'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
        {/* <img src={twnetytwo} alt="" style={{width:'100%'}}/> */}
        <div className="oo">
          <img src={logo} alt="" style={
            { width: '40%' }
          } />
          <p className='p'>Yodha Global Training Center is one of the professional training institutes delivering truly unparalleled learning and training experiences to students.</p>
          <div class="topbar__right">
            <p class='social-media-icon fb'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><FacebookIcon fontSize="small" /></Icon></p>
            <p class='social-media-icon tweet' ><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><TwitterIcon fontSize="small" /></Icon></p>
            <p class='social-media-icon linked'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><LinkedInIcon fontSize="small" /></Icon></p>
            <p class='social-media-icon insta'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><InstagramIcon fontSize="small" /></Icon></p>
          </div>
        </div>
        <div className="tw">
          <h4>Our Services
          </h4>
          <ul>
            <li><span>Salesforce Offline Training In Person</span></li>
            <li><span>Corporate Training </span></li>
            <li><span>Online Training </span></li>
            <li><span>Placements</span></li>
            <li><span>Career Build Programs</span></li>
          </ul>
        </div>
        <div className="tw">
          <h4>Usefull Link</h4>
          <ul>
            <li><span>About Us</span></li>
            <li><span>Contact us </span></li>
            <li><span>Internship Program  </span></li>
            <li><span>Registration</span></li>
            <li><span>Privacy Policy</span></li>
          </ul>
        </div>

      </footer>
      <div className="lowerFoot">
        <p>Copyright 2022 Yodha GTC. All Rights Reserved.
        </p>
        <div className="tou">
          <p>Carrer</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer