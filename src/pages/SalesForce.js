import React from 'react'
import Sales from '../components/SalesPage/Sales';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopFooter from '../components/TopFooter';
const Salesforce = () => {
    return (
        <div>
<Navbar/>
            <Sales
                info="Classroom Traning"
                about="Get the emerging skills of tomorrow with Yodha Global Training Institute" />
            <Sales />
            <TopFooter/>
<Footer/>

           
        </div>
    )
}

export default Salesforce
