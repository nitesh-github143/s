import React from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';
const TopBar = () => {
  return (

    <header class="topbar ">
      <div class="topbar__left">
        <p><PhoneEnabledIcon fontSize="small" /> <span>+91 8058457889</span></p>
        <p><EmailIcon fontSize="small" /> <span>abcd@gmail.com</span></p>
      </div>
      <div class="topbar__right">
        <p class='social-media-icon fb'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><FacebookIcon fontSize="small" /></Icon></p>
        <p class='social-media-icon tweet' ><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><TwitterIcon fontSize="small" /></Icon></p>
        <p class='social-media-icon linked'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><LinkedInIcon fontSize="small" /></Icon></p>
        <p class='social-media-icon insta'><Icon sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><InstagramIcon fontSize="small" /></Icon></p>
      </div>
    </header>

  )
}

export default TopBar