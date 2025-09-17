
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  const images = [
     "/images/N1.jpeg",
     "/images/N2.jpeg",
    "/images/N3.jpeg",
  ];

  return (
    <section id="home" className="relative w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[50vh]" // Always half screen height
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay with tagline */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2
                  className="text-white font-bold text-center px-4 
                             text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                             leading-snug"
                >
                  Minimal resources, <br className="hidden sm:block" />
                  Maximum memories
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
