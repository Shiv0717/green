import React from "react";
import { ShoppingCart, User, Menu, X, Search, Leaf, Heart } from "lucide-react";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Left - Logo & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Logo */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-green-600">
                <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-2xl xl:text-3xl font-bold text-black tracking-tight leading-none">
                  GreenDecor
                </div>
                <div className="hidden lg:block text-xs text-gray-500 mt-0.5">Sustainable Living</div>
              </div>
            </div>
          </div>

          {/* Middle - Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 lg:mx-8 hidden md:block ">
            <div className="relative">
              <div className="flex items-center bg-gray-100 px-4 lg:px-6 py-2 lg:py-3 border border-gray-300 rounded-3xl">
                <Search className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search sustainable products..."
                  className="ml-3 lg:ml-4 bg-transparent outline-none w-full text-black placeholder-gray-500 text-sm lg:text-base"
                />
              </div>
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Wishlist - Hidden on mobile */}
            <button className="hidden sm:flex p-2 lg:p-3 hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </button>

            {/* Cart */}
            <button className="relative p-2 lg:p-3 hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center font-bold">
                3
              </span>
            </button>

            {/* User/Login */}
            <button className="p-2 lg:p-3 hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden mt-3 mb-3">
          <div className="flex items-center bg-gray-100 px-4 py-2 border border-gray-300">
            <Search className="w-4 h-4 text-gray-600 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search products..."
              className="ml-3 bg-transparent outline-none w-full text-black placeholder-gray-500 text-sm"
            />
          </div>
        </div>

        {/* Top Banner */}
       
      </div>

      <div className="hidden w-full lg:flex items-center justify-center bg-green-50 border-t border-green-200 py-2">
          <div className="flex items-center space-x-6 text-xs text-green-800 font-medium">
            <span className="flex items-center space-x-1">
              <Leaf className="w-3 h-3" />
              <span>Eco-Friendly Materials</span>
            </span>
            <span>•</span>
            <span>Free Shipping Over $199</span>
            <span>•</span>
            <span>30-Day Return Policy</span>
            <span>•</span>
            <span>Carbon Neutral Delivery</span>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;