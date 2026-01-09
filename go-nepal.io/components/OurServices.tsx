"use client";

import React from "react";
import { 
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
    icon: <Globe2 className="w-8 h-8 text-amber-600" />,
    title: "Custom Tour Packages",
    description: "Tailor-made itineraries to suit your preferences, whether you seek adventure, culture, or relaxation.",
  },
  {
    icon: <Hotel className="w-8 h-8 text-amber-600" />,
    title: "Hotel Booking",
    description: "From luxury resorts to cozy teahouses, we secure the best accommodations for your comfort.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-600" />,
    title: "Expert Trekking Guides",
    description: "Navigate the Himalayas safely with our certified, experienced, and English-speaking local guides.",
  },
  {
    icon: <Plane className="w-8 h-8 text-amber-600" />,
    title: "Flight Reservations",
    description: "Hassle-free booking for international arrivals and domestic mountain flights to Lukla and beyond.",
  },
  {
    icon: <Car className="w-8 h-8 text-amber-600" />,
    title: "Private Transport",
    description: "Comfortable and reliable vehicle rentals with experienced drivers for all terrain types.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-amber-600" />,
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
    <section className="py-24 bg-linear-to-b from-amber-50/50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
             <div className="h-px w-8 bg-amber-400" />
             <Compass className="w-5 h-5 text-amber-600" />
             <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">Our Expertise</span>
             <div className="h-px w-8 bg-amber-400" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Experience Nepal with <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">Premium Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We handle the logistics so you can focus on the journey. 
            Enjoy seamless travel experiences crafted by local experts who know the Himalayas best.
          </motion.p>
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
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-3xl p-8 shadow-xs hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-300 border border-amber-100/50"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  {/* Decorative background icon */}
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-24 h-24 text-amber-900" })}
              </div>

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-500 transition-colors duration-300">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" })}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
