import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "SUSTAINABLE LIVING",
    subtitle: "ECO-FRIENDLY FURNITURE FOR MODERN HOMES",
    description: "Discover our handcrafted pieces made from renewable materials",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=800&fit=crop",
    buttonText: "SHOP NOW",
    badge: "NEW ARRIVALS"
  },
  {
    id: 2,
    title: "ORGANIC BEDROOM",
    subtitle: "CREATE YOUR ECO-FRIENDLY SANCTUARY",
    description: "Natural materials for a healthier sleep environment",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=800&fit=crop",
    buttonText: "EXPLORE BEDROOM",
    badge: "ECO-FRIENDLY"
  },
  {
    id: 4,
    title: "OUTDOOR LIVING",
    subtitle: "SUSTAINABLE OUTDOOR FURNITURE",
    description: "Weather-resistant pieces for your garden and patio",
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=1600&h=800&fit=crop",
    buttonText: "DISCOVER OUTDOOR",
    badge: "WEATHER RESISTANT"
  }
];

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{ 
          delay: 6000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-50 !w-2 !h-2 !mx-1",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-black !opacity-100"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[40vh] min-h-[600px] max-h-[800px] overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Dark Overlay for Better Text Readability */}
                <div className="absolute inset-0 " />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    {slide.badge && (
                      <div className="inline-flex items-center px-3 py-1 bg-black text-white text-xs font-normal tracking-wide mb-6">
                        {slide.badge}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-lg md:text-xl lg:text-2xl text-white font-normal mb-4 opacity-90 tracking-wide">
                      {slide.subtitle}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-base text-white mb-8 max-w-lg opacity-80 leading-relaxed tracking-wide">
                      {slide.description}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 text-sm font-normal tracking-wide transition-all duration-300">
                        {slide.buttonText}
                      </button>
                      <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 text-sm font-normal tracking-wide transition-all duration-300">
                        LEARN MORE
                      </button>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="flex items-center gap-6 mt-8 text-white text-xs tracking-wide">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        FREE SHIPPING OVER $199
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        30-DAY RETURN POLICY
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 20px;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px !important;
          font-weight: bold;
          color: white;
        }
        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;