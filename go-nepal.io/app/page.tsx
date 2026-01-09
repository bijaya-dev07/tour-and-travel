import React from "react";
import Navbar from "./Navbar/navbar";
import HeroSection from "./hero/Hero";
import TopDestination from "./topdestination/TopDestination";
import ExclusiveOffers from "./exclusive-offers/ExclusiveOffers";
import Gallery from "./gallery/Gallery";
import OurServices from "@/components/OurServices";
import Newsletter from "./newsletter/Newsletter";
import Footer from "./Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <TopDestination />
      <ExclusiveOffers />
      <Gallery />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default page;
