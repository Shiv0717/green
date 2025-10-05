import React, { useState } from "react";
import { ShoppingCart, User, Menu, X, Heart, Search, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">

<div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-center font-normal tracking-wider">
            FREE SHIPPING ON ALL ORDERS OVER $199 • 30-DAY RETURN POLICY
          </p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left - Mobile Menu & Logo */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Logo with Icon */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-normal text-black tracking-tight leading-none">
                  GREEN DECOR
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="flex items-center bg-gray-50 px-4 py-2 border border-gray-200">
                <Search className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="SEARCH PRODUCTS..."
                  className="ml-3 bg-transparent outline-none w-full text-black placeholder-gray-500 text-sm tracking-wide"
                />
              </div>
            </div>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile & Desktop */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-4 h-4 text-black" />
            </button>

            
           

            {/* User/Login */}
            <Link to="/profile" className="p-2 hover:bg-gray-100 transition-colors">
              <User className="w-4 h-4 text-black" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-4 h-4 text-black" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 flex items-center justify-center font-normal">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar - Toggleable */}
        {isSearchOpen && (
          <div className="lg:hidden mt-2 mb-3">
            <div className="flex items-center bg-gray-50 px-3 py-2 border border-gray-200">
              <Search className="w-4 h-4 text-gray-600 flex-shrink-0" />
              <input
                type="text"
                placeholder="SEARCH PRODUCTS..."
                className="ml-3 bg-transparent outline-none w-full text-black placeholder-gray-500 text-sm tracking-wide"
                autoFocus
              />
              <button 
                className="p-1 hover:bg-gray-200 transition-colors ml-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
