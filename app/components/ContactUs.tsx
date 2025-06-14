// If using TypeScript, name this page.tsx or contact.tsx

import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <Input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></Textarea>
            <Button size="sm" className="flex-1 bg-red-600 hover:bg-red-700" type="submit">
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Office Location</h3>
                <p>123 Main Street, New Delhi, India</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@example.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-blue-600 mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-semibold">Working Hours</h3>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat – Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
