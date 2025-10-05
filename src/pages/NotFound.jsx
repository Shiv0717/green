import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, Triangle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors"
            >
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <Triangle className="w-4 h-4 text-white transform rotate-90" />
              </div>
              <span className="text-xl font-normal tracking-tight">GREEN DECOR</span>
            </button>
            
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              GO BACK
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Number */}
          <div className="mb-8">
            <h1 className="text-9xl sm:text-[12rem] font-normal text-black tracking-tight leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-black mx-auto mt-4"></div>
          </div>

          {/* Message */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-black mb-4">
              PAGE NOT FOUND
            </h2>
            <p className="text-lg text-gray-600 tracking-wide max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring sustainable furniture.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-3" />
              BACK TO HOME
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
            
            <button
              onClick={() => navigate('/categories')}
              className="group flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-600 text-sm font-normal tracking-wide hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              <Search className="w-4 h-4 mr-3" />
              BROWSE COLLECTIONS
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-600 tracking-wide mb-6">
              POPULAR CATEGORIES
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Living Room', 'Bedroom', 'Dining', 'Outdoor', 'Lighting', 'Decor'].map((category) => (
                <button
                  key={category}
                  onClick={() => navigate(`/category/${category.toLowerCase().replace(' ', '-')}`)}
                  className="text-sm text-gray-600 hover:text-black transition-colors tracking-wide border-b border-transparent hover:border-black pb-1"
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black"></div>
      </div>

      {/* Footer Note */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500 tracking-wide">
            Need help? <button className="underline hover:text-black transition-colors">Contact Support</button> • 
            Green Decor Customer Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;