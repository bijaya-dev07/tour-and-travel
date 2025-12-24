import React from 'react'
import AboutPage from './about/page'
import Navbar from './Navbar/navbar'
import HeroSection from './hero/Hero'

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutPage />
    </div>
  )
}

export default page