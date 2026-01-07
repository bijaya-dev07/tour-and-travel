"use client";

import React, { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { toursDummyData } from "@/components/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Mountain,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function DestinationDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const tour = toursDummyData.find((t) => t._id === id);

  if (!tour) {
    notFound();
  }

  const cover = tour.images?.[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        {cover && (
          <Image
            src={cover}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-6 left-4 md:left-8 z-10">
          <Link href="/">
            <Button variant="outline" className="bg-white/20 hover:bg-white/40 border-white text-white backdrop-blur-md">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 bg-linear-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto text-white">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-amber-500 rounded-full text-sm font-semibold">
                {tour.difficulty}
              </span>
              <span className="flex items-center gap-1 text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                <MapPin className="w-4 h-4" /> {tour.destination}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>{tour.durationDays} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span>Season: {tour.bestSeason.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {tour.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Mountain className="w-6 h-6 text-amber-600" />
                Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-xs border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery (Small grid of other images if available) */}
             {tour.images.length > 1 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {tour.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-xl overflow-hidden shadow-sm">
                      <Image
                        src={img}
                        alt={`${tour.title} image ${idx + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-end gap-2 mb-6">
                 <span className="text-3xl font-bold text-slate-900">${tour.pricePerPerson}</span>
                 <span className="text-slate-500 mb-1">/ person</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Duration</span>
                    <span className="font-semibold text-slate-900">{tour.durationDays} Days</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Group Size</span>
                    <span className="font-semibold text-slate-900">{tour.groupSize || 'Flexible'}</span>
                </div>
                <div className="flex justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-600">Availability</span>
                     <span className={`font-semibold ${tour.isAvailable ? 'text-emerald-600' : 'text-red-600'}`}>
                        {tour.isAvailable ? 'Available Now' : 'Sold Out'}
                     </span>
                </div>
              </div>

              <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 text-lg">
                Book This Tour
              </Button>
              <p className="text-xs text-center text-slate-400 mt-4">
                No credit card required for inquiry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
