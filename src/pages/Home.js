import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import banner from '../assets/Banner.jpeg'
import { Button } from '@mui/material'
import one from '../assets/img1.jpeg'
import two from '../assets/img2.jpeg'
import BasicCard from '../components/Card'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import eight from '../assets/8.png'
import five from '../assets/5.jpeg'
import four from '../assets/4.jpeg'
import nine from '../assets/9.jpeg'
import ten from '../assets/10.jpeg'
import eleven from '../assets/11.png'
import twelve from '../assets/12.png'
import thirteen from '../assets/13.png'
import fourteen from '../assets/14.png'
import fifteen from '../assets/15.png'
import sixteen from '../assets/16.png'
import three from '../assets/3.png'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SimpleAccordion from '../components/Accordian'
import seventeen from '../assets/17.jpeg'
import { fontSize } from '@mui/system'
import StarIcon from '@mui/icons-material/Star';
import TopFooter from '../components/TopFooter'
import Footer from '../components/Footer'

import './Home.css'

const Home = () => {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   imgRef.current.classList.add('zoomed');
  //   setTimeout(() => {
  //     imgRef.current.classList.remove('zoomed');
  //   }, 500);
  // }, []);

  return (
    <div>
      <TopBar />
      <Navbar />
      <div>

        <div className="banner banner-img-home">
          <div className="banner-title-home">#Changers aren't born</div>
          <p className="banner-details-home">They Are Made At <br />HackerBook</p>
          <div className='btn-container'>
            <button className="btn">HackerBook</button>
            <button className="btn-2"> Read More</button>
          </div>
        </div>

        {/* <div className="banners">
          <img src={banner} alt="" className='zoom-out' ref={imgRef} />
        </div>
        <div className="BannerHeadings">
          <p className='bannerHead'>#Changers aren't born</p>
          <p className="BannerHead2">They Are Made At <br></br>HackerBook</p>
          <div className="flexButton">
            <Button
              variant="contained"
              sx={{
                background: "white",
                padding: "15px 30px",
                fontFamily: "Jost",
                color: 'black',
                marginRight: '15px'
              }}
            >
              Read
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#fd4a18",
                padding: "5px 30px",
                fontFamily: "Jost",
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div> */}
      </div>
      <div className="trainin main2 ">
        <div className="textPart">
          <h6>#ABOUT US</h6>
          <h5>Hackerbook Global Training Center Welcomes You To The World Of Skillful Learning</h5>
          <p>Hackerbook Global Training Center is one of the professional training institutes delivering truly unparalleled learning and training experiences to students.</p>
          <Button
            variant="contained"
            sx={{
              background: "#fd4a18",
              padding: "15px 40px",
              fontFamily: "Jost",
            }}
          >
            Read More
          </Button>
        </div>
        <div className="imgPart ">
          <img src={one} alt="" className='one' />
          <img src={two} alt="" className='two' />
        </div>
      </div>
      <div className="cardBox">
        <h6 className='bannerHead' style={{ fontSize: '20px', marginTop: '80px' }}>#THREE GREAT WAYS TO TAKE A COURSE WITH US</h6>
        <h2 classname="BannerHead2" style={{ color: 'white', fontSize: '34px', fontWeight: 600 }}>The Art Of Learning Is The Art Of Discovery</h2>
        <div className="cards">
          <BasicCard img={six} text={'Online Training'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />
          <BasicCard img={seven} text={'Classroom Training'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />
          <BasicCard img={eight} text={'Corporate Training'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />

        </div>
      </div>
      <div className="hasselFree">
        <img className='hassel-img' src={five} alt="" />
        <div className="hassel">
          <h1> We create a hassle-free bridge to employment opportunities</h1>
          <p>Hackerbook Global Training Center students get priority access to exciting employment opportunities from our pool of select employment partners.</p>
        </div>
      </div>
      <div className="whyChoose">
        <div className="whytext">
          <h5>Why Choose Hackerbook?</h5>
          <ul><li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>100% Placement Assurance </span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>State-of-the-art Learning Management Systems </span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>Certified Instructor-Led Training</span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>Comprehensive study material</span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>Recorded Sessions</span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>Affordable Pricing Plans</span></li>
            <li><DoneAllIcon sx={{ color: 'brown', fontSize: '18px' }} /><span>Weekdays & Weekend Classes</span></li>
            <li>
              <Button
                variant="contained"
                sx={{
                  background: "#fd4a18",
                  padding: "18px 40px",
                  fontFamily: "Jost",
                }}
              >
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
        <div>
          <img className='handbook-img' src={four} alt="" />
        </div>
      </div>
      <div className="cardBox" style={{ paddingBottom: '30px' }}>
        <h6 className='bannerHead' style={{ fontSize: '20px', marginTop: '80px', color: 'white' }}>#Our Testimonials</h6>
        <h2 classname="BannerHead2" style={{ color: 'white', fontSize: '34px', fontWeight: 600, color: 'white' }}>Clinets Happy Our IT Solutions.</h2>

        <div className="card-container-home">
          <div className='cardss'>
            <div className="rivew">
              <div className="imgSec">
                <img src={nine} alt="" />
                <div className="textSec">
                  <h5>John Martin</h5>
                  <p style={{ color: 'red' }}>Software Developer</p>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look .</p>
              <div className="stars">
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
              </div>
            </div>
            <div className="rivew">
              <div className="imgSec">
                <img src={ten} alt="" />
                <div className="textSec">
                  <h5>John Martin</h5>
                  <p style={{ color: 'red' }}>Software Developer</p>
                </div>
              </div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look .</p>
              <div className="stars">
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
                <StarIcon sx={{ marginRight: '5px', color: '#FBBF37' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="setApart">
        <h5>What Sets Us Apart From OTHERS?</h5>
        <div className="boxx">
          <BasicCard img={eleven} align={'left'} text={'100% Practical Approach'} para={'We have expert trainers with a strong belief that best friend of a developer is a Keyboard, so as our 100% Practical Approach.'} />
          <BasicCard img={twelve} align={'left'} text={'Limited Batches'} para={'We maintain our batch sizes limited for qualified attention and proper practical time. Limited batches for each session help both trainer as well as trainees to work well on the concepts.'} />
          <BasicCard img={thirteen} align={'left'} text={'Learn From The Best'} para={'When you join Hackerbook Global Training Center, you’ll be taught by leading academics in an environment of innovation and discovery.'} />
          <BasicCard img={fourteen} align={'left'} text={'Hands On Learning'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />
          <BasicCard img={fifteen} align={'left'} text={'100% Placement Assistance'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />
          <BasicCard img={sixteen} align={'left'} text={'Dedicated Support'} para={'We provide online training to help you grow your expertise at your own pace in your chosen area'} />

        </div>
        <h4 style={{ marginTop: '20px', textAlign: 'center', fontSize: '10px!important', fontWeight: 'bold', fontFamily: 'Jost' }}>Success Your Technology. Take the challenge!</h4>
      </div>
      <div className="ensure">
        <h5>We Ensure The Students Make Progress And Have Great Learning Outcomes For Sure.
        </h5>
        <p>We majorly focus on 2 ‘E’s for our aspiring students: Education and Employability

        </p>
        <div className="accordian">
          <img src={three} alt="" />
          <SimpleAccordion />
        </div>
      </div>
      <div className="ready">
        <h5>Are You Ready To Face The Future With Confidence - And With The Emerging Skills To Thrive?
        </h5>
        {/* <Button
          variant="contained"
          sx={{
            background: "#fd4a18",
            padding: "15px 20px",
            fontFamily: "Jost",
            width: '10vw'
          }}
        >
          Contact Us
        </Button> */}
        <button className='btn'>Contact Us</button>
      </div>
      <img src={seventeen} alt="" style={{ width: '100%' }} />
      <TopFooter />
      <Footer />
    </div>
  )
}

export default Home