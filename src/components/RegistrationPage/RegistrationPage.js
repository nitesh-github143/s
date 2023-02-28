import React from 'react'
import './RegistrationPage.css'


const RegistrationPage = () => {
    return (
        <div className='registration-container registration-img'>
            <div className="registration-text">
                <div><h3 className='register-heading'>Register Your Intrest</h3></div>
                <div>
                    <p>If you’ve found the course of your dreams here at Yodha Global Training Center, then REGISTER your interest by filling out the form below!</p>
                    <p>Make sure all items marked with an asterisk are filled out completely, they are required. Your e-mail queries will be responded to in a timely manner.</p>
                    <p>Hurry up, seats filling fast for the next new batch!</p>
                </div>
            </div>
            <div className="registration-form">

                <div className="name">
                    <input type="text" placeholder='First Name' name="firstname" />
                    <input type="text" placeholder='Last Name' name="lastname" />
                </div>

                <div className='college'>
                    <input type="text" placeholder='College Name' name="College" />
                </div>

                <div className='contact-detail'>
                    <input type="email" placeholder='Email' name="Email" />
                    <input type="" placeholder='Phone Number' name="Number" />
                </div>

                <div className='name'>
                    <input type="name" placeholder='Salesforce' name="fname" />
                    <input type="text" placeholder='How do you Know about this program?' name="fname" />
                </div>

                <div>
                    <textarea name="message" placeholder='Your Message' id="" cols="10" rows="4"></textarea>
                </div>

                <div>
                    <button className='btn r-btn'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
