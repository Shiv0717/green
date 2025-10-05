import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CategoriesMenu = ({ isMenuOpen, toggleMenu }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    "LIVING ROOM": {
      subcategories: ["Sofas & Sectionals", "Coffee Tables", "TV Units", "Bookshelves", "Area Rugs", "Accent Chairs", "Side Tables", "Storage"],
      featured: ["New Arrivals 2024", "Best Sellers", "Sustainable Choices", "Modern Collection", "Minimalist Designs"]
    },
    "BEDROOM": {
      subcategories: ["Beds & Headboards", "Wardrobes", "Dressers", "Nightstands", "Mattresses", "Bedding Sets", "Benches", "Vanity Tables"],
      featured: ["Organic Collection", "Eco Materials", "Space Saving", "Luxury Bedding", "Smart Storage"]
    },
    "DINING": {
      subcategories: ["Dining Tables", "Dining Chairs", "Bar Stools", "Buffets", "Tableware", "Serveware", "Table Linens", "Bar Carts"],
      featured: ["Sustainable Wood", "Family Dining", "Compact Solutions", "Entertainment", "Formal Dining"]
    },
    "OUTDOOR": {
      subcategories: ["Patio Sets", "Outdoor Dining", "Garden Decor", "Lighting", "Planters", "Outdoor Rugs", "Hammocks", "Fire Pits"],
      featured: ["Weather Resistant", "Eco Materials", "Garden Essentials", "Outdoor Living", "Seasonal"]
    },
    "LIGHTING": {
      subcategories: ["Ceiling Lights", "Floor Lamps", "Table Lamps", "Outdoor", "Smart Lights", "Wall Sconces", "Pendant Lights", "LED Strips"],
      featured: ["Energy Saving", "Smart Home", "Ambient", "Task Lighting", "Decorative"]
    },
    "DECOR": {
      subcategories: ["Wall Art", "Mirrors", "Throw Pillows", "Vases", "Clocks", "Photo Frames", "Sculptures", "Candles"],
      featured: ["Handmade", "Sustainable", "Seasonal", "Artisanal", "Limited"]
    },
    "OFFICE": {
      subcategories: ["Desks", "Office Chairs", "Bookshelves", "Filing", "Organizers", "Lighting", "Conference", "Storage"],
      featured: ["Ergonomic", "Home Office", "Professional", "Space Efficient", "Tech"]
    },
    "STORAGE": {
      subcategories: ["Cabinets", "Shelving", "Baskets", "Chests", "Wall Shelves", "Modular", "Closet Systems", "Organizers"],
      featured: ["Space Saving", "Modular", "Eco Materials", "Smart Organization", "Multi-functional"]
    }
  };

  return (
    <>
      {/* ✅ Desktop Categories Bar with Mega Menu Container */}
      <div className="hidden lg:block bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex  space-x-12">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="py-4 text-black text-sm font-normal hover:text-gray-600 transition-colors tracking-wide border-b-2 border-transparent hover:border-black">
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Mega Menu Dropdown - Inside the same container */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-lg z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setActiveCategory(activeCategory)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="max-w-8xl mx-auto px-6 py-8">
                <div className="grid grid-cols-4 gap-8">
                  {/* Main Categories Column */}
                  <div className="space-y-6">
                    <h3 className="font-normal text-black text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      SHOP {activeCategory}
                    </h3>
                    <div className="grid gap-2">
                      {categories[activeCategory].subcategories.slice(0, 8).map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="text-black hover:text-gray-600 block py-1 text-xs font-normal tracking-wide hover:translate-x-1 transform transition-transform"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Featured Collections Column */}
                  <div className="space-y-6">
                    <h3 className="font-normal text-black text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      COLLECTIONS
                    </h3>
                    <div className="space-y-2">
                      {categories[activeCategory].featured.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="text-black hover:text-gray-600 transition-colors block py-2 text-xs font-normal tracking-wide border-b border-gray-100 hover:border-gray-300"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Special Offers Column */}
                  <div className="space-y-6">
                    <h3 className="font-normal text-black text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      OFFERS
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 border border-gray-200">
                        <h4 className="font-normal text-black text-xs mb-1 tracking-wide">ECO DISCOUNT</h4>
                        <p className="text-gray-600 text-xs tracking-wide">15% off sustainable products</p>
                      </div>
                      <div className="bg-gray-50 p-3 border border-gray-200">
                        <h4 className="font-normal text-black text-xs mb-1 tracking-wide">FREE SHIPPING</h4>
                        <p className="text-gray-600 text-xs tracking-wide">On orders over $199</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Column */}
                  <div className="space-y-6">
                    <h3 className="font-normal text-black text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
                      ACTIONS
                    </h3>
                    <div className="space-y-2">
                      <button className="w-full bg-black text-white px-4 py-3 text-xs font-normal tracking-wide hover:bg-gray-800 transition-colors text-center">
                        SHOP ALL {activeCategory}
                      </button>
                      <button className="w-full bg-gray-100 text-black px-4 py-3 text-xs font-normal tracking-wide hover:bg-gray-200 transition-colors text-center">
                        DESIGN CONSULTATION
                      </button>
                      <button className="w-full bg-gray-100 text-black px-4 py-3 text-xs font-normal tracking-wide hover:bg-gray-200 transition-colors text-center">
                        VIEW LOOKBOOK
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className="text-xs text-gray-600 font-normal tracking-wide">ECO MATERIALS</span>
                      <span className="text-xs text-gray-600 font-normal tracking-wide">FREE SHIPPING</span>
                      <span className="text-xs text-gray-600 font-normal tracking-wide">5-YEAR WARRANTY</span>
                    </div>
                    <button className="text-black hover:text-gray-600 text-xs font-normal tracking-wide">
                      VIEW ALL CATEGORIES →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ✅ Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-80 bg-white z-50 flex flex-col p-6 overflow-y-auto lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-normal text-black tracking-tight">CATEGORIES</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-1">
                {Object.keys(categories).map((category) => (
                  <div key={category} className="border-b border-gray-100">
                    <button
                      onClick={() => setActiveCategory(
                        activeCategory === category ? null : category
                      )}
                      className="flex items-center justify-between w-full py-3 text-black font-normal text-left text-sm tracking-wide"
                    >
                      <span>{category}</span>
                      <span className="text-sm">{activeCategory === category ? '−' : '+'}</span>
                    </button>
                    
                    {/* Mobile Subcategories */}
                    {activeCategory === category && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-3 space-y-2 mb-3"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {categories[category].subcategories.slice(0, 6).map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              className="block text-black hover:text-gray-600 transition-colors py-2 text-xs border-b border-gray-100 tracking-wide"
                              onClick={toggleMenu}
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                        <button className="w-full bg-black text-white px-4 py-2 text-xs font-normal tracking-wide hover:bg-gray-800 transition-colors mt-2">
                          SHOP ALL {category}
                        </button>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CategoriesMenu;