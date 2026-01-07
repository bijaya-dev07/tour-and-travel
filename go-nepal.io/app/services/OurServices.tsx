"use client";

import React from "react";
import { 
  Map, 
  Hotel, 
  Users, 
  Plane, 
  Car, 
  ShieldCheck, 
  Globe2,
  Compass
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: <Globe2 className="w-10 h-10 text-[#F4A261]" />,
    title: "Custom Tour Packages",
    description: "Tailor-made itineraries to suit your preferences, whether you seek adventure, culture, or relaxation.",
  },
  {
    icon: <Hotel className="w-10 h-10 text-[#F4A261]" />,
    title: "Hotel Booking",
    description: "From luxury resorts to cozy teahouses, we secure the best accommodations for your comfort.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#F4A261]" />,
    title: "Expert Trekking Guides",
    description: "Navigate the Himalayas safely with our certified, experienced, and English-speaking local guides.",
  },
  {
    icon: <Plane className="w-10 h-10 text-[#F4A261]" />,
    title: "Flight Reservations",
    description: "Hassle-free booking for international arrivals and domestic mountain flights to Lukla and beyond.",
  },
  {
    icon: <Car className="w-10 h-10 text-[#F4A261]" />,
    title: "Private Transport",
    description: "Comfortable and reliable vehicle rentals with experienced drivers for all terrain types.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#F4A261]" />,
    title: "Travel Insurance Support",
    description: "Guidance on necessary permits and insurance requirements for high-altitude trekking.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

export default function OurServices() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#F4A261]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
             <Compass className="w-5 h-5 text-[#F4A261]" />
             <span className="text-[#F4A261] font-semibold tracking-wider uppercase text-sm">What We Offer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-6">
            Experience Nepal with <span className="text-[#F4A261]">Premium Services</span>
          </h2>
          <p className="text-lg text-[#6B7280]">
            We handle the logistics so you can focus on the journey. 
            Enjoy seamless travel experiences crafted by local experts.
          </p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-[#F4A261]/10 rounded-xl w-fit group-hover:bg-[#F4A261]/20 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2933] mb-3 group-hover:text-[#F4A261] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
