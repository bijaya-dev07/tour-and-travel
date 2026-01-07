"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/components/assets/assets";
import { Send, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-2xl">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            
            {/* Left Content Side */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-16 lg:p-20 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-md border border-amber-500/30">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <span className="text-amber-500 font-semibold tracking-wide uppercase text-sm">
                    Keep Trekking With Us
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Get <span className="text-amber-500">Exclusive</span> Travel Updates
                </h2>
                
                <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-md">
                  Join our community of explorers. Receive insider tips, new trekking notifications, and special discounts directly to your inbox.
                </p>

                <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-14 pl-6 pr-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <Button 
                    className="h-14 px-8 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg shadow-lg hover:shadow-amber-600/25 transition-all duration-300 flex items-center gap-2 group"
                  >
                    Subscribe
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <p className="mt-6 text-xs text-slate-500">
                  By subscribing, you agree to our Privacy Policy. No spam, ever.
                </p>
              </motion.div>
            </div>

            {/* Right Image Side */}
            <div className="relative h-64 lg:h-full order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
                alt="Beautiful Nepal Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/40 to-transparent lg:bg-linear-to-l lg:via-slate-900/20" />
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
