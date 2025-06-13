import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredBusinesses = [
  {
    id: 1,
    name: "The Grand Restaurant",
    category: "Restaurant",
    rating: 4.5,
    reviews: 1250,
    address: "Bandra West, Mumbai",
    phone: "+91 98765 43210",
    image: "/placeholder.svg?height=200&width=300",
    isOpen: true,
    tags: ["Fine Dining", "Italian", "Romantic"],
    distance: "2.3 km",
  },
  {
    id: 2,
    name: "City Hospital",
    category: "Hospital",
    rating: 4.2,
    reviews: 890,
    address: "Andheri East, Mumbai",
    phone: "+91 98765 43211",
    image: "/placeholder.svg?height=200&width=300",
    isOpen: true,
    tags: ["Multi-specialty", "Emergency", "24/7"],
    distance: "1.8 km",
  },
  {
    id: 3,
    name: "Luxury Hotel & Spa",
    category: "Hotel",
    rating: 4.7,
    reviews: 2100,
    address: "Juhu Beach, Mumbai",
    phone: "+91 98765 43212",
    image: "/placeholder.svg?height=200&width=300",
    isOpen: true,
    tags: ["5 Star", "Beach View", "Spa"],
    distance: "5.2 km",
  },
  {
    id: 4,
    name: "Elite Fitness Center",
    category: "Gym",
    rating: 4.3,
    reviews: 650,
    address: "Powai, Mumbai",
    phone: "+91 98765 43213",
    image: "/placeholder.svg?height=200&width=300",
    isOpen: false,
    tags: ["Personal Training", "Yoga", "CrossFit"],
    distance: "3.1 km",
  },
]

export default function FeaturedBusinesses() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Featured Businesses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover top-rated businesses recommended by our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBusinesses.map((business) => (
            <div
              key={business.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={business.image || "/placeholder.svg"}
                  alt={business.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant={business.isOpen ? "default" : "secondary"}
                    className={business.isOpen ? "bg-green-500" : "bg-gray-500"}
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {business.isOpen ? "Open" : "Closed"}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-sm font-medium">
                  {business.distance}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{business.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {business.category}
                  </Badge>
                </div>

                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{business.rating}</span>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({business.reviews} reviews)</span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="line-clamp-1">{business.address}</span>
                </div>

                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>{business.phone}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {business.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/businesses">
            <Button variant="outline" size="lg">
              View All Businesses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
