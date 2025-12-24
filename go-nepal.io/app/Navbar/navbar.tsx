"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Mountain } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Tours", path: "/tours" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/85 text-slate-900 shadow-lg backdrop-blur-lg"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between  py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-5">
          <div className="rounded-full py-2 ">
            <Image
              src="/gonepal.png"
              alt="Go Nepal logo"
              width={110}
              height={32}
              priority
              sizes="110px"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`group flex flex-col items-center gap-1 text-lg font-medium ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`${
                  isScrolled ? "bg-slate-800" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full`}
              ></span>
            </Link>
          ))}
         
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isScrolled
                ? "border-slate-200 bg-white text-slate-900 shadow-sm hover:shadow"
                : "border-white/40 bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            <Search className="h-4 w-4" /> Explore
          </button>
          <button
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-slate-900 text-white hover:bg-slate-800"
                : "bg-white text-slate-900 hover:bg-slate-100"
            }`}
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 transition hover:bg-white/10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              className={`h-6 w-6 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col bg-white text-slate-900 transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 shadow-sm">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/gonepal.png"
              alt="Go Nepal"
              width={110}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 space-y-4 px-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 px-6 pb-8">
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all">
            <Mountain className="h-4 w-4" /> Plan a Trip
          </button>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-all">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
