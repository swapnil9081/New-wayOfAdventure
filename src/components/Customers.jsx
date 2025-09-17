import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample customer data
const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    experience: "Amazing experience! The trek was well organized and staff were super friendly.",
    short: "Highly recommend for adventure lovers!",
    contact: "rahul@example.com"
  },
  {
    id: 2,
    name: "Priya Singh",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: "Loved the rural village tour. It gave me a real insight into village life.",
    short: "A peaceful getaway from city life.",
    contact: "priya@example.com"
  },
  {
    id: 3,
    name: "Ankit Verma",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    experience: "The team was very supportive and everything was organized perfectly.",
    short: "Great for group trips!",
    contact: "ankit@example.com"
  },
  {
    id: 4,
    name: "Vishal Kumar",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    experience: "The team was very supportive and everything was organized perfectly.",
    short: "Great for group trips!",
    contact: "ankit@example.com"
  },
  // Add more customers
];

export default function Customers() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Happy Customers</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {customers.map((c) => (
          <SwiperSlide key={c.id}>
            <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition">
              <img 
                src={c.photo} 
                alt={c.name} 
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-green-500"
              />
              <h3 className="text-xl font-semibold">{c.name}</h3>
              <p className="text-gray-600 mt-2 italic">"{c.experience}"</p>
              <p className="text-gray-500 mt-2">{c.short}</p>
              <p className="text-gray-400 mt-2 text-sm">{c.contact}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
