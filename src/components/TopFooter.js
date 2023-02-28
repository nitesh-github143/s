import React from 'react'
import Eighteen from '../assets/18.png'
import ninteen from '../assets/19.png'
import tweenty from '../assets/12.png'
import './TopFooter.css'


const TopFooter = () => {
    return (
        <div className="topFoot">
            <div className="fllex">
                <img src={ninteen} alt="" />
                <div className="hh">
                    <h5>Address</h5>
                    <p>yodha global trainign Center</p>
                </div>
            </div>
            <div className="fllex">
                <img src={tweenty} alt="" />
                <div className="hh">
                    <h5>Call Us On</h5>
                    <p>+91 8088565432</p>
                </div>
            </div>
            <div className="fllex">
                <img src={Eighteen} alt="" />
                <div className="hh">
                    <h5>Email Us</h5>
                    <p>hackerbook@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default TopFooter