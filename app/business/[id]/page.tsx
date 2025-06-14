import type { Metadata } from "next"
import Image from "next/image"
import { Star, MapPin, Phone, Clock, Globe, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Business Details - CIVIL-G Clone",
  description: "View detailed information about local businesses",
}

export default function BusinessPage({ params }: { params: { id: string } }) {
  // Mock business data
  const business = {
    id: params.id,
    name: "The Grand Restaurant",
    category: "Restaurant",
    rating: 4.5,
    reviews: 1250,
    address: "123 Main Street, Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 98765 43210",
    website: "www.grandrestaurant.com",
    email: "info@grandrestaurant.com",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    isOpen: true,
    hours: {
      monday: "11:00 AM - 11:00 PM",
      tuesday: "11:00 AM - 11:00 PM",
      wednesday: "11:00 AM - 11:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 12:00 AM",
      saturday: "11:00 AM - 12:00 AM",
      sunday: "11:00 AM - 11:00 PM",
    },
    tags: ["Fine Dining", "Italian", "Romantic", "Family Friendly"],
    description:
      "Experience fine dining at its best with our authentic Italian cuisine. Our restaurant offers a perfect blend of traditional recipes and modern culinary techniques.",
    amenities: ["WiFi", "Parking", "AC", "Card Payment", "Home Delivery"],
    priceRange: "₹₹₹",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
            {/* Images */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src={business.images[0] || "/placeholder.svg"}
                  alt={business.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-2">
                  {business.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${business.name} ${index + 2}`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{business.name}</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{business.category}</Badge>
                    <span className="text-sm text-gray-500">{business.priceRange}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-lg font-semibold">{business.rating}</span>
                </div>
                <span className="text-gray-500 ml-2">({business.reviews} reviews)</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{business.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">{business.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="w-4 h-4 mr-2" />
                  <span className="text-sm">{business.website}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <Badge
                    variant={business.isOpen ? "default" : "secondary"}
                    className={business.isOpen ? "bg-green-500" : "bg-gray-500"}
                  >
                    {business.isOpen ? "Open Now" : "Closed"}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full bg-red-600 hover:bg-red-700">Call Now</Button>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
                <Button variant="outline" className="w-full">
                  Write Review
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="bg-white rounded-lg shadow-sm">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">About</h3>
                <p className="text-gray-600">{business.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {business.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {business.amenities.map((amenity, index) => (
                    <Badge key={index} variant="outline">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Hours</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(business.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize font-medium">{day}:</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="p-6">
            <div className="text-center py-8">
              <p className="text-gray-500">Reviews section would be implemented here</p>
            </div>
          </TabsContent>

          <TabsContent value="photos" className="p-6">
            <div className="text-center py-8">
              <p className="text-gray-500">Photo gallery would be implemented here</p>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-6">
            <div className="text-center py-8">
              <p className="text-gray-500">Contact information and map would be implemented here</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
