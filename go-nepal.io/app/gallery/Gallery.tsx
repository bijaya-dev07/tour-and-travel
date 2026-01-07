"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/components/assets/assets";
import { motion, Variants } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: assets.destination1,
    alt: "Everest Base Camp - The roof of the world",
    category: "Adventure",
    className: "md:col-span-2 md:row-span-2 h-64 md:h-full",
  },
  {
    id: 2,
    src: assets.destination2,
    alt: "Cultural Heritage in Kathmandu",
    category: "Culture",
    className: "md:col-span-1 md:row-span-2 h-64 md:h-full",
  },
  {
    id: 3,
    src: assets.destination3,
    alt: "Serene Phewa Lake",
    category: "Relaxation",
    className: "md:col-span-1 md:row-span-1 h-64 md:h-72",
  },
  {
    id: 4,
    src: assets.destination4,
    alt: "Chitwan Wildlife",
    category: "Wildlife",
    className: "md:col-span-1 md:row-span-1 h-64 md:h-72",
  },
  {
    id: 5,
    src: assets.hero,
    alt: "Majestic Himalayas",
    category: "Nature",
    className: "md:col-span-4 md:row-span-1 h-64 md:h-80",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  },
};

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-amber-600">Gallery</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Immerse yourself in the breathtaking landscapes and vibrant culture of Nepal.
            Every corner tells a story waiting to be explored.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(100px,auto)]"
        >
          {galleryItems.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className={`relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-white uppercase bg-amber-600 rounded-full">
                  {image.category}
                </span>
                <p className="text-white font-medium text-lg text-shadow-sm">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
