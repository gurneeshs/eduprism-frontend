import React from 'react'
import About from '../components/Home/About'
import WhyUs from '../components/Home/WhyUs'
import Certification from '../components/Home/Certification'
import Navbar from '../utils/Navbar'
import Programs from '../components/Programs/Programs'
import Impact from '../components/Programs/Impact'
import Process from '../components/Process/Process'
import Methodology from '../components/Process/Methodology'
import Testimonials from '../components/Testimonals/Testimonials'
import Platforms from '../components/Testimonals/Platforms'
import Contact from '../components/Contact/Contact'
import ContactCreative from '../components/Contact/ContactCreative'

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <About />
      <WhyUs />
      <Certification />

      <Programs />
      <Impact />

      <Process />
      <Methodology />

      <Testimonials />
      <Platforms/>

      <ContactCreative />
    </div>
  )
}

export default Home
