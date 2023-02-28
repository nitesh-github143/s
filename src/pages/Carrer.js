import React from 'react'
import Career from '../components/CareerBuilding/Career'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter'
const Carrer = () => {
  return (
    <div>
<Navbar/>
    <Career
    info="Career Building Program"
    about="Get Expert Solution for Professional IT Career in Software industry." />
    <TopFooter/>
    <Footer/>
    </div>
  )
}

export default Carrer