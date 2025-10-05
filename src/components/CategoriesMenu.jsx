import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CategoriesMenu = ({ isMenuOpen, toggleMenu }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = {
    "Living Room": {
      subcategories: ["Sofas & Sectionals", "Coffee Tables", "TV Units & Consoles", "Bookshelves & Storage", "Area Rugs", "Curtains & Blinds", "Accent Chairs", "Side Tables"],
      featured: ["New Arrivals 2024", "Best Sellers", "Sustainable Choices", "Modern Collection", "Minimalist Designs"]
    },
    "Bedroom": {
      subcategories: ["Beds & Headboards", "Wardrobes & Closets", "Dressers & Drawers", "Nightstands", "Mattresses", "Bedding Sets", "Bedroom Benches", "Vanity Tables"],
      featured: ["Organic Collection", "Eco-Friendly Materials", "Space Saving Solutions", "Luxury Bedding", "Smart Storage"]
    },
    "Dining": {
      subcategories: ["Dining Tables", "Dining Chairs", "Bar Stools", "Buffets & Sideboards", "Tableware Sets", "Serveware", "Table Linens", "Bar Carts"],
      featured: ["Sustainable Wood Collection", "Family Dining Sets", "Compact Dining Solutions", "Entertainment Ready", "Formal Dining"]
    },
    "Outdoor": {
      subcategories: ["Patio Furniture Sets", "Outdoor Dining", "Garden Decor", "Outdoor Lighting", "Planters & Pots", "Outdoor Rugs", "Hammocks & Swings", "Fire Pits"],
      featured: ["Weather Resistant", "Eco Materials", "Garden Essentials", "Outdoor Living", "Seasonal Specials"]
    },
    "Lighting": {
      subcategories: ["Ceiling Lights & Chandeliers", "Floor Lamps", "Table Lamps", "Outdoor Lighting", "Smart Lights", "Wall Sconces", "Pendant Lights", "LED Strips"],
      featured: ["LED Energy Saving", "Smart Home Integration", "Ambient Lighting", "Task Lighting", "Decorative Pieces"]
    },
    "Decor": {
      subcategories: ["Wall Art & Paintings", "Mirrors", "Throw Pillows & Cushions", "Vases & Planters", "Clocks", "Photo Frames", "Sculptures", "Candles & Holders"],
      featured: ["Handmade Collection", "Sustainable Materials", "Seasonal Collection", "Artisanal Pieces", "Limited Editions"]
    },
    "Office": {
      subcategories: ["Desks & Workstations", "Office Chairs", "Bookshelves", "Filing Cabinets", "Desk Organizers", "Office Lighting", "Conference Tables", "Storage Solutions"],
      featured: ["Ergonomic Designs", "Home Office Solutions", "Professional Grade", "Space Efficient", "Tech Integrated"]
    },
    "Storage": {
      subcategories: ["Cabinets & Cupboards", "Shelving Units", "Storage Baskets", "Chests & Trunks", "Wall Shelves", "Modular Storage", "Closet Systems", "Pantry Organizers"],
      featured: ["Space Saving Solutions", "Modular Systems", "Eco-Friendly Materials", "Smart Organization", "Multi-functional"]
    }
  };

  return (
    <>
      {/* ✅ Desktop Categories Bar with Mega Menu Container */}
      <div className="hidden lg:block bg-white border-b border-gray-200 relative">
        <div className="max-w-8xl mx-auto px-6">
          <div className="flex justify-center space-x-16">
            {Object.keys(categories).map((category) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="py-4 text-black text-base font-semibold hover:text-green-600 transition-colors border-b-2 border-transparent hover:border-green-600">
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
              className="absolute left-0 right-0 top-full bg-white border-t border-gray-300 shadow-lg z-50"
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
                    <h3 className="font-bold text-black text-lg uppercase tracking-wide border-b border-gray-200 pb-2">
                      Shop {activeCategory}
                    </h3>
                    <div className="grid gap-3">
                      {categories[activeCategory].subcategories.slice(0, 8).map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="text-black hover:text-green-600 block py-1 text-sm font-medium hover:translate-x-1 transform transition-transform"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Featured Collections Column */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-black text-lg uppercase tracking-wide border-b border-gray-200 pb-2">
                      Featured Collections
                    </h3>
                    <div className="space-y-3">
                      {categories[activeCategory].featured.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="text-black hover:text-green-600 transition-colors block py-2 text-sm font-semibold border-b border-gray-100 hover:border-green-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Special Offers Column */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-black text-lg uppercase tracking-wide border-b border-gray-200 pb-2">
                      Special Offers
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 text-sm mb-2">Eco-Friendly Discount</h4>
                        <p className="text-green-600 text-xs">Get 15% off on sustainable products</p>
                      </div>
                      <div className="bg-gray-50 p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-800 text-sm mb-2">Free Shipping</h4>
                        <p className="text-gray-600 text-xs">On orders over $199</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions Column */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-black text-lg uppercase tracking-wide border-b border-gray-200 pb-2">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full bg-green-600 text-white px-4 py-3 text-sm font-semibold hover:bg-green-700 transition-colors text-center">
                        Shop All {activeCategory}
                      </button>
                      <button className="w-full bg-gray-100 text-black px-4 py-3 text-sm font-semibold hover:bg-gray-200 transition-colors text-center">
                        Book Design Consultation
                      </button>
                      <button className="w-full bg-gray-100 text-black px-4 py-3 text-sm font-semibold hover:bg-gray-200 transition-colors text-center">
                        View Lookbook
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span className="text-xs text-gray-600 font-medium">🌱 Eco-Friendly Materials</span>
                      <span className="text-xs text-gray-600 font-medium">🚚 Free Shipping</span>
                      <span className="text-xs text-gray-600 font-medium">⭐ 5-Year Warranty</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 text-sm font-semibold">
                      View All Categories →
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
              className="fixed inset-y-0 right-0 w-96 bg-white z-50 flex flex-col p-8 overflow-y-auto lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-black">All Categories</h2>
                <button
                  onClick={toggleMenu}
                  className="p-3 bg-gray-100 hover:bg-gray-200 transition-colors rounded"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                {Object.keys(categories).map((category) => (
                  <div key={category} className="border-b border-gray-100">
                    <button
                      onClick={() => setActiveCategory(
                        activeCategory === category ? null : category
                      )}
                      className="flex items-center justify-between w-full py-4 text-black font-semibold text-left text-base"
                    >
                      <span>{category}</span>
                      <span className="text-lg">{activeCategory === category ? '−' : '+'}</span>
                    </button>
                    
                    {/* Mobile Subcategories */}
                    {activeCategory === category && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-3 mb-4"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {categories[category].subcategories.slice(0, 6).map((sub) => (
                            <a
                              key={sub}
                              href="#"
                              className="block text-black hover:text-green-600 transition-colors py-2 text-sm border-b border-gray-100"
                              onClick={toggleMenu}
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                        <button className="w-full bg-green-600 text-white px-4 py-3 text-sm font-semibold hover:bg-green-700 transition-colors mt-2">
                          View All {category}
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