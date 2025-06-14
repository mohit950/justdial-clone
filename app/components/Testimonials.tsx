// components/Testimonials.tsx
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    position: "Project Manager, BuildPro",
    image: "/avatars/aarav.jpg", // Place image in public/avatars/
    quote:
      "This platform helped us connect with skilled workers instantly. Super reliable and efficient!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    position: "Interior Designer, HomeCraft",
    image: "/avatars/sneha.jpg",
    quote:
      "The user interface is smooth and finding the right talent was a breeze. Highly recommend it!",
    rating: 4,
  },
  {
    name: "Ravi Kumar",
    position: "Contractor, UrbanSpaces",
    image: "/avatars/ravi.jpg",
    quote:
      "Exceptional service! We hired multiple workers within hours. Will definitely use again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <Image
                src={t.image}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-gray-600 italic mb-4">“{t.quote}”</p>
              <div className="text-yellow-500 flex justify-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
