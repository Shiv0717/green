import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-normal tracking-widest uppercase">
              GREEN DECOR
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed tracking-wide max-w-xs">
              Sustainable home essentials crafted for modern living. 
              Eco-friendly furniture and decor for every space.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-normal tracking-widest uppercase text-gray-400">
              Shop
            </h3>
            <ul className="space-y-3">
              {['Living Room', 'Bedroom', 'Dining', 'Outdoor', 'Lighting', 'Decor'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-white hover:text-gray-400 transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xs font-normal tracking-widest uppercase text-gray-400">
              Support
            </h3>
            <ul className="space-y-3">
              {['Contact Us', 'Shipping Info', 'Returns', 'Warranty', 'FAQ', 'Size Guide'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-xs text-white hover:text-gray-400 transition-colors tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xs font-normal tracking-widest uppercase text-gray-400">
              Stay Updated
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-gray-400 tracking-wide">
                Subscribe for new collections and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-transparent border border-gray-700 px-3 py-2 text-xs text-white placeholder-gray-500 tracking-wide flex-1 outline-none"
                />
                <button className="bg-white text-black px-4 py-2 text-xs font-normal tracking-wide hover:bg-gray-200 transition-colors">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-xs text-gray-500 tracking-wide">
              © {new Date().getFullYear()} GREEN DECOR. ALL RIGHTS RESERVED.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
  <p className="text-xs text-gray-500 hover:text-white transition-colors tracking-wide uppercase">
    DESIGN & DEVELOPED BY <span className="font-semibold text-white">KSS</span>
  </p>
</div>


            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;