"use client"

import { useState } from "react"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function SearchFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRating, setSelectedRating] = useState<number[]>([0])
  const [selectedDistance, setSelectedDistance] = useState<number[]>([10])
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    "Restaurants",
    "Hotels",
    "Hospitals",
    "Beauty Salons",
    "Gyms",
    "Schools",
    "Shopping",
    "Auto Services",
  ]

  const priceRanges = ["₹", "₹₹", "₹₹₹", "₹₹₹₹"]

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCategories([...selectedCategories, category])
                  } else {
                    setSelectedCategories(selectedCategories.filter((c) => c !== category))
                  }
                }}
              />
              <label htmlFor={category} className="text-sm text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox id={`rating-${rating}`} />
              <label htmlFor={`rating-${rating}`} className="flex items-center text-sm text-gray-700">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                {rating}+ Stars
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Distance */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Distance</h4>
        <div className="px-2">
          <Slider
            value={selectedDistance}
            onValueChange={setSelectedDistance}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 km</span>
            <span>{selectedDistance[0]} km</span>
            <span>50 km</span>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((price) => (
            <div key={price} className="flex items-center space-x-2">
              <Checkbox id={`price-${price}`} />
              <label htmlFor={`price-${price}`} className="text-sm text-gray-700">
                {price}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Open Now */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Checkbox id="open-now" checked={isOpen} onCheckedChange={setIsOpen} />
          <label htmlFor="open-now" className="flex items-center text-sm text-gray-700">
            <Clock className="w-4 h-4 mr-1" />
            Open Now
          </label>
        </div>
      </div>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )
}
