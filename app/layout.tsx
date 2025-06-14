import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "CIVIL-G - Best Construction Work",
    template: "%s | CIVIL-G Clone",
  },
  description: "Find all kind of cinstructions workers, plumber, electrician, and get contact details with reviews",
  keywords: "construction, plumber, plumbering, electrician, putty, painting, services, contact, reviews",
  authors: [{ name: "CIVIL-G Clone" }],
  creator: "CIVIL-G Clone",
  publisher: "CIVIL-G Clone",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
