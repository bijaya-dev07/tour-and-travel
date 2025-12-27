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
    Moderate: "text-amber-700 bg-amber-100",
    Difficult: "text-red-600 bg-red-50",
    Expert: "text-purple-600 bg-purple-50",
  };

  // Determine badge color based on difficulty
  const difficultyColor =
    difficultyColors[tour.difficulty] || "text-gray-600 bg-gray-50";

  return (
    <Card className="group relative overflow-hidden border border-amber-100 shadow-lg rounded-2xl bg-white">
      {/* Image Container with linear Overlay */}
      <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden rounded-t-2xl">
        {cover && (
          <Image
            src={cover}
            alt={tour.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover"
            priority={false}
          />
        )}
        {/* linear Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Price Badge (smooth in on desktop hover) */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-amber-100 transition-all duration-300 ease-out opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-slate-900">
              ${tour.pricePerPerson}
            </span>
            <span className="text-xs text-slate-600">/person</span>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div
          className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${difficultyColor}`}
        >
          {tour.difficulty}
        </div>

        {/* Rating Badge */}
        {tour.rating && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-amber-100">
            <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            <span className="font-semibold text-slate-900">{tour.rating}</span>
          </div>
        )}
      </div>

      <CardHeader className="pt-6 pb-3">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-slate-900 line-clamp-1">
              {tour.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-1 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{tour.destination}</span>
            </CardDescription>
          </div>
          {/* Group Size */}
          {tour.groupSize && (
            <div className="flex items-center gap-1 text-slate-500">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">{tour.groupSize}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        {/* Duration and Season */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Calendar className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Duration</div>
              <div className="font-semibold text-slate-900">
                {tour.durationDays} days
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Best Season</div>
              <div className="font-semibold text-slate-900 line-clamp-1">
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
              <h4 className="font-semibold text-slate-900">Highlights</h4>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.highlights.slice(0, 4).map((h, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="line-clamp-1">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="border-t pt-4 flex items-center justify-between">
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
          className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors duration-200"
          disabled={!tour.isAvailable}
        >
          {tour.isAvailable ? "Book Now" : "Notify Me"}
        </Button>
      </CardFooter>
    </Card>
  );
}
