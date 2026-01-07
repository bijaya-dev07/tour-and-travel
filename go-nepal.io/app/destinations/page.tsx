"use client";

import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import DestinationCart from "../destinationcart/DestinationCart";
import { toursDummyData } from "@/components/assets/assets";
import { assets } from "@/components/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DestinationsPage() {
  const tours = toursDummyData;

  return (
    <main className="bg-[#FFF7EC] min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
          alt="Destinations Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Explore <span className="text-[#21AEC0]">Destinations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto"
          >
            From the soaring peaks of Everest to the jungles of Chitwan, find your perfect adventure.
          </motion.p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCart tour={tour} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
