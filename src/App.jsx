import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './utils/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/Home/About'
import WhyUs from './components/Home/WhyUs'
import Programs from './components/Programs/Programs'
import Impact from './components/Programs/Impact'
import Testimonials from './components/Testimonals/Testimonials'
import Platforms from './components/Testimonals/Platforms'
import Process from './components/Process/Process'
import Methodology from './components/Process/Methodology'
import ContactCreative from './components/Contact/ContactCreative'
import FAQ from './components/FAQ/FAQ'
import Team from './components/Team/Team'
import Footer from './utils/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
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


        <Footer />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/AdminLogin' element={<Adminlogin />} />
        <Route path='/User' element={<ProtectedRoute> <User /> </ProtectedRoute>} />
        <Route path='/Edit' element={<ProtectedRoute> <Edit /> </ProtectedRoute>} />
        <Route path='/Vote' element={<ProtectedRoute> <Vote /> </ProtectedRoute>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
