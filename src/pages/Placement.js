import React from 'react'
import Placements from '../components/Placements/Placements'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter'
const Placement = () => {
  return (
    <div>
    <Navbar/>
       <Placements
                info="Yodha Global Training Center Placements"
                about="Our placement support works with the noble intention of giving 100% placement. We believe in the uniqueness of each student and consider our mission to tap their talent & skills."
            />
            <TopFooter/>
            <Footer/>
    </div>
  )
}

export default Placement