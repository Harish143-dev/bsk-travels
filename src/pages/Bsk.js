import React from 'react'
import Navbar from '../Component/navbar/Navbar'
import './Bsk.css'
import Home from '../Component/home/Home'
import Buses from '../Component/buses/Buses'
import Services from '../Component/services/Services'
import Packages from '../Component/packages/Packages'
import About from '../Component/aboutUs/About'
import Contact from '../contact/Contact'
import Footer from '../Component/footer/Footer'

const Bsk = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Buses />
      <Services />
      <Packages />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Bsk