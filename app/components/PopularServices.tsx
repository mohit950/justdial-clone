import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    category: "Food & Dining",
    services: [
      "Pizza Delivery",
      "Chinese Food",
      "Biryani",
      "Cake Shops",
      "Ice Cream",
      "Fast Food",
      "South Indian",
      "North Indian",
    ],
  },
  {
    category: "Healthcare",
    services: [
      "Dentists",
      "Pediatricians",
      "Cardiologists",
      "Dermatologists",
      "Physiotherapy",
      "Pathology Labs",
      "Pharmacies",
      "Eye Specialists",
    ],
  },
  {
    category: "Home Services",
    services: [
      "Plumbers",
      "Electricians",
      "AC Repair",
      "Pest Control",
      "House Cleaning",
      "Packers Movers",
      "Interior Designers",
      "Painters",
    ],
  },
  {
    category: "Beauty & Wellness",
    services: [
      "Hair Salons",
      "Spa & Massage",
      "Nail Art",
      "Bridal Makeup",
      "Men's Salon",
      "Yoga Classes",
      "Fitness Centers",
      "Beauty Parlours",
    ],
  },
]

export default function PopularServices() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Popular Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Quick access to the most searched services in your area</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800 mb-4 pb-2 border-b border-gray-100">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      href={`/search?q=${encodeURIComponent(service)}`}
                      className="flex items-center justify-between text-gray-600 hover:text-red-600 transition-colors group"
                    >
                      <span className="text-sm">{service}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
