"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, MapPin, Phone, Clock, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SearchResultsProps {
  query?: string
  location?: string
  category?: string
}

const mockResults = [
  {
    id: 1,
    name: "Maharaja Restaurant",
    category: "Restaurant",
    rating: 4.3,
    reviews: 856,
    address: "Shop 12, Linking Road, Bandra West, Mumbai",
    phone: "+91 98765 43210",
    image: "/placeholder.svg?height=150&width=200",
    isOpen: true,
    distance: "1.2 km",
    priceRange: "₹₹",
    tags: ["North Indian", "Vegetarian", "Family Restaurant"],
    description: "Authentic North Indian cuisine with traditional flavors. Known for their butter chicken and naan.",
  },
  {
    id: 2,
    name: "City Medical Center",
    category: "Hospital",
    rating: 4.1,
    reviews: 432,
    address: "Plot 45, Sector 7, Vashi, Navi Mumbai",
    phone: "+91 98765 43211",
    image: "/placeholder.svg?height=150&width=200",
    isOpen: true,
    distance: "2.8 km",
    priceRange: "₹₹₹",
    tags: ["Multi-specialty", "Emergency", "Insurance"],
    description: "Modern healthcare facility with experienced doctors and advanced medical equipment.",
  },
]

export default function SearchResults({ query, location, category }: SearchResultsProps) {
  const [sortBy, setSortBy] = useState("relevance")
  const [viewType, setViewType] = useState("list")

  return (
    <div>
      {/* Search Header */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              {query ? `Results for "${query}"` : "Search Results"}
              {location && ` in ${location}`}
            </h1>
            <p className="text-gray-600 text-sm mt-1">Found {mockResults.length} results</p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="rating">Sort by Rating</option>
              <option value="distance">Sort by Distance</option>
              <option value="reviews">Sort by Reviews</option>
            </select>
            <div className="flex border rounded-md">
              <button
                onClick={() => setViewType("list")}
                className={`px-3 py-2 text-sm ${viewType === "list" ? "bg-red-600 text-white" : "text-gray-600"}`}
              >
                List
              </button>
              <button
                onClick={() => setViewType("grid")}
                className={`px-3 py-2 text-sm ${viewType === "grid" ? "bg-red-600 text-white" : "text-gray-600"}`}
              >
                Grid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {mockResults.map((result) => (
          <div key={result.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Image */}
                <div className="lg:w-48 flex-shrink-0">
                  <Image
                    src={result.image || "/placeholder.svg"}
                    alt={result.name}
                    width={200}
                    height={150}
                    className="w-full h-32 lg:h-28 object-cover rounded-md"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h2 className="text-lg font-semibold text-gray-800 mb-1">{result.name}</h2>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{result.category}</Badge>
                            <span className="text-sm text-gray-500">{result.priceRange}</span>
                            <Badge
                              variant={result.isOpen ? "default" : "secondary"}
                              className={result.isOpen ? "bg-green-500" : "bg-gray-500"}
                            >
                              <Clock className="w-3 h-3 mr-1" />
                              {result.isOpen ? "Open" : "Closed"}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 font-medium">{result.rating}</span>
                        </div>
                        <span className="text-gray-500 text-sm ml-2">({result.reviews} reviews)</span>
                        <span className="text-gray-500 text-sm ml-4">{result.distance} away</span>
                      </div>

                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{result.address}</span>
                      </div>

                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>{result.phone}</span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3">{result.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {result.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex lg:flex-col gap-2 lg:w-32">
                      <Button size="sm" className="flex-1 lg:w-full bg-red-600 hover:bg-red-700">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 lg:w-full">
                        Call Now
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 lg:w-full">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button size="sm" className="bg-red-600">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
