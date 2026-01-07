"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/components/assets/assets";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF7EC] pt-20 pb-10 text-slate-600 overflow-hidden relative border-t border-slate-100">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#21AEC0]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#21AEC0]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
               <div className="flex items-center gap-2">
                <Image src={assets.logo} alt="Go Nepal Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-2xl font-bold text-slate-900 tracking-tight">Go<span className="text-[#21AEC0]">Nepal</span></span>
               </div>
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Discover the magic of the Himalayas with us. We craft unforgettable journeys that combine adventure, culture, and luxury.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/blog">Travel Blog</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h3 className="text-slate-900 font-bold text-lg mb-6">Popular Destinations</h3>
            <ul className="space-y-4">
              <FooterLink href="/destination/tour_everest_base_camp">Everest Base Camp</FooterLink>
              <FooterLink href="/destination/tour_annapurna_circuit">Annapurna Circuit</FooterLink>
              <FooterLink href="/destination/tour_pokhara_getaway">Pokhara</FooterLink>
              <FooterLink href="/destination/tour_chitwan_safari">Chitwan National Park</FooterLink>
              <FooterLink href="#">Mustang Region</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
             <h3 className="text-slate-900 font-bold text-lg mb-6">Contact Us</h3>
             <ul className="space-y-5">
               <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-[#21AEC0] mt-0.5 shrink-0" />
                 <span>Thamel, Kathmandu 44600,<br />Nepal</span>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-[#21AEC0] shrink-0" />
                 <span>+977 1 4XXXXXX</span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-[#21AEC0] shrink-0" />
                 <span>hello@gonepal.io</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} GoNepal. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="#" className="hover:text-[#21AEC0] transition-colors">Sitemap</Link>
            <Link href="#" className="hover:text-[#21AEC0] transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 hover:bg-[#21AEC0] hover:text-white transition-all duration-300"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group flex items-center gap-2 hover:text-[#21AEC0] transition-colors">
        <ArrowRight className="w-3 h-3 text-[#21AEC0] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        <span className="-translate-x-5 group-hover:translate-x-0 transition-transform duration-300">{children}</span>
      </Link>
    </li>
  );
}
