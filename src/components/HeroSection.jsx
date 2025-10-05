import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Sustainable Living Collection",
    subtitle: "Eco-friendly furniture for your modern home",
    description: "Discover our handcrafted pieces made from renewable materials",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=800&fit=crop",
    buttonText: "Shop Now",
    badge: "New Arrivals"
  },
  {
    id: 2,
    title: "Organic Bedroom Essentials",
    subtitle: "Create your eco-friendly sanctuary",
    description: "Natural materials for a healthier sleep environment",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=800&fit=crop",
    buttonText: "Explore Bedroom",
    badge: "Eco-Friendly"
  },
  {
    id: 3,
    title: "Smart Home Lighting",
    subtitle: "Energy-efficient lighting solutions",
    description: "LED technology that saves power and enhances ambiance",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&h=800&fit=crop",
    buttonText: "View Collection",
    badge: "Energy Saving"
  },
  {
    id: 4,
    title: "Outdoor Living Spaces",
    subtitle: "Sustainable outdoor furniture",
    description: "Weather-resistant pieces for your garden and patio",
    img: "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=1600&h=800&fit=crop",
    buttonText: "Discover Outdoor",
    badge: "Weather Resistant"
  }
];

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gray-50">
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
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-50 !w-3 !h-3 !mx-1",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-green-600 !opacity-100"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[70vh] min-h-[600px] max-h-[800px]  overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 " />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    {slide.badge && (
                      <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full mb-6">
                        {slide.badge}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-4 opacity-90">
                      {slide.subtitle}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-white mb-8 max-w-lg opacity-80 leading-relaxed">
                      {slide.description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        {slide.buttonText}
                      </button>
                      <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="flex items-center gap-6 mt-8 text-white text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Free Shipping Over $199
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        30-Day Return Policy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Navigation Buttons */}
       
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 24px;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold;
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