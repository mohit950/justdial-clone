import type { Metadata } from "next"
import Hero from "./components/Hero"
import Categories from "./components/Categories"
import FeaturedBusinesses from "./components/FeaturedBusinesses"
import PopularServices from "./components/PopularServices"
import AppDownload from "./components/AppDownload"
import ContactPage from "./components/ContactUs"
import Testimonials from "./components/Testimonials"

export const metadata: Metadata = {
  title: 'Civil-G | Construction Services Near You',
  description: 'Civil-G helps you find the best construction workers and services in your area.',
  keywords: ['Civil-G', 'civil g', 'construction workers', 'labor services', 'builders India', 'services'],
  verification: {
    google: 'U4cNAUU_kDbr-kYd2-r7rSJDl-2EYaYnBHJFMSq37LI',
  },
  openGraph: {
    title: 'Civil-G',
    description: 'Find trusted construction workers in your city.',
    url: 'https://your-vercel-url.vercel.app',
    // images: ['/og-image.png'], // Optional: add a social share image
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
