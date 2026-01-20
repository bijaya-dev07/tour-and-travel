import Link from "next/link";
import React from "react";
import Image, { type StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Users,
  Mountain,
} from "lucide-react";

type Tour = {
  _id: string;
  title: string;
  destination: string;
  durationDays: number;
  pricePerPerson: number;
  difficulty: string;
  bestSeason: string[];
  highlights: string[];
  images: (StaticImageData | string)[];
  isAvailable: boolean;
  description?: string;
  rating?: number;
  groupSize?: number;
};

export default function DestinationCard({ tour }: { tour: Tour }) {
  const cover = tour.images?.[0];

  // Difficulty color mapping
  const difficultyColors: Record<string, string> = {
    Easy: "text-green-600 bg-green-50",
    Moderate: "text-[#F4A261] bg-[#F4A261]/10",
    Difficult: "text-red-600 bg-red-50",
    Expert: "text-purple-600 bg-purple-50",
  };

  // Determine badge color based on difficulty
  const difficultyColor =
    difficultyColors[tour.difficulty] || "text-[#6B7280] bg-gray-50";

  return (
    <Card className="group relative overflow-hidden border border-[#F4A261]/20 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-shadow duration-300">
      <Link href={`/destination/${tour._id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {tour.title}</span>
      </Link>
      {/* Image Container with linear Overlay */}
      <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-t-2xl">
        {cover && (
          <Image
            src={cover}
            alt={tour.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
        )}
        {/* linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Price Badge (smooth in on desktop hover) */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-[#F4A261]/20 transition-all duration-300 ease-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 z-20">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-[#1F2933]">
              ${tour.pricePerPerson}
            </span>
            <span className="text-xs text-[#6B7280]">/person</span>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor} z-20`}
        >
          {tour.difficulty}
        </div>

        {/* Rating Badge */}
        {tour.rating && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-[#F4A261]/20 z-20">
            <Star className="w-4 h-4 fill-[#F4A261] text-[#F4A261]" />
            <span className="font-semibold text-[#1F2933]">{tour.rating}</span>
          </div>
        )}
      </div>

      <CardHeader className="pt-6 pb-3 relative">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-[#1F2933] line-clamp-1 group-hover:text-[#F4A261] transition-colors">
              {tour.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-1 text-[#6B7280]">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{tour.destination}</span>
            </CardDescription>
          </div>
          {/* Group Size */}
          {tour.groupSize && (
            <div className="flex items-center gap-1 text-[#6B7280]">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">{tour.groupSize}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4 relative">
        {/* Duration and Season */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-[#F4A261]/10 rounded-lg">
              <Calendar className="w-4 h-4 text-[#F4A261]" />
            </div>
            <div>
              <div className="text-xs text-[#6B7280]">Duration</div>
              <div className="font-semibold text-[#1F2933]">
                {tour.durationDays} days
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs text-[#6B7280]">Best Season</div>
              <div className="font-semibold text-[#1F2933] line-clamp-1">
                {tour.bestSeason.join(", ")}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {tour.highlights?.length ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mountain className="w-5 h-5 text-slate-400" />
              <h4 className="font-semibold text-[#1F2933]">Highlights</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.highlights.slice(0, 4).map((h, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#6B7280]"
                >
                  <div className="w-1.5 h-1.5 bg-[#F4A261] rounded-full" />
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="border-t pt-4 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              tour.isAvailable ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              tour.isAvailable ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {tour.isAvailable ? "Available Now" : "Sold Out"}
          </span>
        </div>
        <Button
          variant="default"
          className="px-6 py-2 bg-[#21AEC0] hover:bg-[#1a8b99] text-white font-semibold rounded-lg transition-colors duration-200"
          disabled={!tour.isAvailable}
        >
          {tour.isAvailable ? "Book Now" : "Notify Me"}
        </Button>
      </CardFooter>
    </Card>
  );
}
