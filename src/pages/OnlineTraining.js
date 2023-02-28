import React from 'react'
import OnlineTraning from '../components/OnlineTraning/OnlineTraning'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter'
const OnlineTraining = () => {
  return (
    <div>
    <Navbar/>
       <OnlineTraning
                info="Let's Shape The Future Of Learning"
                about="Courses at Yodha Global Training Center are built to be delivered virtually – offering you real time interaction, flexibility and an engaging learning experience. "
            />
<TopFooter/>
           <Footer/>
    </div>
  )
}

export default OnlineTraining