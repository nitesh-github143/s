import React from 'react'
import Navbar from '../components/Navbar'
import InternshipPage from '../components/InternshipPage/InternshipPage'
import TopFooter from '../components/TopFooter'
import Footer from '../components/Footer'

const Internship = () => {
  return (
    <div>
      <Navbar />
      <InternshipPage
        info="Internship Program"
        about="Discover how you can apply your talent and skills to harness powerful change with our career-building internship program. "
      />
      <TopFooter />
      <Footer />

    </div>
  )
}

export default Internship