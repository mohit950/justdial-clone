import Link from "next/link"
import {
  Utensils,
  Hotel,
  Car,
  Stethoscope,
  Scissors,
  Dumbbell,
  GraduationCap,
  ShoppingBag,
  Wrench,
  Home,
  Briefcase,
  Heart,
} from "lucide-react"

const categories = [
  { name: "Plumbering", icon: Utensils, count: "2.5M+", color: "bg-orange-100 text-orange-600" },
  { name: "Painting", icon: Hotel, count: "500K+", color: "bg-blue-100 text-blue-600" },
  { name: "Electrician", icon: Stethoscope, count: "100K+", color: "bg-green-100 text-green-600" },
  { name: "Roofing", icon: Scissors, count: "300K+", color: "bg-pink-100 text-pink-600" },
  { name: "Carpentering", icon: Dumbbell, count: "50K+", color: "bg-purple-100 text-purple-600" },
  // { name: "Schools", icon: GraduationCap, count: "200K+", color: "bg-indigo-100 text-indigo-600" },
  // { name: "Shopping", icon: ShoppingBag, count: "1M+", color: "bg-red-100 text-red-600" },
  // { name: "Auto Services", icon: Car, count: "150K+", color: "bg-gray-100 text-gray-600" },
  // { name: "Home Services", icon: Home, count: "400K+", color: "bg-yellow-100 text-yellow-600" },
  { name: "Repair Services", icon: Wrench, count: "250K+", color: "bg-teal-100 text-teal-600" },
  // { name: "Consultants", icon: Briefcase, count: "80K+", color: "bg-cyan-100 text-cyan-600" },
  // { name: "Wedding", icon: Heart, count: "60K+", color: "bg-rose-100 text-rose-600" },
]

export default function Categories() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Popular Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore millions of businesses across various categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link
                key={index}
                href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center border hover:border-red-200"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count}</p>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link href="/categories" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
            View All Categories
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
