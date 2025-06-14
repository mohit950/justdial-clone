import type { Metadata } from "next"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import FeaturedBusinesses from "./components/FeaturedBusinesses"
import PopularServices from "./components/PopularServices"
import AppDownload from "./components/AppDownload"
import ContactPage from "./components/ContactUs"
import Testimonials from "./components/Testimonials"

export const metadata: Metadata = {
  title: "CIVIL-G Clone - Find Local Businesses & Services Near You",
  description:
    "Discover local businesses, services, restaurants, doctors, and more. Get contact details, reviews, and directions for businesses in your area.",
  keywords: "local business, services, restaurants, doctors, shops, contact details, reviews",
  openGraph: {
    title: "CIVIL-G Clone - Local Business Directory",
    description: "Find the best local businesses and services near you",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      {/* <FeaturedBusinesses /> */}
      <ContactPage />
      <Testimonials />
      <PopularServices />
      <AppDownload />
    </main>
  )
}
