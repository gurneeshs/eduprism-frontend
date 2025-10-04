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
import FAQ from '../components/FAQ/FAQ'
import Team from '../components/Team/Team'

const Home = () => {
  return (
    <div>
      <Navbar />
        <section id="home">
          <About />
          <WhyUs />
        </section>

        <section id="programs">
          <Programs />
          <Impact />
        </section>


        <section id="process">
          <Process />
          <Methodology />
        </section>

        <section id="testimonial">
          <Testimonials />
          <Platforms />
        </section>


        <section id="team">
          {/* <Team /> */}
          <Team />
        </section>

        <section id="contact">
          <ContactCreative />
          <FAQ/>
        </section>

    </div>
  )
}

export default Home
