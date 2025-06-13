import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppDownload() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">Get the dhoond App</h2>
            <p className="text-lg mb-6 opacity-90">
              Find businesses on the go with our mobile app. Available for iOS and Android.
            </p>

            <div className="flex items-center mb-6">
              <div className="flex items-center mr-6">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-lg font-semibold">4.5</span>
                <span className="ml-1 opacity-80">Rating</span>
              </div>
              <div>
                <span className="text-lg font-semibold">10M+</span>
                <span className="ml-1 opacity-80">Downloads</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Google Play
              </Button>
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white flex items-center">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                App Store
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">30M+</div>
                <div className="text-sm opacity-80">Listings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">750+</div>
                <div className="text-sm opacity-80">Cities</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="relative inline-block">
              <Image
                src="/placeholder.svg?height=400&width=250"
                alt="dhoond Mobile App"
                width={250}
                height={400}
                className="mx-auto"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                New!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
