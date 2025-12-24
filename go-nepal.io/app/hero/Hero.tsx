"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  useEffect(() => {
    const logos = document.getElementById("logo-container");

    if (logos) {
      logos.innerHTML = `
        <span class="mx-14 text-lg font-semibold text-slate-400">Everest</span>
        <span class="mx-14 text-lg font-semibold text-slate-400">Pokhara</span>
        <span class="mx-14 text-lg font-semibold text-slate-400">Lumbini</span>
        <span class="mx-14 text-lg font-semibold text-slate-400">Annapurna</span>
        <span class="mx-14 text-lg font-semibold text-slate-400">Mustang</span>
        <span class="mx-14 text-lg font-semibold text-slate-400">Chitwan</span>
      `.repeat(2);
    }
  }, []);

  return (
    <section className="flex flex-col items-center bg-[url('/linearBg.svg')] bg-cover text-gray-800 pb-20 text-sm">
      {/* Community Badge */}
      <div className="flex items-center gap-2 mt-32 px-4 py-2 rounded-full border border-indigo-200 text-xs bg-white/70 backdrop-blur">
        <Image
          className="w-7 h-7 rounded-full border-2 border-white"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50"
          alt=""
          width={28}
          height={28}
        />
        <p>Trusted by 50k+ travelers worldwide</p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-4xl mt-6 bg-linear-to-r from-black to-slate-500 text-transparent bg-clip-text">
        Explore Nepal. Experience the Himalayas.
      </h1>

      {/* Sub text */}
      <p className="text-slate-600 md:text-base text-center max-w-xl mt-4 px-3">
        Discover breathtaking mountains, ancient culture, and unforgettable
        adventures with GoNepal.io – your trusted travel partner.
      </p>

      {/* CTA */}
      <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8 rounded-full transition">
        Plan Your Trip
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Copy Card */}
      <div className="bg-linear-to-t from-indigo-500/40 to-slate-200 p-px rounded-md mt-8">
        <div className="flex items-center gap-4 bg-white rounded-md px-4 py-3">
          <span className="text-slate-700">
            ✈️ Plan your Nepal adventure today !
          </span>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-linear-to-r from-[#f5f7ff] to-transparent" />

        <div className="marquee-inner flex min-w-[200%]">
          <div className="flex py-4" id="logo-container"></div>
        </div>

        <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-l from-[#efe9f4] to-transparent" />
      </div>
    </section>
  );
}
