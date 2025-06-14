"use client";

import { useState } from "react";
import { Search, MapPin, TrendingUpIcon as Trending } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AutoCompleteInput from "@/components/ui/AutoCompleteInput";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Kanpur");

  const trendingSearches = [
    "Plumbers",
    "Painters",
    "Electricians",
    "Carpenters",
    "Masons",
    "Roofers",
  ];

  return (
    <section className="bg-white bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-no-repeat py-16 lg:py-24">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Find Worker</h1>
          <p className="text-lg lg:text-xl mb-8 opacity-90">
            Discover the best construction workers near you
          </p>
          {/* Search Form */}
          <div className="bg-white rounded-lg p-4 lg:p-6 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Location Selector */}
              <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md lg:w-48">
                <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-gray-700 w-full"
                >
                  <option>Kanpur</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Ahmedabad</option>
                </select>
              </div>

              {/* Search Input */}
              <div className="flex flex-1">
                <AutoCompleteInput setQuery={setSearchQuery} query={searchQuery
                  
                }/>

                <Button
                  size="lg"
                  className="rounded bg-red-600 hover:bg-red-700 px-8 mt-0.5 ms-5"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trending Searches */}
            <div className="mt-6 text-left">
              <div className="flex items-center mb-3">
                <Trending className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600 font-medium">
                  Trending:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-2xl lg:text-3xl font-bold">30M+</div>
              <div className="text-sm opacity-80">Listings</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold">750+</div>
              <div className="text-sm opacity-80">Cities</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold">100M+</div>
              <div className="text-sm opacity-80">Users</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
