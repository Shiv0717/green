import React, { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    category: true,
    price: true,
    rating: true
  });

  const categories = ["Living Room", "Bedroom", "Dining", "Outdoor", "Lighting", "Decor"];
  const ratings = [4, 3, 2, 1];

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setPriceRange([0, 1000]);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 px-4 font-semibold hover:bg-green-700 transition-colors"
        >
         
          Show Filters
        </button>
      </div>

      {/* Filter Sidebar */}
      <div className={`
        ${isMobileFilterOpen ? 'fixed inset-0 z-50 bg-black bg-opacity-50' : 'hidden'} 
        lg:block lg:relative lg:bg-transparent
      `}>
        <aside className={`
          w-full lg:w-80 bg-white h-full lg:h-auto lg:sticky lg:top-24
          ${isMobileFilterOpen ? 'fixed left-0 top-0 h-screen overflow-y-auto' : ''}
        `}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
            
              <h3 className="text-2xl font-bold text-black">Filters</h3>
            </div>
            {isMobileFilterOpen && (
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="p-6 space-y-6">
            {/* Category Filter */}
           
            {/* Price Filter */}
            <div className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full text-left"
              >
                <h4 className="text-lg font-semibold text-black">Price Range</h4>
                {openSections.price ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              
              {openSections.price && (
                <div className="mt-4">
                  <div className="flex justify-between text-black font-medium mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>$0</span>
                    <span>$500</span>
                    <span>$1000</span>
                  </div>
                </div>
              )}
            </div>

           

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-green-600 text-white py-3 font-semibold hover:bg-green-700 transition-colors">
                Apply Filters
              </button>
              <button
                onClick={handleReset}
                className="flex-1 border border-gray-300 text-black py-3 font-semibold hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Active Filters */}
            {(selectedCategory || priceRange[1] < 1000) && (
              <div className="pt-4 border-t border-gray-200">
                <h5 className="font-semibold text-black mb-2">Active Filters:</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 text-sm rounded-full flex items-center gap-1">
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="hover:text-green-900"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {priceRange[1] < 1000 && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 text-sm rounded-full flex items-center gap-1">
                      Up to ${priceRange[1]}
                      <button
                        onClick={() => setPriceRange([0, 1000])}
                        className="hover:text-green-900"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #16a34a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </>
  );
};

export default Filter;