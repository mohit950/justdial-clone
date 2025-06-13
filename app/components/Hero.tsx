"use client"

import { useState } from "react"
import { Search, MapPin, TrendingUpIcon as Trending } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("Mumbai")

  const trendingSearches = ["Restaurants", "Hotels", "Hospitals", "Salons", "Gyms", "Schools"]

  return (
    <section className="bg-cover bg-[url('https://img.freepik.com/premium-photo/best-eye-catchy-wallpaper-pc-desktop_988864-306.jpg')] text-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Find Local Businesses</h1>
          <p className="text-lg lg:text-xl mb-8 opacity-90">
            Discover the best restaurants, services, and businesses near you
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
                <Input
                  type="text"
                  placeholder="Search for restaurants, hotels, services, doctors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 rounded-r-none border-gray-300 text-gray-700 py-3 px-4 text-lg"
                />
                <Button size="lg" className="rounded-l-none bg-red-600 hover:bg-red-700 px-8">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trending Searches */}
            <div className="mt-6 text-left">
              <div className="flex items-center mb-3">
                <Trending className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-600 font-medium">Trending:</span>
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
  )
}
