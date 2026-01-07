"use client";

import React from "react";
import Image from "next/image";
import { exclusiveOffers } from "@/components/assets/assets";
import { Button } from "@/components/ui/button";
import { Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function ExclusiveOffers() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4A261]/10 text-[#F4A261] text-sm font-semibold mb-4 border border-[#F4A261]/20">
              <Tag className="w-4 h-4" /> Limited Time Deals
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-[#1F2933] mb-4">
             Exclusive <span className="text-[#F4A261]">Deals</span> & Offers
           </h2>
           <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
             Limited time packages at unbeatable prices. Grab them before they expire!
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exclusiveOffers.map((offer, index) => (
             <motion.div
               key={offer._id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-4 right-4 bg-[#F4A261] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md z-10">
                     <Tag className="w-3 h-3" /> {offer.priceOff}% OFF
                  </div>
                </div>
                
                <div className="p-6 bg-white relative">
                   {/* Floating Date Badge */}
                   <div className="absolute -top-5 left-6 px-4 py-1.5 bg-[#21AEC0] text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1 border-2 border-white">
                      <Clock className="w-3 h-3" /> Valid till {offer.expiryDate}
                   </div>

                   <div className="mt-2">
                     <h3 className="text-xl font-bold text-[#1F2933] mb-2 group-hover:text-[#21AEC0] transition-colors">{offer.title}</h3>
                     <p className="text-[#6B7280] mb-6 text-sm leading-relaxed">{offer.description}</p>
                   </div>
                   
                   <Button className="w-full bg-[#1F2933] hover:bg-[#21AEC0] text-white font-semibold transition-colors h-12 rounded-xl">
                     Claim Offer
                   </Button>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
