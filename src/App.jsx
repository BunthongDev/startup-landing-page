import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Service from './components/Service'
import CallToAction from './components/CallToAction'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import TeamSection from './components/TeamSection'
import TrustBy from './components/TrustBy'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <Testimonials />
      <Stats />
      <CallToAction />
      <TeamSection/>
      <Blog />
      <TrustBy/>
      <FAQ/>
      <Footer/>



    </div>
  )
}
