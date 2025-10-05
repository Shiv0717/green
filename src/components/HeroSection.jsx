import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight, Play } from "lucide-react";
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
    id: 3,
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
        speed={1000}
        autoplay={{ 
          delay: 7000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white !opacity-40 !w-2.5 !h-0.5 !mx-1 !rounded-none",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white !opacity-100 !w-8"
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="hero-swiper group"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[50vh] lg:h-[80vh] min-h-[540px] max-h-[700px] overflow-hidden">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-105"
                  loading="eager"
                />
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                  <div className="max-w-2xl ml-0 lg:ml-8">
                    {/* Badge */}
                    {slide.badge && (
                      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-normal tracking-wider mb-8">
                        {slide.badge}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.1] tracking-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-normal mb-6 opacity-95 tracking-wide max-w-lg">
                      {slide.subtitle}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-white mb-10 max-w-xl opacity-90 leading-relaxed tracking-wide">
                      {slide.description}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <button className="group/btn bg-white text-black hover:bg-gray-100 px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 flex items-center gap-3">
                        {slide.buttonText}
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="group/btn border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-normal tracking-wide transition-all duration-300 flex items-center gap-3">
                        WATCH STORY
                        <Play className="w-4 h-4 transform group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                    
                    {/* Additional Info */}
                  
                  </div>
                </div>
              </div>

              {/* Slide Number */}
              <div className="absolute bottom-8 right-8 text-white text-sm tracking-wide opacity-60">
                {slide.id.toString().padStart(2, '0')}
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation */}
      
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 20px;
        }
        .swiper-pagination {
          bottom: 40px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          content: none !important;
        }
        @media (max-width: 768px) {
          .swiper-pagination {
            bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;