import React from 'react'
import Corporate from '../components/CorporateTraning/Corporate'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter'
const Corporates = () => {
  return (
    <div>
    <Navbar/>
    
    <Corporate
    info="Transform Your Work Force"
    about="Learn emerging skills quickly with our corporate training curriculum designed as per your requirements. "
/>
<TopFooter/>
<Footer/>
</div>
  )
}

export default Corporates