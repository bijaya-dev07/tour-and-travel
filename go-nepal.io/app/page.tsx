import React from 'react'
import AboutPage from './about/page'
import Navbar from './Navbar/navbar'
import HeroSection from './hero/Hero'
import TopDestination from './topdestination/TopDestination'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TopDestination />
      <AboutPage />
    </div>
  )
}

export default page