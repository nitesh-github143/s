import React from 'react'

import Home from './pages/Home';
import Salesforce from './pages/SalesForce'
import Carrer from './pages/Carrer'
import Corporates from './pages/Corporate'
import OnlineTraining from './pages/OnlineTraining'
import Placement from './pages/Placement'
import Courses from './pages/Courses'
import Internship from './pages/Internship'
import Contact from './pages/Contact'
import RegisterNow from './pages/RegisterNow'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sales" element={<Salesforce />} exact />
        <Route path="/corporal" element={<Corporates />} exact />
        <Route path="/online" element={<OnlineTraining />} exact />
        <Route path="/place" element={<Placement />} exact />
        <Route path="/carrer" element={<Carrer />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/courses' element={<Courses />} exact />
        <Route path='/internship' element={<Internship />} exact />
        <Route path='/contactus' element={<Contact />} exact />
        <Route path='/registernow' element={<RegisterNow />} exact />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
