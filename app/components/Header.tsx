"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, MapPin, Phone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("Mumbai")

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              88888-88888
            </span>
            <span>Free Listing</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/advertise" className="hover:text-blue-600">
              Advertise
            </Link>
            {/* <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link href="/signup" className="hover:text-blue-600">
              Sign Up
            </Link> */}
          </div>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-red-600 text-white px-3 py-2 rounded font-bold text-xl">DD</div>
            <span className="ml-2 text-xl font-bold text-gray-800 hidden sm:block">CIVIL-G</span>
          </Link>

          {/* Search Bar - Desktop */}
          {/* <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full">
              <div className="flex items-center bg-gray-100 px-3 rounded-l-md">
                <MapPin className="w-4 h-4 text-gray-500" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-transparent border-none outline-none text-sm ml-1"
                >
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Hyderabad</option>
                </select>
              </div>
              <Input
                type="text"
                placeholder="Search for restaurants, hotels, services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-none border-l-0"
              />
              <Button className="rounded-l-none bg-red-600 hover:bg-red-700">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div> */}

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 p-2 border rounded">
                    <MapPin className="w-4 h-4" />
                    <select className="flex-1 border-none outline-none">
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                    </select>
                  </div>
                  <div className="flex">
                    <Input placeholder="Search services..." className="rounded-r-none" />
                    <Button className="rounded-l-none bg-red-600">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-2 pt-4 border-t">
                    <Link href="/advertise" className="p-2 hover:bg-gray-100 rounded">
                      Advertise
                    </Link>
                    <Link href="/login" className="p-2 hover:bg-gray-100 rounded">
                      Login
                    </Link>
                    <Link href="/signup" className="p-2 hover:bg-gray-100 rounded">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Actions */}
          {/* <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Free Listing
            </Button>
          </div> */}
        </div>

        {/* Mobile Search */}
        {/* <div className="lg:hidden pb-4">
          <div className="flex space-x-2">
            <div className="flex items-center bg-gray-100 px-2 rounded text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <select className="bg-transparent border-none outline-none">
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="flex flex-1">
              <Input placeholder="Search..." className="rounded-r-none" />
              <Button className="rounded-l-none bg-red-600">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  )
}
